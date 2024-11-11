const express = require('express');
const bodyParser = require('body-parser');
const africastalking = require('africastalking')({
    apiKey: 'YOUR_API_KEY', // Replace with your actual API key
    username: 'YOUR_USERNAME' // Replace with your actual username
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/ussd', (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    let response = '';

    if (text === '') {
        response = `CON Welcome to Water Conservation Learning
        1. Learn about Water Conservation
        2. Learn about Sewage Management`;
    } else if (text === '1') {
        response = `CON Choose a topic
        1. Importance of Water Conservation
        2. Methods of Water Conservation`;
    } else if (text === '1*1') {
        response = `END Water conservation is essential because...`;
    } else if (text === '1*2') {
        response = `END Methods of water conservation include...`;
    } else if (text === '2') {
        response = `CON Choose a topic
        1. Importance of Sewage Management
        2. Methods of Sewage Management`;
    } else if (text === '2*1') {
        response = `END Sewage management is important because...`;
    } else if (text === '2*2') {
        response = `END Methods of sewage management include...`;
    }

    res.send(response);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
