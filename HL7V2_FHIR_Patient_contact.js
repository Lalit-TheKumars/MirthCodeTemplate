//Creating HL7 _to_FHIR "patientContact" transformation
var patientContactArray = [];
var patientContactCount = msg['PID']['PID.11'].length();

for (i=0; i<patientContactCount; i++){
	var patientContactObject = {};
			contactRelationshipArray = [];
			contactRelationshipObject = {};
				contactRelationshipCodingArray = [];
				contactRelationshipCodingObject = {};
					contactRelationshipCodingObject.system = 
					contactRelationshipCodingObject.version = 
					contactRelationshipCodingObject.code = 
					contactRelationshipCodingObject.display = 
					contactRelationshipCodingObject.userSelectd = 

					contactRelationshipCodingArray.push(contactRelationshipCodingObject);
				contactRelationshipObject.text = 

				contactRelationshipArray.push(contactRelationshipObject);
				
			patientContactObject.relationship = contactRelationshipObject;
			patientContactObject.name = 
			patientContactObject.telecom = 
			patientContactObject.address = 
			patientContactObject.gender = 
	
	patientContactArray.push(patientContactObject);
}