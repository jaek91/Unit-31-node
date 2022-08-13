const fs = require('fs');
const axios = require('axios');

function handleData(content, output_file) {
    if (output_file) {
        fs.writeFile(output_file, content, 'utf-8', function(err){
            if (err) {
                console.error(`Couldn't write ${output_file}: ${err}`)
                process.exit(1);
            }
        })
    }
    else {
        console.log(content)
    }
}

function cat(path, output_file) {
    
    fs.readFile(path,'utf8', function(err, data){
        if (err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        }
        
        else {
           handleData(data, output_file);
        }
    })

}

async function webCat(url, output_file) {
    try {
        let response = await axios.get(url);
        handleData(response.data, output_file)
    }
    
    catch(err) {
        console.error(`There was an issue fetching the ${url}: ${err}`)
    }

}


let path;
let output;

//handle if path is a URL path or a file path
if (process.argv[2] === '--out') {
    output = process.argv[3];
    path = process.argv[4]; 
}
else {
    path = process.argv[2];
}

//handle URL paths
if (path.slice(0,4) ==='http') {
    webCat(path, output);
}
//then this is a file path
else {
    cat(path, output);
}

