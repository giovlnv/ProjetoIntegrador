async function getInfos(){
    const response = await fetch('http://localhost:3001/user/info',{
        method: 'GET',
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("logado")}`
        }
    })

    const data = await response.json()

    document.getElementById('name').innerText = data.name;
    document.getElementById('username').innerText = `@${data.username}`;
    document.getElementById('followers').innerText = data.followers;
    document.getElementById('following').innerText = data.following;
    document.getElementById('posts').innerText = data.posts;
}

getInfos()