//Creating HL7 _to_FHIR "gender" transformation
var gender = msg['PID']['PID.8']['PID.8.1'].toString();
if(gender == "Male"){
	gender = "male"
}else if(gender == "Female"){
	gender = "female";
}else{
     gender = 'other'
}