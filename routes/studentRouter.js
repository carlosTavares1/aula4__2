import express from 'express'
import { studentModel } from '../models/student.js';

const app = express();

app.get("/student", async (req, res) => {
    try{
        const student = await studentModel.find({});
        res.send(student);
    }catch(err){
        res.status(500).send("Não funcionou."+err);
    }
})

app.post("/student", async (req, res) => {
    try{
        const student = new studentModel(req.body);
        await student.save();
        res.send(student);
    }catch(err){
        res.status(500).send(err.message);
    }
})

app.delete("/student/:id", async (req, res) => {
    try{
        const student = await studentModel.findOneAndDelete({"_id": req.params.id});
        if(!student){
            res.status(404).send("Documento não encontrado.");
        }
        res.status(200).send();
    }catch(err){
        res.status(500).send("err.message");
    }
})

app.patch("/student/:id", async (req, res) => {
    try{
        const student = await studentModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        res.status(200).send(student);
    }catch(err){
        res.status(404).send(err.message);
    }
})

export {app as studentRouter}