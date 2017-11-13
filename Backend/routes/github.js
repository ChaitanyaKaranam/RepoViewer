const express=require('express');
const router=express.Router();
const axios=require('axios');

const REPO_URL='https://api.github.com/search/repositories';

const SEARCH_URL='https://api.github.com/search/repositories?q=workout%20manager+language:javascript';

router.get('/',(req,res)=>{
    res.send('hello githb');
});

router.get('/language',(req,res)=>{
        axios.get(`${REPO_URL}?q=${req.query.lang}&page=${req.query.page}`).then((val)=>{
        res.send(val.data);
    })
});

router.get('/language/search',(req,res)=>{
    axios.get(`${SEARCH_URL}?q=${req.query.repo}+language:${req.query.lang}&page=${req.query.page}&per_page=20`).then((val)=>{
        res.send(val.data);
    })
});

module.exports=router;