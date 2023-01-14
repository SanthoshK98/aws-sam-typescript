import express from 'express'
import serverless from 'serverless-http'
const app = express()



app.listen(5000,()=>{
    console.log(`Listening on PORT 5000`)
})

app.get('/getdata',(req: any,res: any)=>{
    res.status(200).send('Hello Typescript')
})

app.post('/senddata',(req: any,res: any)=>{
    const response = {
        status: true,
        error: false,
        message: "Send Data"
    }
    res.send(response)
})
export const handler = serverless(app)
