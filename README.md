Resume Portfolio - MERN Stack Application
A professional resume/portfolio management system built with MongoDB, Express.js, React, and Node.js.

Features
✨ Create and edit your professional resume
💼 Add multiple work experiences
🎓 Manage education history
🛠️ List technical and soft skills
📊 Showcase your projects
🌐 Multiple language support
📄 Print/Save as PDF functionality
📱 Fully responsive design
🎨 Modern UI with Tailwind CSS
Prerequisites
Before you begin, ensure you have installed:

Node.js (v14 or higher)
MongoDB (local installation or MongoDB Atlas account)
npm or yarn package manager
Installation
1. Clone the repository
git clone https://github.com/Raheena-07/-resume-portfolio.git
cd resume-portfolio
2. Backend Setup
cd backend
npm install
Create a .env file in the backend directory:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/resume-portfolio
For MongoDB Atlas (cloud), use:

MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/resume-portfolio
3. Frontend Setup
cd frontend
npm install
Running the Application
Start MongoDB (if using local installation)
mongod
Start Backend Server
cd backend
npm run dev
The backend will run on http://localhost:5000

Start Frontend Development Server
cd frontend
npm run dev
The frontend will run on http://localhost:3000

Project Structure
resume-portfolio/
├── backend/
│   ├── models/
│   │   └── Resume.js          # MongoDB schema
│   ├── routes/
│   │   └── resume.js          # API routes
│   ├── server.js              # Express server
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx     # Navigation component
│   │   │   ├── ResumeForm.jsx # Resume editing form
│   │   │   └── ResumeView.jsx # Resume display
│   │   ├── App.jsx            # Main app component
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
API Endpoints
GET /api/resume - Fetch resume data
POST /api/resume - Create or update resume
DELETE /api/resume - Delete resume
Usage
Navigate to http://localhost:3000
Click "Edit Resume" to create/update your resume
Fill in your personal information, experience, education, skills, and projects
Click "Save Resume" to store your data
Click "View Resume" to see your formatted resume
Use the "Print / Save as PDF" button to export your resume
Building for Production
Backend
cd backend
npm start
Frontend
cd frontend
npm run build
The production build will be in the frontend/dist directory.

Technologies Used
Backend
Node.js
Express.js
MongoDB with Mongoose
CORS
dotenv
Frontend
React 18
Vite
Tailwind CSS
Modern JavaScript (ES6+)
Customization
You can customize the application by:

Modifying the color scheme in Tailwind CSS classes
Adding new sections to the Resume model
Changing the layout in ResumeView component
Adding authentication for multi-user support
Troubleshooting
MongoDB Connection Issues:

Ensure MongoDB is running
Check your connection string in .env
Verify network connectivity for MongoDB Atlas
Port Already in Use:

Change the PORT in backend .env file
Change the port in frontend vite.config.js
Dependencies Issues:

Delete node_modules and package-lock.json
Run npm install again
Future Enhancements
User authentication and authorization
Multiple resume templates
Export to different formats (Word, PDF)
Resume sharing via unique links
Analytics dashboard
AI-powered resume suggestions


Author
RAHEENA RAHUMAN

Support
For issues or questions, please open an issue on GitHub or contact the maintainer.
