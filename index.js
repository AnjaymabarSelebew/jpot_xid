const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('05Ds5RX1Mg', uuidlib.v4());
	}

module.exports = generateId
