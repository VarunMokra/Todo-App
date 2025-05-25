def todo_serializer(todo) -> dict:

    serialized_todo = {
        "id": str(todo["_id"]),  # Convert ObjectId to string
        "text": todo["text"],
        "completed": todo["completed"],
    }
    return serialized_todo

def todos_serializer(todos) -> list:
    return [todo_serializer(todo) for todo in todos]