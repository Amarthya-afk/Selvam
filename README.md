<div align="center">
  <img src="./Logo.jpeg" alt="Selvam Logo" width="160" style="border-radius: 20px; box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3); border: 2px solid #d4af37;" />

  <br />

  <h1>💰 Selvam</h1>
  <h3>Unified Family Finance & Wealth Management Platform</h3>
  
  <p>
    <strong>A high-performance MERN-stack wealth management platform meticulously designed for Indian households.</strong><br/>
    Consolidate expenses, track gold/FD/stock assets, manage liabilities, and get AI-powered financial insights in one beautiful dashboard.
  </p>

  <p>
    <img src="https://img.shields.io/badge/Stack-MERN-1a8b44?style=for-the-badge&logo=mongodb" alt="MERN Stack" />
    <img src="https://img.shields.io/badge/Frontend-React%2018%20%2B%20Vite-61dafb?style=for-the-badge&logo=react&logoColor=black" alt="React & Vite" />
    <img src="https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node & Express" />
    <img src="https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Gemini AI" />
  </p>
</div>

---

## ✨ Features

- **💎 Premium Glassmorphism UI:** Breathtaking, highly-polished user interface with dynamic animations, gradient text, and responsive cards natively built with vanilla CSS.
- **👨‍👩‍👦 Family Accounts:** Create a household, invite family members via Join Code, and consolidate net-worth across spouses and dependents.
- **💸 Expense Insights:** Emoji-coded expense tracking with visual progress bars showing category breakdowns (Food, Rent, Transport, etc.).
- **🏦 Asset Portfolio:** Track dynamic assets like 22k Gold (live API sync), Stocks, Fixed Deposits (auto-compound interest), and Real Estate.
- **📉 Liability Manager:** Manage Home Loans, Credit Cards, and EMIs with automated "Overdue" detection.
- **🤖 AI Financial Advisor:** Built-in floating chatbot powered by **Google Gemini 1.5 Flash**. The bot reads your *actual* database entries to answer questions like *"What is our biggest household expense?"* or *"Compare Priya's spending to Aditya's."*

---

## 👨‍💻 Formidable Team

Developed natively as a holistic full-stack project at Amrita School of Computing, Coimbatore:

| Member | Roll Number | Role |
|:---|:---|:---|
| **Amarthya Sujay** | `CB.SC.U4CSE23003` | Full Stack Developer |
| **Sanjay A R**     | `CB.SC.U4CSE23052` | Full Stack Developer |
| **Sundar T**       | `CB.SC.U4CSE23348` | Full Stack Developer |

> **Course:** Full Stack Development

---

## 🚀 Quick Start & Live Demo Data

To see the platform at its best, Selvam comes with a comprehensive seeding script that generates a highly realistic Indian household.

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/sanj4git/Selvam.git
cd Selvam

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Environment Variables
Create a `.env` in the `backend/` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=super_secret_jwt_key
GEMINI_API_KEY=your_google_gemini_api_key
```

Create a `.env` in the `frontend/` directory:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 3. Seed the Database
Generate our highly realistic demo family (Arjun, Priya, and Aditya Sharma):
```bash
cd backend
node seed.js
```

### 4. Run the Platform
```bash
# Terminal 1: Backend
cd backend
npm start

# Terminal 2: Frontend
cd frontend
npm run dev
```

Visit `http://localhost:5173`. 

**Demo Login Credentials:**
- **Email:** `demo@selvam.in`
- **Password:** `Demo@1234`

---

## 🏗 Tech Stack Architecture

**Frontend:**
- **React 18** + **Vite**: Lightning-fast compilation and highly reactive state management.
- **Recharts**: Enterprise-grade SVG charting for Net Worth and monthly breakdown visualizations.
- **React Router v6**: Protected routing with JWT validation checks.
- **Vanilla CSS**: Advanced CSS3 features including `backdrop-filter`, `@keyframes` for floating orbs, and CSS Grid.

**Backend:**
- **Node.js + Express 5**: Action-centric RESTful API architecture.
- **MongoDB Atlas + Mongoose**: Cloud schema modeling with aggregation pipelines allowing for deep financial queries.
- **Google Generative AI SDK**: Feeds live user data directly into Gemini's context window for real-time portfolio advising.
- **bcryptjs + jsonwebtoken**: Robust security posture hashing passwords and securing endpoints.
- **node-cron**: Background job processing (e.g. syncing live gold prices daily).

---

## 🔮 Future Scope
- **Bank Statement Parsing:** Allowing users to upload PDF statements and automatically extracting transactions using Gemini Pro Vision.
- **UPI Integration:** Adding deep links to allow users to settle balances or pay EMIs directly out of the Selvam liability tracker.
- **Gamification:** Awarding "Financial Prudence" badges to family members who stay under budget limits.

<br/>
<p align="center">
  <i>Made with ❤️ in India, for Indian Families.</i>
</p>
