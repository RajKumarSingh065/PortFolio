const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const { firstName, lastName, phoneNumber, email, message } = req.body;

  // Save the form data or process it (e.g., send email, store in a database)
  console.log('Form Data Received:', req.body);

  // Respond with success
  res.status(200).json({ message: 'Form submitted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/contactForms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  message: String,
});

const Form = mongoose.model('Form', formSchema);

app.post('/submit-form', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(200).json({ message: 'Form submitted and saved to the database' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving the form', error });
  }
});
