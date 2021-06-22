let select = document.getElementById('select');
let form = document.getElementById('form');
let phoneForm = document.getElementById('phoneForm');
let reply = document.getElementById('reply');
selectedForm = "";
selectedPhone = "";

select.innerHTML=`
<select name="formSelect" id="formSelect">
    <option value="">--select--</option>
    <option value="customer">Customer</option>
    <option value="computer">Computer</option>
    <option value="phone">Phone</option>
</select>
`
select.addEventListener("change", (e) =>{
    selectedForm = e.target.value;
    clearReply();
    writeSelectedForm(selectedForm);
}
)

function selectPhone(phone){
    selectedPhone = phone;
    writePhoneForm(selectedPhone);
}

function clearPhoneForm(){
    phoneForm.innerHTML="";
}

function clearReply(){
    reply.innerHTML="";
}

function writePhoneForm(selectedPhone){
    clearPhoneForm();
    if(selectedPhone=="home"){
     phoneForm.innerHTML = `
     <br>
     <form>
         <label for="homeNumber">Number:</label><br>
         <input type="text" name="homeNumber"><br>
         <button type="button" onclick="submitCellPhone()">Submit</button>    
     </form>  
     `
    }
    else if(selectedPhone=="cell"){
     phoneForm.innerHTML = `
     <br>
     <form>
         <label for="cellNumber">Number:</label><br>
         <input type="text" name="cellNumber"><br>
         <label for="macaddress">Mac Address:</label><br>
         <input type="text" name="macaddress" size="12"><br>
         <button type="button" onclick="submitCellPhone()">Submit</button>    
     </form>  
     `
    }
    form.append(phoneForm);
}

function writeSelectedForm(selectedForm){
    clearPhoneForm();
    if(selectedForm==="customer"){
        /*form.innerHTML = `
        <form>
            <label for="fname">First name:</label><br>
            <input type="text" name="fname" required><br>
            <label for="lname">Last name:</label><br>
            <input type="text" name="lname" required><br>
            <button type = "button" onclick="submitCustomer()">Submit</button>
        </form>
        `*/
        form.innerHTML = `
        <p>Please enter an id or email.</p>
        <form>
            <label for="customerId">Id:</label><br>
            <input type="text" name="customerId" id ="customerId" required>
            <button type = "button" onclick="submitCustomerId()">Submit</button><br>
            <label for="customerEmail">Email:</label><br>
            <input type="text" name="customerEmail" id ="customerEmail" required>
            <button type = "button" onclick="submitCustomerEmail()">Submit</button>
        </form>
        `
    }
    else if(selectedForm==="computer"){
        form.innerHTML = `
        <form>
            <label for="macaddress">Mac Address:</label><br>
            <input type="text" name="macaddress" size="12"><br>
            <button type = "button" onclick="submitComputer()">Submit</button>
        </form>
        `
    }
    else if(selectedForm==="phone"){
       let selectStatement = document.createElement('p');
       form.innerHTML = "";
       selectStatement.innerHTML = "Select Phone Type:";
       form.append(selectStatement);
       form.innerHTML += `
       <button id="homebtn" onclick="selectPhone('home')">Home</button>
       <button id="cellbtn" onclick="selectPhone('cell')">Cell</button>
       `;
       form.innerHTML += "</br>";
    }
    else{
    form.innerHTML="";
    }
}