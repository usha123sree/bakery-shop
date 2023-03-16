function myfunction 
{
    var Fullname=document.getElementById('fname').Value;
    var email=document.getElementById('email').Value;
  
    localStorage.setItem('fullname',fname);
    localStorage.setItem('email',email);
}