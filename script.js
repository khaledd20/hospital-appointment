var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["contactInfo"] = document.getElementById("contactInfo").value;
    formData["schedule"] = document.getElementById("schedule").value;
    formData["appointment"] = document.getElementById("appointment").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("patientList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.contactInfo;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.schedule;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.appointment;
    }




//Reset the data
function resetForm() {
    document.getElementById("fullName").value = '';
    document.getElementById("contactInfo").value = '';
    document.getElementById("schedule").value = '';
    document.getElementById("appointment").value = '';
    selectedRow = null;
}