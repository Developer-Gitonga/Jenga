 function validateInput(){
 var emailValid=document.getElementById('typeEmail').value;
  var passwordValid=document.getElementById('typePassword').value;

  console.log(passwordValid);
  
  //if(emailValid == null || emailValid== ""){
   // alert("Section cannot be left blank");
  //}else {
   // return false;
  //}
  //if(passwordValid == "" || passwordValid.length < 8){
   // alert("Minimum length of password should be 8 characters");
 // }
 // else{
  //  return false;
 // }
//}

if(emailValid == null || emailValid ==""){
alert("Section cannot be left empty");
return false;
};
if(passwordValid.length <8);
alert("password should be 8 characaters")
return false;
 };