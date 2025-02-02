# FAQ Management System (Node.js & Express)

## 📌 Project Overview
This is a **multilingual FAQ management system** built using **Node.js, Express, MongoDB, and Redis**. It supports **automatic translations** via Google Translate API and allows users to manage FAQs with a **WYSIWYG editor**. The system is optimized with **Redis caching** for fast API responses.

---

## 🚀 Features
- **RESTful API** for FAQ management
- **Google Translate API** for automatic multilingual support (English, Hindi, Bengali, etc.)
- **WYSIWYG Editor Support** for formatting FAQ answers
- **Redis Caching** to improve performance
- **Docker Support** for easy deployment
- **Comprehensive Unit Tests** using Mocha, Chai, and Supertest
- **Linting & Code Quality** with ESLint

---

## 📂 File Structure
```
/faq-project
│── /src
│   │── /config
│   │   ├── db.js (MongoDB connection)
│   │   ├── redis.js (Redis caching setup)
│   │── /models
│   │   ├── faqModel.js (FAQ schema)
│   │── /routes
│   │   ├── faqRoutes.js (API endpoints)
│   │── /controllers
│   │   ├── faqController.js (FAQ business logic)
│   │── /middlewares
│   │   ├── errorMiddleware.js (Error handling)
│   │── /utils
│   │   ├── translate.js (Google Translate integration)
│   │── app.js (Main application entry point)
│── .env (Environment variables)
│── package.json (Project dependencies)
│── Dockerfile (Docker configuration)
│── docker-compose.yml (Docker Compose setup)
│── README.md (Project documentation)
│── tests/faq.test.js (API tests)
```

---

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/faq-project.git
cd faq-project
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file and configure it:
```env
PORT=8000
MONGO_URI=mongodb+srv://your_mongo_uri
REDIS_URL=redis://localhost:6379
```

### **4️⃣ Start the Server**
```sh
npm start
```

### **5️⃣ Run the Tests**
```sh
npm test
```

---

## 📡 API Endpoints
### **Get FAQs (Default: English)**
```sh
GET /api/faqs/
```
Response:
```json
[
  { "question": "What is Node.js?", "answer": "Node.js is a runtime environment." }
]
```

### **Get FAQs in Hindi**
```sh
GET /api/faqs/?lang=hi
```
Response:
```json
[
  { "question": "Node.js क्या है?", "answer": "Node.js एक रनटाइम पर्यावरण है।" }
]
```

### **Create a New FAQ**
```sh
POST /api/faqs/
Content-Type: application/json

{
  "question": "What is Express.js?",
  "answer": "Express.js is a web framework for Node.js."
}
```
Response:
```json
{ "message": "FAQ created successfully" }
```

---

## 🚀 Docker Setup
Run the project with Docker:
```sh
docker-compose up --build
```

---

## ✅ Testing & Linting
### **Run Tests (Mocha & Chai)**
```sh
npm test
```
### **Run ESLint**
```sh
npm run lint
```

---

## 📌 Git Commit Guidelines
Follow **Conventional Commits**:
- `feat:` New feature (e.g., `feat: add multilingual FAQ API`)
- `fix:` Bug fix (e.g., `fix: resolve translation cache issue`)
- `docs:` Documentation (e.g., `docs: update README`)
- `chore:` Maintenance (e.g., `chore: add ESLint config`)
- `test:` Testing (e.g., `test: add API test cases`)

---

## 📜 License
This project is licensed under the MIT License.

---

## 🏆 Credits
Developed by **Devesh Kailodiya** 🚀

