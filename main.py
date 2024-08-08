from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sim_details.db'
db = SQLAlchemy(app)
CORS(app)  # Enable CORS for the entire app

class SIMDetails(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sim_id = db.Column(db.String(50), nullable=False)
    device_id = db.Column(db.String(50), nullable=False)
    device_name = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'sim_id': self.sim_id,
            'device_id': self.device_id,
            'device_name': self.device_name
        }

@app.route('/sims', methods=['POST'])
def create_sim_details():
    data = request.get_json()
    sim_details = SIMDetails(
        sim_id=data['sim_id'],
        device_id=data['device_id'],
        device_name=data['device_name']
    )
    db.session.add(sim_details)
    db.session.commit()
    return jsonify(sim_details.to_dict()), 201

@app.route('/sims', methods=['GET'])
def get_all_sim_details():
    sim_details = SIMDetails.query.all()
    return jsonify([sim_detail.to_dict() for sim_detail in sim_details])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)
