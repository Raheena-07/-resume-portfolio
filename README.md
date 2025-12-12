# 📄 Resume Portfolio Builder  
A full-stack MERN application that allows users to **create, edit, preview, and download** a professional resume with a clean modern UI.  
The project features a React & Tailwind CSS frontend integrated with an Express + MongoDB backend.

---

## 📌 Features

### ✅ Resume Builder  
- Add personal details, education, skills, experience, and projects  
- Auto-save and retrieve resume from database  
- Beautiful preview layout  

### 🎨 Modern UI  
- Tailwind CSS styling  
- Responsive design  
- Smooth animations  
- Gradient navbar & header  

### 🖨️ Print / PDF Export  
- One-click Print / Save as PDF  
- Auto-hide UI elements when printing  

### 💾 Backend API  
- MongoDB for storage  
- CRUD endpoints for resume  
- Express.js REST API
- 
## 📌 Features

### ✅ Resume Builder  
- Add personal details, education, skills, experience, and projects  
- Auto-save and retrieve resume from database  
- Beautiful preview layout  

### 🎨 Modern UI  
- Tailwind CSS styling  
- Responsive design  
- Smooth animations  
- Gradient navbar & header  

### 🖨️ Print / PDF Export  
- One-click Print / Save as PDF  
- Auto-hide UI elements when printing  

### 💾 Backend API  
- MongoDB for storage  
- CRUD endpoints for resume  
- Express.js REST API

## 📁 Project Structure

resume-portfolio/
│
├── backend/
│ ├── server.js
│ ├── routes/
│ ├── models/
│ 
│ ├── package.json
│ └── .env (ignored)
│
├── frontend/
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.js
│
└── README.md


---

## ⚙️ Installation & Setup

### **1️⃣ Clone Repository**
```bash
git clone https://github.com/YOUR_USERNAME/resume-portfolio.git
cd resume-portfolio
2️⃣ Install Dependencies
Backend:
bash
Copy code
cd backend
npm install
Frontend:
bash
Copy code
cd ../frontend
npm install
3️⃣ Build Frontend
bash
Copy code
npm run build

bash
Copy code
frontend/dist → backend/dist
4️⃣ Environment Variables
Create backend/.env:

ini
Copy code
PORT=5000
MONGODB_URI=your_mongo_connection_string
5️⃣ Start Development Servers
Backend:
bash
Copy code
cd backend
npm run dev
Frontend 
bash
Copy code
npm run dev
