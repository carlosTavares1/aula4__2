/*Imports para uso na aplicação */
import express from 'express';
import mongoose from 'mongoose';
import {studentRouter} from './routes/studentRouter.js'

/*Conexão com o mongoDB */
mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.dsmin.mongodb.net/grades?retryWrites=true&w=majority`,
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

app.listen(process.env.PORT, () => {
    console.log("API Iniciada");
})