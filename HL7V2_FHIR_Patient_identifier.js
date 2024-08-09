//Creating HL7 _to_FHIR "identifier" transformation
var identifierArray = [];
var patIdCount = msg['PID']['PID.3'].length();
logger.info("Patient id count in hl7 message:"+ patIdCount);

for(i=0;i<patIdCount;i++){
	var identifierObject = {};
		identifierObject.use = "official";
		identifierObject.system = "https://testhospital.com";
		identifierObject.value = msg['PID']['PID.3'][i]['PID.3.1'].toString();
	
	identifierArray.push(identifierObject);
	logger.info("create of patient Array:"+ JSON.stringify(identifierArray));
	
}