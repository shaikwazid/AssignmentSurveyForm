document.getElementById("survey-form").addEventListener("submit",function(event){
    event.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("state").value;
    const gender =  Array.from(document.querySelectorAll("input[name='gender']:checked")).map(checkbox => checkbox.value);
    const profession = document.getElementById("profession").value;
    const gmail = document.getElementById("mail").value;
    const mobile = document.getElementById("mobile").value;


    document.getElementById("popup-firstname").textContent = firstname;
    document.getElementById("popup-lastname").textContent = lastname;
    document.getElementById("popup-dob").textContent = dob;
    document.getElementById("popup-state").textContent = country;
    document.getElementById("popup-gender").textContent = gender.join(", ");
    document.getElementById("popup-profession").textContent = profession;
    document.getElementById("popup-gmail").textContent = gmail;
    document.getElementById("popup-mobile").textContent = mobile;

    document.getElementById("popup").style.display = "block";

});

document.getElementById("close-popup").addEventListener('click',function(){
    document.getElementById("popup").style.display = "none";
})
