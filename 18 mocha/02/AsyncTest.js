const fs = require('fs');

describe('File',()=>{
    describe('#readFile()',()=>{
        it('should read test.ls without error',(done)=>{
            fs.readFile('test.ls',(err)=>{
                if(err) throw err;
                done();
            })
        })
    })
})