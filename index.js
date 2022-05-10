import express from "express";
import routes from './routes/index';
import env from "./utils/index";
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
const app = express();
mongoose.connect('mongodb+srv://abhikrrao:abhirrao@cluster0.dv5xy.mongodb.net/Cluster0?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/sample_training').then((data)=>console.log(`running ${data}`)).catch(error => console.log(error));
const db = mongoose.connection;
// console.log(db)
app.use(bodyParser.json());
app.use('/', routes())
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});

