//Creating HL7 _to_FHIR "active" transformation
var patientActive = msg['PID']['PID.30']['PID.30.1'].toString();
if(patientActive == 1){
	patientActive = true;
}else{
	patientActive = false;
}