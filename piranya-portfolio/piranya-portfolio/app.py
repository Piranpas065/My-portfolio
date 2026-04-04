from flask import Flask, render_template, request, redirect
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/send-message", methods=["POST"])
def send_message():
    name = request.form.get("name", "")
    email = request.form.get("email", "")
    message = request.form.get("message", "")
    mailto = f"mailto:piranya105@gmail.com?subject=Portfolio Contact from {name}&body={message}%0A%0AFrom: {email}"
    return redirect(mailto)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
