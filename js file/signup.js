let userinp = document.getElementById('userinp');
let phoneinp = document.getElementById('phoneinp');
let national = document.getElementById('national');
let password = document.getElementById('password');
let newpassword = document.getElementById('newpassword');
let register = document.getElementById('register');

register.onclick = function click(){

    if(userinp.value !=="" && phoneinp.value !=="" && national.value !=="" && password.value !== "" && newpassword.value !==""){
        swal.fire({
            icon:"success",
            title:"welcom",
            timer:1500

        })   
        location.href='home.html';
    }else{
        swal.fire({
            icon:"error",
            title:"oops..",
            text:"please full in all filed",
            timer:1500

        })      
    }

}
