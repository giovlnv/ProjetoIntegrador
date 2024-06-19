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
  const imagemEvento = document.getElementById('file-ip-1').files[0];
  const nomeEvento = document.getElementById('nomeEvento').value;
  const localEvento = document.getElementById('localEvento').value;
  const eventDate = document.getElementById('eventDate').value;
  const atracoesEvento = document.getElementById('atracoesEvento').value;

  const formData = new FormData();
  
  for (let i = 0; i < imagemEvento.length; i++) {
    formData.append('banner', imagemEvento[i]);
  }

  
  formData.append('bannerName', imagemEvento.name)
  formData.append('description', nomeEvento);
  formData.append('location', localEvento);
  formData.append('date', eventDate);
  formData.append('attractions', atracoesEvento);

  try {
    const response = await fetch('http://localhost:3001/event/', {
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
