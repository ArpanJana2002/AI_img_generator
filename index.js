const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 7000;

const app = express();

app.use(express.json());
app.use('/openai', require('./routes/OpenAIRoutes'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/OpenAIRoutes'));

app.listen(port, () => console.log(`server started on port ${port}`));


