
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
       tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-200px";
}
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");

function validateName(){
    var name = document.getElementById("uname").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('mail').value;


    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;
    if(left>0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(){
    if(!validateName() || !validateEmail() || !validateMessage()){
        submitError.innerHTML = 'Please fix error to submit';
        return false;
    }
    
}
$("#submit-form").submit((e)=>{
    e.preventDefault()
    const inputs = document.querySelectorAll("input")
    var flag=0;
    inputs.forEach((input)=>{
        if(input.value==""){
            flag=1;
        }
    })
    if(flag==0){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbyO1qaQnF1MkzAY_fPAfZDbjqs7S0C-JuWP5p_GcyZbyyvjWvreGD4vCDXWrMYFNjB3/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                swal({
                    title: "Success",
                    text: "Thank you for reaching out. I will promptly respond to your message. For more immediate communication, please connect with me on LinkedIn.",
                    icon: "success",
                    buttonsStyling: false,
                    customClass: {
                        confirmButton: "btn-custom",
                        content: "text-center" // Center the content
                    },
                    confirmButtonText: "OK",
                    confirmButtonColor: "#ff004f", // Set the color directly
                })
                .then((value) => {
                    window.location.reload();
                });
            },
            error:function (err){
                swal("Error", "Something went wrong", "error");
            }
        })
    }  
})


// This js file is for scrolling down to the specific section when clicking the navbar sections


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#skills"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#project"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});




// Preloader logic
(function(){
    var preloader = document.getElementById('preloader');
    var bar = document.getElementById('preloader-bar');
    var text = document.getElementById('preloader-text');
    if(!preloader || !bar || !text) return;

    var progress = 0;
    var tick = setInterval(function(){
        // accelerate slowly, cap at 95% until load
        var increment = Math.max(1, 5 - Math.floor(progress/25));
        progress = Math.min(progress + increment, 95);
        bar.style.width = progress + '%';
        text.textContent = progress + '%';
    }, 120);

    function finish(){
        clearInterval(tick);
        progress = 100;
        bar.style.width = '100%';
        text.textContent = '100%';
        setTimeout(function(){
            preloader.classList.add('hidden');
        }, 150);
        setTimeout(function(){
            if(preloader && preloader.parentNode){
                preloader.parentNode.removeChild(preloader);
            }
        }, 800);
    }

    if(document.readyState === 'complete'){
        finish();
    } else {
        window.addEventListener('load', finish);
        // soft push if load is slow
        setTimeout(function(){
            if(progress < 95){
                progress = 95;
                bar.style.width = '95%';
                text.textContent = '95%';
            }
        }, 5000);
        // hard cap fallback
        setTimeout(function(){
            if(preloader){ finish(); }
        }, 15000);
    }
})();