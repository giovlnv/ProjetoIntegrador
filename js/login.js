const login = document.getElementById('login');

login.addEventListener('submit', async(e)=>{
    e.preventDefault();

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const user = {
        email: username,
        password: password
    }

    const req = await fetch('https://api-eviene.onrender.com/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const response = await req.json();

    alert(response.message);

    if(req.status == 200){
        localStorage.setItem('logado', response.token)
        window.location.href = './sidebar.html'
    }
})