function checkLogin(){
    const logado = localStorage.getItem('logado')

    if(!logado){
        window.location.href = './login.html'
    }
}

checkLogin()