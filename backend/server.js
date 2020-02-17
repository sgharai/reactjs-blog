const express = require('express')
const app = express()
const port = process.env.port || 3050
const mongoose = require('mongoose')
const uri = "mongodb+srv://sgharai:sofia0o0@cluster0-rbluw.mongodb.net/test?retryWrites=true&w=majority"
const Schema = mongoose.Schema
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const Post = require('./Post.model')

app.listen(port, () => console.log(`Listening on port ${port}`))

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
})

//HTTP request logger
app.use(morgan('tiny'))


//Routes
app.get('/api', (req, res) => {
    const data = {
        username: 'sofiag',
        age: 22
    }
    res.json(data)
})

//CRUD for posts
app.post('/addPost', (req, res) => {
    console.log("Adding new post")
    const postObj = {
        "_id": new mongoose.Types.ObjectId,
        "title": req.body.title,
        "author": req.body.author,
        "content": req.body.content,
        "displayImageLink": req.body.displayImageLink
        //irl you would parse ID directly from request from frontend
    }
    const newPost = new Post(postObj);
    newPost.save((err, post) => {
        if(err) {
            res.status(400).send("An error has occurred")
        }
        else{
            res.status(200).json(post)
        }
    })
})

app.get('/posts',(req, res) => { 
    console.log("Getting posts")
    Post.find({}).exec((err, posts) =>{
        if(err) {
            res.status(400).send("An error has occurred")
        }
        else{
            res.status(200).json(posts)
        }
    })
})

app.put('/posts/:id',(req, res) => { 
    console.log("Editing a document")
    const postObj = {
        "_id": new mongoose.Types.ObjectId,
        "title": String,
        "author": String,
        "content": String,
        "displayImageLink": String
        //irl you would parse ID directly from request from frontend
    }
    Post.findByIdAndUpdate(req.params.id, postObj, {new: true}).exec((err, posts) =>{
        if(err) {
            res.status(400).send("An error has occurred")
        }
        else{
            res.status(200).json(posts)
        }
    })
})

app.delete('/posts/:id',(req, res) => { 
    console.log("Getting posts")
    Post.findByIdAndDelete(req.params.id).exec((err, post) =>{
        if(err) {
            res.status(400).send("An error has occurred")
        }
        else{
            res.status(200).json(post)
        }
    })
})

