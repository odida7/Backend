const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express());

//db connection
mongoose.connect(
    `mongodb+srv://dani:adido@cluster0.su35s.mongodb.net/laptop?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", ()=>{console.log("error connection")});
db.once("open", ()=> {
    console.log("Success")
});

app.listen(3000,()=>{
    console.log('server running at port 3000')
});