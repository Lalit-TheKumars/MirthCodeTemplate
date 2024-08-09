//Creating hl7_to_FHIR "telecom" transformation
var telecomArray = [];
var telecomCount = msg['PID']['PID.13']['PID.13.1'].length();
logger.info("contact count"+ telecomCount)
for (i=0; i<telecomCount; i++){
    var contactPoint = {};
    contactPoint.system = "phone";
    contactPoint.use = "home";
    contactPoint.value = msg['PID']['PID.13'][i]['PID.13.1'].toString();
    contactPoint.rank = "1";

	telecomArray.push(contactPoint);
	logger.info("contact object data"+ JSON.stringify(telecomArray));
}