import api from "./client.js";

export async function chatWithBot(message) {
    const { data } = await api.post("/api/chat", { message });
    return data;
}
