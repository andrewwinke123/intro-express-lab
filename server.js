// import modules

import express from 'express'
import { list } from './data/list-data.js'
// create Express app

const app = express()

// configure the app (app.set)

app.set('view engine', 'ejs')

// mount Middleware (app.use)



// mount routes


app.get('/', function(req, res) {
    res.send('<h1>hello, pizza</h1>')
  })

  app.get('/pizza', function(req, res) {
    res.render('pizza-page')
  })

  app.get('/list', function(req, res) {
    res.render('list/index', {
      list: list
    })
  })


// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})