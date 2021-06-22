var xmlhttp;
function submitCustomerId(){
    var id = document.getElementById("customerId").value;
    if(id!=""){
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', 'http://localhost:8080/DBSearch1/customer/' + id, true);
        xmlhttp.onload = function(){
            //console.log(xmlhttp.status);
            if(xmlhttp.status==200){
                var data = JSON.parse(xmlhttp.responseText);
                reply.innerHTML = 
                "<p>Customer found!</p> <p>Name: " + data.firstName + " " + data.lastName 
                + "</p><p>Email: " + data.email + ".</p>";
            }
            else if(xmlhttp.status==400){
                reply.innerHTML = 
                "<p>Please enter a numeric value.</p>";
            }
            else if(xmlhttp.status==404||xmlhttp.status==500){
                reply.innerHTML = 
                "<p>No customer found with the given id.</p>";
            }
            else{
                reply.innerHTML="<p>Something went wrong.</p>";
            }
        }
        xmlhttp.send();
    }
    else{
        reply.innerHTML="<p>Please enter an id.</p>";
    }
}

function submitCustomerEmail(){
    var email = document.getElementById("customerEmail").value;
    if(email!=""){
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', 'http://localhost:8080/DBSearch1/customer/find/?email=' + email, false);
        xmlhttp.onload = function(){
            //console.log(xmlhttp.status);
            if(xmlhttp.status==200){
                var data = JSON.parse(xmlhttp.responseText);
                reply.innerHTML = 
                "<p>Customer found!</p> <p>Name: " + data.firstName + " " + data.lastName 
                + "</p><p>Email: " + data.email + ".</p>";
            }
            else if(xmlhttp.status==400){
                    
            }
            else if(xmlhttp.status==404||xmlhttp.status==500){
                reply.innerHTML =
                "<p>No customer found with the given email.</p>";
            }
            else{
                reply.innerHTML="<p>Something went wrong.</p>";
            }
        }
        xmlhttp.send();
    }
    else{
        reply.innerHTML="<p>Please enter an email.</p>";
    }
   /* xmlhttp.onreadystatechange = function(){
        console.log(xmlhttp.readyState);
        if(xmlhttp.readyState == 4){
            console.log("readState == 4");
            if(xmlhttp.status == 200){
                console.log(xmlhttp.responseText);
            }
            else{
                console.log(xmlhttp.status);
            }
        }
    }*/
}

function submitComputer(){
    console.log("computer submitted!");
}