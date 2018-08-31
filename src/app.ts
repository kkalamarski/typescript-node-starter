import express, { Express } from 'express'
import * as HomeController from './controllers/home'

const app: Express = express()

app.set('view engine', 'pug')
app.set('views', './views')
app.set('port', process.env.PORT || 3000)

// Routes
app.get('/', HomeController.get)

export default app
