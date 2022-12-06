const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.port || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/squirreldata');
mongoose.Promise = global.Promise;

app.use(express.json());

const Squirrel = require('./squirrel');

app.get('/squirrels',function(req,res){
    Squirrel.find({}).then(function(squirrels){
        res.send(squirrels);
    })
});

app.get('/squirrels/:id',function(req,res){
    Squirrel.find({squirrel_id: req.params.id}).then(function(squirrels){
        res.send(squirrels);
    })
});

app.post('/squirrels',function(req,res){
    Squirrel.create(req.body).then(function(squirrel){
        res.send(squirrel);
    })
});

app.put('/squirrels/:id',function(req,res){
    Squirrel.findOneAndUpdate({squirrel_id: req.params.id},req.body).then(function(squirrel){
        Squirrel.findOne({squirrel_id: req.params.id}).then(function(squirrel){
            res.send(squirrel);
        });
    });
});

app.delete('/squirrels/:id',function(req,res){
    Squirrel.findOneAndDelete({squirrel_id: req.params.id}).then(function(squirrel){
        res.send(squirrel);
    });
});

app.listen(port, function(){
   console.log('Server starting');
});