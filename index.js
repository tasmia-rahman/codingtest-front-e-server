const express = require('express');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('API running');
})

app.post('/sendemail', async (req, res) => {
    const email = req.body;
    res.send({ message: `${email} subscribed successfully!`, success: true });
});

app.listen(port, () => {
    console.log('Server is running on port', port);
})
