# SIM Inventory Management System (Flask)

This is a simple backend application built with Python Flask and SQLAlchemy that allows you to manage SIM card details.

## Features

- Create new SIM card details
- Retrieve all SIM card details

## Requirements

- Python 3.x
- Flask
- Flask-SQLAlchemy
- SQLite (for the database)

You can install the required packages by running the following command:

pip install -r requirements.txt

## Usage

1. Run the Flask app:
```
python main.py

python -m http.server 8000
```

2. Use the following endpoints:

- `POST /sims`: Create a new SIM card detail
- `GET /sims`: Retrieve all SIM card details




