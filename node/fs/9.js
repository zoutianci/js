const fs = require('fs');

const path = require('path');
// console.log(path.resolve('./txt'))
const getFilesInDir = function(dir) {
    // console.log(path.resolve(dir))
    var results = [path.resolve(dir)];
    const files = fs.readdirSync(dir, 'utf8');
    // console.log(files);
    files.forEach(file => {
        // console.log(file)
        
        file = path.resolve(dir, file);
        const stats = fs.statSync(file);
        // console.log(stats)
        if(stats.isFile()==true){
            results.push(file);
        }else if (stats.isDirectory()){
            results = results.concat(getFilesInDir(file))
            // return file.forEach();
        }
    })
    return results;
};
const files = getFilesInDir('./txt');
console.log(files);