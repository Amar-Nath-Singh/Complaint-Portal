const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express({ path: '.env' });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://Saarang_Task:amarnath01@saarangtaskcluster.xxre5di.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const dataRoute = require('./routes/dataset');
const useRoute = require('./routes/user');

app.use('/dataset', dataRoute);
app.use('/user', useRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});