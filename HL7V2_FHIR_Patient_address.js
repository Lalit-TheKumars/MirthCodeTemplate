//Creating HL7 _to_FHIR "patientAddress" transformation
var patientAddressArray = [];
var patientAddressCount = msg['PID']['PID.11'].length();

for (i=0; i<patientAddressCount; i++){
	var patientAddressObject = {};
	patientAddressObject.use = msg['PID']['PID.11'][i]['PID.11.7'].toString();
	patientAddressObject.type = msg['PID']['PID.11'][i]['PID.11.7'].toString();
	patientAddressObject.line = [msg['PID']['PID.11'][i]['PID.11.1'].toString(),msg['PID']['PID.11'][i]['PID.11.2'].toString()];
	patientAddressObject.city = msg['PID']['PID.11'][i]['PID.11.3'].toString();
	patientAddressObject.state = msg['PID']['PID.11'][i]['PID.11.4'].toString();
	patientAddressObject.postalCode = msg['PID']['PID.11'][i]['PID.11.5'].toString();
	patientAddressObject.country = msg['PID']['PID.11'][i]['PID.11.6'].toString();

	patientAddressArray.push(patientAddressObject);
}