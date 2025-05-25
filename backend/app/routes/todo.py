from fastapi import APIRouter, HTTPException
from app.models.todo import todo_serializer, todos_serializer
from app.schemas.todo import Todo
from app.db.db import todos_collection
from bson import ObjectId

router = APIRouter()

@router.get("/todos", response_model=list[Todo])
def get_todos():
    todos = list(todos_collection.find())
    return todos_serializer(todos)

@router.post("/create_todo", response_model=Todo)
def create_todo(todo: Todo):
    new_todo = {
        "text": todo.text,
        "completed": todo.completed
    }
    result = todos_collection.insert_one(new_todo)
    created_todo = todos_collection.find_one({"_id": ObjectId(result.inserted_id)})
    return todo_serializer(created_todo)

@router.put("/update_todo/{todo_id}", response_model=Todo)
def update_todo(todo_id: str):
    try:
        obj_id = ObjectId(todo_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid ID")

    updated_todo = todos_collection.find_one({"_id": obj_id})

    if updated_todo is None:
        raise HTTPException(status_code=404, detail="Todo not found")
    updated_todo_status = not updated_todo["completed"]
    result = todos_collection.update_one(
        {"_id": obj_id},
        {"$set": {"completed": updated_todo_status}}
    )
    updated_todo = todos_collection.find_one({"_id": ObjectId(todo_id)})
    return todo_serializer(updated_todo)

@router.delete("/delete_todo/{todo_id}", response_model=dict)
def delete_todo(todo_id: str):
    try:
        obj_id = ObjectId(todo_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid ID")

    deleted_todo = todos_collection.find_one({"_id": obj_id})

    if deleted_todo is None:
        raise HTTPException(status_code=404, detail="Todo not found")

    todos_collection.delete_one({"_id": obj_id})
    return {"message": "Todo deleted successfully"}
