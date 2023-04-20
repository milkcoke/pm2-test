
import express from 'express'


const app = express()
app.listen(3000,async ()=>{
   await test()
});


async function isOdd(num: number) {
    if (num < 0) throw 'error'
    if (num % 2 === 0) return false
    return true
}

function testThrow(num: number): Promise<boolean> {
    return new Promise((rev, rej)=>{
        isOdd(num)
            .then(res=>rev(res))
            .catch(err=>rej(err))
    })
}

async function test() {
    const promises = []
    promises.push(testThrow(-1)) // Throw
    promises.push(testThrow(1)) // true
    promises.push(testThrow(2)) // false

    // not catch anything
    await Promise.all(promises).catch(console.error)
}
