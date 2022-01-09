let signInForm = document.getElementsById("signInForm")

signInForm.onsubmit = ()=>{
    e.prevenDefault()

    setTextErr("#emailErr", "")
    setTextErr("#passwordErr", "")
    setTextErr("#confirmPasswordErr", "")

    let email = signInForm.email.value
    let password = signInForm.password.value
    let confirmPassword = signInForm.confirmPassword.value

    let validate = true

    if(!email){
        setTextErr("#emailErr", "Email is required")
        validate = false
    }
    if(!password){
        setTextErr("#passwordErr", "Password is required")
        validate = false
    }
    if(!confirmpassword){
        setTextErr("#confirmPasswordErr", "Confirm password is required")
        validate = false
    }

    if(password.length <8){
        setTextErr("#passwordErr", "Password must be at least 8 characters")
        validate = false
    }else{
        if(confirmPassword == password){
            setTextErr("#confirmPasswordErr", "Password is not match")
            validate = false
        }
    }

    
}


let setTextErr = (query, content) =>{
    document.querySelector(query).innerHTML = content
}

setTextErr("#emailErr", "Bận cần nhập email")
setTextErr("#passwordErr", "Bận cần nhập email")