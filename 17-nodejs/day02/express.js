const express = require('express');
let app = express();
app.listen(3000);
app.get('/hello', (req,res)=>{
    res.end('Hello.Express!')
})