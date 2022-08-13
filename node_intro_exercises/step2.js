const fs = require('fs');
const axios = require('axios');

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

async function webCat(url) {
    try {
        let response = await axios.get(url);
        console.log(response);
    }
    
    catch(err) {
        console.error(`There was an issue fetching the ${url}: ${err}`)
    }

}


let path = process.argv[2];

//handle if path is a URL path or a file
if (path.slice(0,4) ==='http') {
    webCat(path);
}
else {
    cat(path);
}