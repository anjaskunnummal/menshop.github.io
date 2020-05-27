function start(){
    confirm("Are You Sure?");

}
//popup sign up page
function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("btn2").style.display="block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
//side navigation for about
  function openside() {
    document.getElementById("myside").style.width = "100%";
  }
  
  function closeside() {
    document.getElementById("myside").style.width = "0%";
  }
  
  function checkPassword(form) { 
    pass1 = form.pass1.value; 
    pass2 = form.pass2.value; 
           
  if (pass1!= pass2) { 
        alert ("\nPassword did not match: Please try again...") 
        return false; 
    }  
    else{ 
        alert("Welcome to @Menshop") 
        return true; 
    } 
}