//Creating HL7 _to_FHIR "maritalStatus" transformation
var maritalStatusObject = {};
    maritalStatusCoding = [];
    maritalStatusObject.coding = maritalStatusCoding;
    maritalStatusObject.text = msg['PID']['PID.16']['PID.16.2'].toString();
    var MSCoding = {};
        MSCoding.system = "http://hl7.org/fhir/ValueSet/marital-status";
        MSCoding.code = msg['PID']['PID.16']['PID.16.1'].toString();
        
    maritalStatusCoding.push(MSCoding);
