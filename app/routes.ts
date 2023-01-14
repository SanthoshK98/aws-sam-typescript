import express from 'express'
const routes = express.Router()

routes.get('/getdata',(req: any, res: any)=>{
    res.status(200).send('Hello Typescript')
})

routes.get('/getstatus',(req: any, res: any)=>{
    res.send('Hello World Typescript')
})

routes.post('/senddata',(req: any,res: any)=>{
    const response = {
        status: true,
        error: false,
        message: "Send Data"
    }
    res.send(response)
})

export {routes}