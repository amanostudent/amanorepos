const firstname =document.getElementById('Firstname');
const lastname =document.getElementById('Lastname');
const message =document.getElementById('Message');
const email =document.getElementById('Email');
const phone =document.getElementById('telephone');
const form =document.getElementById('form1');
const errorr=document.getElementById('error');
var numbers = /^[0-9]+$/;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
form.addEventListener('submit',(e) => 
{
    
    let errors=[]
    if(firstname.value===''|| firstname.value==null)
    {
        errors.push('first name')
    }
    if(lastname.value===''|| lastname.value==null)
    {
        errors.push('last name')
    }
    if(message.value===''|| message.value==null)
    {
        errors.push('message')
    }
    if(phone.value.match(numbers=false))
    {
    alert('Please input numeric characters only');
    document.getElementById('telephone').focus();
    }
    if(inputText.value.match(mailformat)=false)
    {
        alert("You have entered an invalid email address!");
        document.getElementById('Email').focus();
    }
    if(errors.length>0)
    {
        e.preventDefault()
        errorr.innerText=errors.join(' ')
    }

})