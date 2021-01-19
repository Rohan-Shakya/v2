const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./middleware/connectDB');

// Connect Database
connectDB();

app.use(cors());

app.use(express.json({ extended: true }));

app.use('/api/user', require('./routes/user'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at Port: ${PORT}`);
});
