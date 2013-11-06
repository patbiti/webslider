var fs = require('fs');

var readConfig = function(filePath){
	var jsonConfig = {};
	if(fs.existsSync(filePath)){
		jsonConfig = eval('(' + fs.readFileSync(filePath, 'utf-8') + ')') ;
	}
	return jsonConfig; 
}
module.exports = readConfig;