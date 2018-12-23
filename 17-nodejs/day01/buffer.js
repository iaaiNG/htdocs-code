let buffer = Buffer.from(['1','2','3','4'])

console.log(buffer)

for (let v of buffer.entries()){
    console.log(v)
}