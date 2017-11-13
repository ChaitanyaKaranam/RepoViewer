const express=require('express');
const app=express();
const github=require('./routes/github');
const explore=require('./routes/frameworks');
const cors=require('cors');

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello');
});

app.listen(3000,res=>{
    console.log('Server started at port 3000...');
});

app.use('/repos',github);

app.use('/explore',explore);