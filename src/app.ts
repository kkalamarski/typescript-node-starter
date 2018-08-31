import express, { Express } from 'express'
import routes from './routes'

const app: Express = express()

app.set('view engine', 'pug')
app.set('views', './views')
app.set('port', process.env.PORT || 3000)
app.use(express.static('public'))

app.use('/', routes)

export default app
