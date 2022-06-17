function validate(){
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if(username=="aman" && password=="user")
    {
        alert("login successfully");
        return false;
    }
    else{
        alert("login failed");
    }
}