import express from 'express';

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/",(req,res)=>{
    res.send("backend is running");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 