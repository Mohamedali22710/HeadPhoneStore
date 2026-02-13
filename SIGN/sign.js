// event default 

var Name=document.getElementById("name");
var email=document.getElementById("email");
var pass1=document.getElementById("pass1");
var pass2=document.getElementById("pass2");
var isvalid=true;

function send(e){
    e.preventDefault();

 var chec=   Valid();

 //after 2000
 setTimeout(function(){
   if(chec){

        // SAVE VALUE AFTER ALL IS VALID IN LOCAL STROAGE
        localStorage.setItem("eml",email.value);
        localStorage.setItem("pass",pass1.value);
        location.assign("./LOGIN.HTML");
    }  
 },2000);

    
}
function sign(e){
    e.preventDefault();

 var chec=   Valid2();
var get=getvalue();
 //after 2000
 setTimeout(function(){
   if(chec){

       if(get){
        location.assign("../index.html");
       }
      
        
    }  
 },2000);

    
}


function getvalue(){

     //*  get value from local to check it match with new value or no 
     var eml =  localStorage.getItem("eml");
      var pass=  localStorage.getItem("pass");
      if(eml==email.value){
        success(email);
      }else{
          seter(email,"invalid email");
          isvalid=false;
      }
      
      
      if(pass1.value==pass){
        success(pass1);
      }else{
      
        seter(pass1,"pass invalid");
        isvalid=false;
      }

      return isvalid;

}

function seter(ele,msg){
    var input=ele.parentElement;
    var errMsg=input.querySelector(".err");
    errMsg.innerText=msg;
    input.classList.add("err");
    input.classList.remove("succ");

}
function success(ele){
    var input=ele.parentElement;
    var errMsg=input.querySelector(".err");
    errMsg.innerText="";
    input.classList.add("succ");
    input.classList.remove("err");

}

function Valid(){

    //user name
    if(Name.value===""){
        seter(Name,"name is required");
        isvalid=false;
    }else{
        success(Name);
    }

    // email
    if(email.value.indexOf("@")==-1){
        seter(email,"email @ is required");
        isvalid=false;
    }else if(email.value===""){
        seter(email,"email is required");
        isvalid=false;
    }else{
        success(Name);
      
    }

if(pass1.value===""){
    seter(pass1,"passWord ia required");
}else if(pass1.value.length<8){
    seter(pass1,"passWord must large than 8 char");
    isvalid=false;
}else{
    success(pass1);
    
}

if(pass2.value===""){
    seter(pass2,"passWord ia required");
}else if(pass2.value!==pass1.value){
    seter(pass2,"passWord not match ");
    isvalid=false;
}else{
    success(pass2);
    
}

    return isvalid;

}
function Valid2(){
       // email
    if(email.value.indexOf("@")==-1){
        seter(email,"email @ is required");
        isvalid=false;
    }else if(email.value===""){
        seter(email,"email is required");
        isvalid=false;
    }else{
        success(email);
      
    }

if(pass1.value===""){
    seter(pass1,"passWord ia required");
}else if(pass1.value.length<8){
    seter(pass1,"passWord must large than 8 char");
    isvalid=false;
}else{
    success(pass1);
    

}
return isvalid;
}


const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');


if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}


if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}