import React, { useState, useRef, useEffect } from 'react';
import { chatWithBot } from '../api/chatbot.js';
import { FaRobot, FaTimes, FaPaperPlane, FaUserCircle } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import './Chatbot.css';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', text: 'Hi there! I am your AI financial assistant. Ask me about your spending!' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMsg = input.trim();
        const newMessages = [...messages, { role: 'user', text: userMsg }];
        setMessages(newMessages);
        setInput('');
        setLoading(true);

        try {
            const data = await chatWithBot(userMsg);
            setMessages([...newMessages, { role: 'assistant', text: data.reply }]);
        } catch (error) {
            setMessages([...newMessages, { role: 'assistant', text: 'Oops! Something went wrong. Make sure my API key is configured and I am reachable.' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="chatbot-container">
            {!isOpen ? (
                <button className="chatbot-fab" onClick={() => setIsOpen(true)}>
                    <FaRobot />
                </button>
            ) : (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <div className="chatbot-header-title">
                            <FaRobot />
                            <span>Financial AI</span>
                        </div>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>

                    <div className="chatbot-body">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`chat-bubble-container ${msg.role}`}>
                                {msg.role === 'assistant' ? <FaRobot className="chat-avatar" /> : <FaUserCircle className="chat-avatar" />}
                                <div className={`chat-bubble ${msg.role}`}>
                                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="chat-bubble-container assistant">
                                <FaRobot className="chat-avatar" />
                                <div className="chat-bubble assistant typing">Thinking...</div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chatbot-footer">
                        <input
                            type="text"
                            placeholder="Ask about your expenses..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button onClick={handleSend} disabled={loading || !input.trim()}>
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
