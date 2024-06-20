// FORMULARIO

let currentPage = 1;
const pages = document.querySelectorAll('.form-page');

function nextPage() {
  if (currentPage < pages.length) {
    pages[currentPage - 1].classList.remove('active');
    pages[currentPage].classList.add('active');
    currentPage++;
  }
}

function prevPage() {
  if (currentPage > 1) {
    pages[currentPage - 1].classList.remove('active');
    pages[currentPage - 2].classList.add('active'); 
    currentPage--;
  }
}
const registerUser = document.getElementById('register');

registerUser.addEventListener('submit', async (e)=>{
  e.preventDefault();

  const name = document.getElementById('name').value
  const username = document.getElementById('username').value
  const birthDate = document.getElementById('birthdate').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const confirmPassword = document.getElementById('confirmPassword').value

  const user = {
    name: name,
    username: username,
    birthDate: birthDate,
    email: email,
    password: password,
    confirmPassword: confirmPassword
  }

  console.log(user)
  
  const req = await fetch('https://api-eviene.onrender.com/user/register',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })

  const response = await req.json()

  alert(response.message)

  if(req.status == 200){
    window.location.href = './login.html'
  }
})