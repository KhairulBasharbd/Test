
const fs = require('fs');

fs.readFile('./input1.txt','utf8',(err,data)=>{
    
    fs.readFile(`./${data}.txt`,'utf8',(err,data)=>{
        console.log(data);

        fs.writeFile('./output1.txt',data,(err)=>{
            console.log('File is written1');
        } );

    });

    
});
// fs.writeFileSync('./output.txt',textOut);

console.log('File is written');

