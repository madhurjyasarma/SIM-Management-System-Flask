import requests

data = {
    'sim_id': 'SIM004',
    'device_id': 'DEVICE004',
    'device_name': 'Ultra Max ++'
}
response = requests.post('http://localhost:5000/sim', json=data)
print(response.json())