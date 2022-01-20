function validateInput(){
  var emailValid=document.getElementById('typeEmail').value;
  var passwordValid=document.getElementById('typePassword').value;

  console.log(passwordValid);
//    if(email== ""){
//      alert("Section cannot be left blank");
//      return false;
//    }
//    elseif(password.length<8){
//       alert("Password should be 8 character");
//       return false;
//    }
//    else{
//      return true;
//    }
// };

  if(emailValid == ""){
    alert("Section cannot be left blank");
  }else {
    alert("Enter Password")
  }
  if(passwordValid == "" || passwordValid.length < 8){
    alert("Minimum length of password should be 8 characters");
  }
  else{
    return true;
  }
}
