import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { connect } from 'mongoose'
import morgan from 'morgan'

import routes from './routes'

const app = express()
app.use(bodyParser())
app.use(cors())
app.use(morgan('dev'))
app.use('/agents', routes.agents)
app.use('/properties', routes.properties)
app.use('/assignments', routes.assignments)
app.use('/health', routes.health)

app.listen(process.env.PORT, () => {
    if (process.env.ENVIRONMENT !== 'test') {
        connect(
            process.env.DB_HOST,
            { useNewUrlParser: true }
        )
    }
    console.log(`app is listening on port ${process.env.PORT}`)
})

export default app
