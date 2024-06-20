function showPreview(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
    }
}

const token = localStorage.getItem('logado')

document.addEventListener('DOMContentLoaded', async ()=>{
  const response = await fetch('https://api-eviene.onrender.com/user/info',{
    method: 'GET',
    headers:{
      'Authorization': `Bearer ${token}`
    }
  })
  const data = await response.json();

  const name = document.getElementById('name')
  const username = document.getElementById('username')
  const bio = document.getElementById('bio')
  var preview = document.getElementById("file-ip-1-preview");

  name.value = data.name
  username.value = data.username
  bio.value = data.bio
  preview.src = data.profilePic
})

document.getElementById('editProfile').addEventListener('submit', async (e)=>{
  e.preventDefault();

  const formData = new FormData(document.getElementById('editProfile'));
  
  const response = await fetch('https://api-eviene.onrender.com/user/', {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  })
  const data = await response.json()
  alert(data.message)

  top.location.reload(true)

})

async function excluirConta(){
  const response = await fetch('https://api-eviene.onrender.com/user/', {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  const data = await response.json()
  alert(data.message)

  if(response.status == 200){
    localStorage.clear()
    top.location.href = './login.html'
  }
}