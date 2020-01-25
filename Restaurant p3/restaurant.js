function validateItems() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;

if (name == "") {
    alert("Please provide a name.");
    document.getElementById(name).focus();
    return false;
    }
if (email == "") {
    alert("Please provide an email.");
    document.getElementById(email).focus();
    return false;
    }
if (phone == "") {
    alert("Please provide a phone number.");
    document.getElementById(phone).focus();
    return false;
    }
else {
    alert("Your request has been received. Thank you.")
}
}