const mysql = require('mysql');
const expect = require('chai').expect;

pool= mysql.createPool({ user:'root' })

describe('connect mysql', () => {  
    it('make sure connect success', (done) => {  
        pool.getConnection((err, connection) => {
            let threadId = connection.threadId
            expect(threadId).to.be.match(/\d+/)
            done()  // 异步执行结束
        })
    })
})