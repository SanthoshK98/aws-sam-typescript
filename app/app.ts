import express from 'express'
import serverless from 'serverless-http'
import { routes } from './routes'
const app = express()
app.use(routes)


app.listen(5000,()=>{
    console.log(`Listening on PORT 5000`)
})


export const handler = serverless(app)
