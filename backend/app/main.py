from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import todo

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Todo API"}
app.include_router(todo.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

