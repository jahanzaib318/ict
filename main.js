
function showWelcome() {

    alert("Welcome to KIET University!");

}


// Admission Form

document.getElementById("admissionForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let program = document.getElementById("program").value;

    alert("Thank you " + name + "! Your admission inquiry for " + program + " has been submitted.");

    document.getElementById("admissionForm").reset();

});
