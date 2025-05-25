from pymongo import MongoClient
from app.core.config import MONGO_URI, MONGO_DB_NAME

client = MongoClient(MONGO_URI)

todos_db = client[MONGO_DB_NAME]

todos_collection = todos_db["todos"]