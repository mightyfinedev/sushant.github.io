const someCheckbox = document.getElementById('checkbox_toggle');

someCheckbox.addEventListener('change', e => {
  if(e.target.checked === true) {
    document.getElementById('remember').innerHTML= "&#215;" ;
  }
if(e.target.checked === false) {
    document.getElementById('remember').innerHTML= "&#9776;" ;
  }
});

function sendEmail(){
  Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
  message => alert(message)
  );
}

