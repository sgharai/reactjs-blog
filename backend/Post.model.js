const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = mongoose.model('Post', Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    author: String,
    content: String,
    displayImageLink: String
}))