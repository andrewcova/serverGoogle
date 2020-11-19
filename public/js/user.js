document.regForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const result = await fetch('/user/registration',{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
  body: JSON.stringify({name, email, password})
  });
  if (result.status === 404) {
    const massegeToUser = document.getElementById('regH1');
    massegeToUser.innerText = "Username and email most be unique";
    massegeToUser.style = "color: red";
    console.log((massegeToUser));
  }else{
    console.log('else------');
    window.location.assign(`/user/login/?name=${name}`);
  }


});
