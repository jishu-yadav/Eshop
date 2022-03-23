// import express from 'express'
const express = require('express')
// import dotenv from 'dotenv'
// import colors from 'colors'
// import connectDB from './config/db.js'

const products = require('./data/products')

// dotenv.config()
// connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(5000, console.log('Server is running on port 5000'))

// const PORT = process.env.PORT || 5000

// app.listen(
//   PORT,
//   console.log(
//     `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold.underline
//   )
// )
