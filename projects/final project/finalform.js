document.getElementById('myForm').addEventListener("submit",function(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstNameInput").value;
    const lastName = document.getElementById("lastNameInput").value;
    const age = document.getElementById("age").value;
    if (!firstName || !lastName){
        alert("First name and last name are required!");
        return;}

    if(!age || age < 18){
        alert("You must be at least 18 years old to sign-up!");
        return;
    }
    const formData = {
       firstNameInput: firstName,
       lastNameInput: lastName,
       age: age,
       password: document.getElementById('password').value,
       state: document.getElementById('state').value
    }
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "submit.json" , true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
       if(xhr.readyState === 4 && xhr.status ===200) {
         const response = JSON.parse(xhr.responseText);
         document.getElementById("message").innerHTML = response.message;
         document.getElementById("myForm").innerHTML = "";
       } else if(xhr.readyState === 4) {
           alert('Error submitting form.');
       }
    };

       xhr.send(JSON.stringify(formData));
      console.log(formData);
});
