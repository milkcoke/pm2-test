import express from 'express'

const app = express()

const map = new Map();
app.get('/',(req, res)=>{
    for (let i = 0; i < 100_000; i++) {
        map.set(i, i)
    }
    return res.end('hi');
})

app.listen(3002,()=>{
    console.log('memory leak server loaded')
})
