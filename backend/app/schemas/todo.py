from typing import Optional
from pydantic import BaseModel, Field

class Todo(BaseModel):
    id: Optional[str] = Field(None)
    text: str
    completed: Optional[bool] = False
