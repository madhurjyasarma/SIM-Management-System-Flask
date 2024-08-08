const form = document.getElementById('simForm');
const fetchButton = document.getElementById('fetchData');
const simTableBody = document.querySelector('#simTable tbody');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const simId = document.getElementById('simId').value;
    const deviceId = document.getElementById('deviceId').value;
    const deviceName = document.getElementById('deviceName').value;

    const data = {
        sim_id: simId,
        device_id: deviceId,
        device_name: deviceName
    };

    try {
        const response = await fetch('http://0.0.0.0:5000/sims', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('SIM details created:', responseData);
            alert('SIM details added successfully');
        } else {
            console.error('Error creating SIM details:', await response.text());
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

fetchButton.addEventListener('click', async () => {
    try {
        const response = await fetch('http://0.0.0.0:5000/sims');
        
        if (response.ok) {
            const simDetails = await response.json();
            simTableBody.innerHTML = ''; // Clear existing rows
            simDetails.forEach(simDetail => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${simDetail.id}</td>
                    <td>${simDetail.sim_id}</td>
                    <td>${simDetail.device_id}</td>
                    <td>${simDetail.device_name}</td>
                `;
                simTableBody.appendChild(row);
            });
        } else {
            console.error('Error fetching SIM details:', await response.text());
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
