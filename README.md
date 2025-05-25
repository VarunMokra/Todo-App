# 📝 Todo App

A **full-stack Todo application** built with [FastAPI](https://fastapi.tiangolo.com/) (Python) for the backend and [React](https://react.dev/) (Vite + TailwindCSS) for the frontend. Data is stored in **MongoDB**.

---

## 🚀 Features

- ✅ Add, update (toggle complete), and delete todos
- 💾 Persistent storage with MongoDB
- ⚡ Modern React frontend with TailwindCSS
- 🔗 RESTful API with FastAPI
- 🔒 CORS enabled for local development

---

## 📁 Project Structure

```
todo-app/
├── backend/
│   ├── app/
│   │   ├── core/         # Configuration (env, DB)
│   │   ├── db/           # MongoDB connection
│   │   ├── models/       # Serializers
│   │   ├── routes/       # API routes
│   │   ├── schemas/      # Pydantic schemas
│   │   └── main.py       # FastAPI entrypoint
│   └── requirements.txt  # Python dependencies
├── frontend/
│   ├── src/              # React source code
│   ├── public/           # Static assets
│   ├── package.json      # Frontend dependencies
│   └── vite.config.js    # Vite config
└── README.md             # Project documentation
```

---

## 🛠️ Getting Started

### Prerequisites

- [Python 3.10+](https://www.python.org/)
- [Node.js 18+](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (local or remote)

---

### ⚙️ Backend Setup

1. **Install dependencies:**
   ```sh
   cd backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

2. **Configure environment variables:**

   Create a `.env` file in `backend/`:
   ```
   MONGO_URI=mongodb://localhost:27017
   MONGO_DB_NAME=todos_app
   ```

3. **Run the backend:**
   ```sh
   uvicorn app.main:app --reload
   ```
   The API will be available at [http://localhost:8000](http://localhost:8000).

---

### 🎨 Frontend Setup

1. **Install dependencies:**
   ```sh
   cd frontend
   npm install
   ```

2. **Configure environment variables:**

   Create a `.env` file in `frontend/`:
   ```
   VITE_TODOS_BACKEND_URL=http://localhost:8000
   ```

3. **Run the frontend:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

---

## 📚 API Endpoints

| Method | Endpoint                | Description                |
|--------|------------------------ |----------------------------|
| GET    | `/todos`                | List all todos             |
| POST   | `/create_todo`          | Create a new todo          |
| PUT    | `/update_todo/{id}`     | Toggle completion status   |
| DELETE | `/delete_todo/{id}`     | Delete a todo              |

---

## 📄 License

This project is for educational purposes.

---
