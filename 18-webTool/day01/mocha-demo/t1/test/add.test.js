function add(x,y){
    return x+y;
};
const expect = require('chai').expect;
describe('a add() function test',()=>{  // describe 描述 测试套件：test suite
    it('1+1=2',()=>{  // it 测试用例：test case
        expect(add(1,1)).to.be.equal(2)
    })
    it('-1+1=0',()=>{  // it 测试用例：test case
        expect(add(-1,1)).to.be.equal(0)
    })
})