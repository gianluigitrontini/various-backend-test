from flask import Flask, request, make_response
from markupsafe import escape

app = Flask(__name__)

@app.route("/<param>")
def hello_world(param):
    return {
        "name": param,
        "username": request.cookies.get("username"),
        "status": "Success"
    }