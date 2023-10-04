// Get the modal
var modal = document.getElementById("myModal");
                            
// Gets the image and insert it inside the modal
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
                        
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
                            
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}


function registration()
{

    var name= document.getElementById("t1").value;
    var email= document.getElementById("t2").value;
    var uname= document.getElementById("t3").value;
    var pwd= document.getElementById("t4").value;           
    var cpwd= document.getElementById("t5").value;
    
    //email id expression code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(name=='')
    {
        alert('Please enter your name');
    }
    else if(!letters.test(name))
    {
        alert('Name field required only alphabet characters');
    }
    else if(email=='')
    {
        alert('Please enter your user email address');
    }
    else if (!filter.test(email))
    {
        alert('Invalid email');
    }
    else if(uname=='')
    {
        alert('Please enter the user name.');
    }
    else if(!letters.test(uname))
    {
        alert('User name field required only alphabet characters');
    }
    else if(pwd=='')
    {
        alert('Please enter Password');
    }
    else if(cpwd=='')
    {
        alert('Enter Confirm Password');
    }
    else if(!pwd_expression.test(pwd))
    {
        alert ('Passwords must have at least 8 characters and contain at least two of the following: uppercase letters, lowercase letters, numbers, and symbols.');
    }
    else if(pwd != cpwd)
    {
        alert ('Password not Matched');
    }
    else if(document.getElementById("t5").value.length < 8)
    {
        alert ('Minimum password length is 8');
    }
    else if(document.getElementById("t5").value.length > 15)
    {
        alert ('Maximum password length is 15');
    }
    else
    {                                           
        alert('Thank You for Registration');
        // redirecting to other page or webste code. 
        window.location = "index.html"; 
    }
}

//allow user to change the font of selected text for homepage
function changeFontSize(type){
            
    let ids = ["#h1","#h2","#h3","#h4","#h5","#h6","#p1","#p2","#p3","#p4","#p5","#p6","#p7","#p8","#p9","#p10","#p11","#p12"];

    ids.forEach(id => {
        //get the element   
        let el = document.querySelector(id);
        //get the font sizeS
        let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size")
        //convert element to float
        fontSize = parseFloat(fontSize);
        //increase/decrease
        if(type == "increase"){
            el.style.fontSize = (fontSize + 1) + "px";
        }else{
            el.style.fontSize = (fontSize - 1) + "px";
        }
    });
}
//allow user to change the font of selected text for hypertrax
function changeFontSize1(type){
            
    let ids = ["#h1","#h2","#h3","#p1","#p2","#p3","#p4","#p5","#p6"];

    ids.forEach(id => {
        //get the element   
        let el = document.querySelector(id);
        //get the font sizeS
        let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size")
        //convert element to float
        fontSize = parseFloat(fontSize);
        //increase/decrease
        if(type == "increase"){
            el.style.fontSize = (fontSize + 1) + "px";
        }else{
            el.style.fontSize = (fontSize - 1) + "px";
        }
    });
}
//allow user to change the font of selected text for cervitrac
function changeFontSize2(type){
            
    let ids = ["#h1","#h2","#h3","#p1","#p2","#p3","#p4","#p5","#p6"];

    ids.forEach(id => {

        let el = document.querySelector(id);

        let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size")

        fontSize = parseFloat(fontSize);

        if(type == "increase"){
            el.style.fontSize = (fontSize + 1) + "px";
        }else{
            el.style.fontSize = (fontSize - 1) + "px";
        }
    });
}
//allow user to change the font of selected text for knee-pro
function changeFontSize3(type){
            
    let ids = ["#h1","#h2","#h3","#p1","#p2","#p3","#p4","#p5","#p6"];

    ids.forEach(id => {

        let el = document.querySelector(id);

        let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size")

        fontSize = parseFloat(fontSize);

        if(type == "increase"){
            el.style.fontSize = (fontSize + 1) + "px";
        }else{
            el.style.fontSize = (fontSize - 1) + "px";
        }
    });
}
//allow user to change the font of selected text for lumbartrax
function changeFontSize4(type){
            
    let ids = ["#h1","#h2","#h3","#p1","#p2","#p3","#p4","#p5","#p6"];

    ids.forEach(id => {

        let el = document.querySelector(id);

        let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size")

        fontSize = parseFloat(fontSize);

        if(type == "increase"){
            el.style.fontSize = (fontSize + 1) + "px";
        }else{
            el.style.fontSize = (fontSize - 1) + "px";
        }
    });
}
//allow user to change the font of selected text for muscle gun
function changeFontSize5(type){
            
    let ids = ["#h1","#h2","#h3","#p1","#p2","#p3","#p4","#p5","#p6"];

    ids.forEach(id => {

        let el = document.querySelector(id);

        let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size")

        fontSize = parseFloat(fontSize);

        if(type == "increase"){
            el.style.fontSize = (fontSize + 1) + "px";
        }else{
            el.style.fontSize = (fontSize - 1) + "px";
        }
    });
}

//allows user to change background colour
function myFunction(x){    
    document.bgColor=x;

}

