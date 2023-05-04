import express from 'express'

const app = express()

const map = new Map();

let count = 0

app.get('/',(req, res)=>{

    if (count >= 10) return res.end('Finished')

    for (let i = count * 1_000_000 ; i < (count + 1) * 1_000_000 ; i++) {
        map.set(i, i)
    }
    ++count

    console.log("Save garbage data");
    console.dir(process.memoryUsage())
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

    return res.end('Working');
})

app.listen(3002,()=>{
    console.log('memory leak server loaded')
})
