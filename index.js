const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('API running');
})

app.post('/sendemail', async (req, res) => {
    const email = req.body.email;
    res.send({ message: `${email} subscribed successfully!`, success: true });
});

app.listen(port, () => {
    console.log('Server is running on port', port);
})
