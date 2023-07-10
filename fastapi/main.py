from fastapi import FastAPI
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: str | None = None

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/items/{id}")
async def read_item(id: int, q: str | None = None):
    if q:
        return {"item_id": id, "q": q}
    return {"item_id": id}

@app.post("/item/")
async def read_item(item: Item = None):
    if item:
        return {"name": item.name, "description": item.description}
    return "Non hai passato nulla nel body eh..."