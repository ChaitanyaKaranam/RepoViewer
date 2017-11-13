const express=require('express');
const router=express.Router();

const frameworks=[
    {
        'type':'framework',
        'name':'JavaScript',
        'img':'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/javascript/javascript.png'
    },
    {
        'type':'framework',
        'name':'Angular',
        'img':'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/angular/angular.png'
    },
    {
        'type':'framework',
        'name':'Vue',
        'img':'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/vue/vue.png'
    },
    {
        'type':'framework',
        'name':'Node.js',
        'img':'https://raw.githubusercontent.com/github/explore/fd96fceccf8c42c99cbe29cf0f8dcc4736fcb85a/topics/nodejs/nodejs.png'
    },
    {
        'type':'framework',
        'name':'React',
        'img':'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react/react.png'
    }
];

const languages=[
    {
        'type':'language',
        'name':'Python',
        'img':'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/python/python.png'
    },
    {
        'type':'language',
        'name':'Java',
        'img':'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/java/java.png'
    },
    {
        'type':'language',
        'name':'C#',
        'img':'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/csharp/csharp.png'
    },
    {
        'type':'language',
        'name':'PHP',
        'img':'https://raw.githubusercontent.com/github/explore/ccc16358ac4530c6a69b1b80c7223cd2744dea83/topics/php/php.png'
    },
    {
        'type':'language',
        'name':'Perl',
        'img':'https://raw.githubusercontent.com/github/explore/f7cc150583e104a07863c9645f6dc151c350f6a7/topics/perl/perl.png'
    },
];

const explore=[
    frameworks,
    languages
]

router.get('/',(req,res)=>{
    res.send(explore);
});

module.exports=router;
