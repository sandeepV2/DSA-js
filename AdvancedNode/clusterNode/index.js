import express from "express";

const port = 8001;
const app = express();

app.get("/heavy", (req, res)=>{
    let counter=0;
    for(let i=0;i<100_00_00;i++){
        counter+=1;
    }
    res.status(200).send(`counter: ${counter}`);
})

app.listen(port, () => {
    console.log(`Server is starting at ${port}`);
    console.log(` At process id : ${process.pid}`);
})