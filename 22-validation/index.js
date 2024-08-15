function valid(){
    if(document.login.UserName.value==""){
        alert('enter your username');
        document.login.UserName.focus();
        return false;
    }

    if(document.login.email.value==""){
        alert('enter your Email Address');
        document.login.email.focus();
        return false;
    }

    var em=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!em.test(document.login.email.value))
        {
             alert('Please enter your email *')
             document.login.email.focus();
             return false;
        }


    if(document.login.Password.value==""){
        alert('enter your password');
        document.login.Password.focus();
        return false;
    }


    // var log="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
    // if(!log.test(document.login.Password.value))
    //     {
    //          alert('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters ')
    //          document.login.Password.focus();
    //          return false;
    //     }
}