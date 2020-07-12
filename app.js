import express from 'express';
import mongoose from 'mongoose';
import {studentRouter} from './routes/studentRouter.js'

mongoose
  .connect(
    "mongodb+srv://CarlosTavares:carlos12321@cluster0.dsmin.mongodb.net/grades?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("Conectado ao mongodb atlas."))
  .catch((err) => {
    console.log("Erro ao conectar no mongodb atlas" + err);
  });


const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => {
    console.log("API Iniciada");
})