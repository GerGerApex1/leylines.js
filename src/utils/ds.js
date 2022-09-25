import nodeCrypto from 'crypto'
function randomString(e) {
    const s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const res = []
    for (let i = 0; i < e; ++i) {
        res.push(s[Math.floor(Math.random() * s.length)])
    }
    return res.join("")
}
function ds(salt) {
    const time = Math.floor(Date.now() / 1000)
    const random = randomString(6)

    const crpto = nodeCrypto.createHash('md5').update(`salt=${salt}&t=${time}&r=${random}`).digest('hex')
    console.timeEnd("e")
    return `${time},${random},${crpto}`
}
export default ds