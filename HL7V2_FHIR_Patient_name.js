//Creating HL7 _to_FHIR "patientName" transformation
var humanNameArray = [];
var humanNameObjectCount = msg['PID']['PID.5'].length();
logger.info("Patient name count is :" + humanNameObjectCount);

for (i = 0; i < humanNameObjectCount; i++) {
	var humanNameObject = {};
	humanNameObject.use = msg['PID']['PID.5'][i]['PID.5.7'].toString();
	humanNameObject.family = msg['PID']['PID.5'][i]['PID.5.1'].toString();
	humanNameObject.given = [msg['PID']['PID.5'][i]['PID.5.2'].toString(), msg['PID']['PID.5'][i]['PID.5.3'].toString()];
	humanNameObject.prefix = msg['PID']['PID.5'][i]['PID.5.4'].toString();
	humanNameObject.suffix = msg['PID']['PID.5'][i]['PID.5.5'].toString();

	humanNameArray.push(humanNameObject);
}