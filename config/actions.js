var Action = require('../models/action');
var mongoose = require('mongoose');
var db = require('./database');

mongoose.connect(db.mongodb_url, { useNewUrlParser: true});

Action.deleteMany({}, ()=>{});

const actions = [
    {
        name: 'general information',
        description: "get general, open information on a mine in my country"
    },
    {
        name: 'job advertisements',
        description: "look up jobs and job advertisements at my local mine"
    },
    {
        name: 'complaint on exploitation',
        description: "submit a complaint about companies exploiting resources in my area"
    },
    {
        name: 'complaint on pollution',
        description: "submit a complaint about industries polluting the environment"
    }
]

actions.forEach(action => {
    let newAction = new Action();
    newAction.name = action.name;
    newAction.description = action.description;
    newAction.save(err => {
        if(err) throw err;
        process.exit();
    })
})