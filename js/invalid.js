var errorCount = 0;
var firstName = document.forms['Form']['fs'].value;
var lastName = document.forms['Form']['ls'].value;
var company = document.forms['Form']['com'].value;
var email = document.forms['Form']['email'].value;
var code = document.forms['Form']['code'].value;
var phone = document.forms['Form']['phone'].value;

function formChecked() {
    if (firstName == null) {
        errorCount++;
        document.getElementById("FirstName").className = "form-control is-invalid";
        document.getElementById("error1").innerHTML = '<div class="alert alert-danger mt-3" role="alert">Cần nhập vùng này!</div>';
    }
    if (lastName == null) {
        errorCount++;
        document.getElementById("LastName").className = "form-control is-invalid";
        document.getElementById("error2").innerHTML = '<div class="alert alert-danger mt-3" role="alert">Cần nhập vùng này!</div>';
    }
    if (company == null) {
        errorCount++;
        document.getElementById("Company").className = "form-control is-invalid";
        document.getElementById("error3").innerHTML = '<div class="alert alert-danger mt-3" role="alert">Cần nhập vùng này!</div>';
    }
    if (email == null) {
        errorCount++;
        document.getElementById("Email").className = "form-control is-invalid";
        document.getElementById("error4").innerHTML = '<div class="alert alert-danger mt-3" role="alert">Cần nhập vùng này!</div>';
    }
    if (code == null || isNaN(code)) {
        errorCount++;
        document.getElementById("AreaCode").className = "form-control is-invalid";
        document.getElementById("error5").innerHTML = '<div class="alert alert-danger mt-3" role="alert">Cần nhập vùng này và phải là số!</div>';
    }
    if (phone == null || isNaN(phone)) {
        errorCount++;
        document.getElementById("PhoneNumber").className = "form-control is-invalid";
        document.getElementById("error6").innerHTML = '<div class="alert alert-danger mt-3" role="alert">Cần nhập vùng này và phải là số!</div>';
    }
    if (errorCount > 0) {
        Swal.fire({
            icon: 'error',
            title: 'Gòi xong',
            text: 'Bạn chưa nhập đủ thông tin',
        })
    }
}