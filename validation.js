function validate(){
    // if(document.myForm.fullname.value==""){
    //     document.getElementById("nameError").innerHTML = "Please enter your name";
    //     return false;
    // }

    // if(document.myForm.employeeID.value==""){
    //     document.getElementById("employeeIDError").innerHTML = "Please enter your Employee ID";
    //     return false;
    // }

    if(document.myForm.firstname.value==""){
        document.getElementById("firstnameError").innerHTML = "Please enter your first name";
        return false;
    }

    if(document.myForm.lastname.value==""){
        document.getElementById("lastnameError").innerHTML = "Please enter your last name";
        return false;
    }

    if(document.myForm.address.value==""){
        document.getElementById("addressError").innerHTML = "Please enter your address";
        return false;
    }

    if(document.myForm.department.value==""){
        document.getElementById("departmentError").innerHTML = "Please enter your department";
        return false;
    }

    if(document.myForm.position.value==""){
        document.getElementById("positionError").innerHTML = "Please enter your position";
        return false;
    }

    if(document.myForm.email.value==""){
        document.getElementById("emailError").innerHTML = "Please enter your email";
        return false;
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myForm.email.value)==false){
            alert("Please enter a valid email address");
            return false;
        }
    }

    if(document.myForm.contact.value==""){
        document.getElementById("contactError").innerHTML = "Please enter your contact";
        return false;
    }else{
        var cn = document.getElementById("contact").value;
        if(cn.length < 11 || cn.length > 11){
            alert("Please enter a valid Philippine contact number (11 digits only)");
            return false;
        }
    }

    if(document.myForm.salary.value==""){
        document.getElementById("salaryError").innerHTML = "Please enter your salary";
        return false;
    }else{
        var sr = document.getElementById("salary").value;
        if(sr < 0){
            alert("Please enter a valid salary (positive number only)");
            return false;
        }
    }

    if(document.myForm.username.value==""){
        document.getElementById("usernameError").innerHTML = "Please enter your username";
        return false;
    }else{
        var un = document.getElementById("username").value;
        if(un.length < 8){
            alert("Username must have atleast 8 characters");
            return false;
        }
    }
}