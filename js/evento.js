function showPreview(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");
      var icon = document.getElementById("fileInput");
      preview.src = src;
      preview.style.display = "block";
      icon.style.display = "none";
    }
}

const eventForm = document.getElementById('evento')

eventForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(eventForm);

  try {
    const response = await fetch('https://api-eviene.onrender.com/event/', {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("logado")}`
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error('Erro ao criar o evento');
    }

    const data = await response.json();
    alert(data.message);
  } catch (error) {
    console.error('Erro:', error);
    alert('Ocorreu um erro ao criar o evento.');
  }
});
