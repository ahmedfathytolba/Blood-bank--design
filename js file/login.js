let national = document.getElementById('national');
let password = document.getElementById('password');
let loginbtn = document.getElementById('loginbtn');

loginbtn.onclick = function login(){
    if(national.value==12345 && password.value ==12345){
        
    location.href='home.html';
    
    }else{

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! try again'
        })  
}
}
