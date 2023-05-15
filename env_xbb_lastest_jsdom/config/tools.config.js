var  fs=require("fs");
var  path = require("path");


function getFile(name) {
    let tools_path = path.resolve(__dirname, '../tools/');
    try {
        return fs.readFileSync(`${tools_path}/${name}.js`) + "\r\n";

    } catch (e) {
        console.log(`${tools_path}/${name}.js不存在`)
        return "";
    }
}

function getCode(){

    let code=""
    code+=getFile("toolsFunc")
    // code+=getFile("toolsJsSoup")
    // code+=getFile("toolsParseHtml")
    code+=getFile("envFunc")
    code+=getFile("toolsPlugin")
    code+=getFile("toolsStyle")
    return code
}
module.exports={
    getCode,getFile
}