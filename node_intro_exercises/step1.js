const fs = require('fs');

function cat(path) {
    
    fs.readFile(path,'utf8', function(err, data){
        if (err) {
            console.error(err);
            process.exit(1);
        }
        
        else {
            console.log(`file contents: ${data}`);
        }
    })

}

//This should run fine because process.argv[2] = one.txt
cat(process.argv[2]);

