document.addEventListener('DOMContentLoaded', async ()=>{
  // EVENTOS
  const responseEvent = await fetch('https://api-eviene.onrender.com/event',{
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("logado")}`
    },
  })

  const allEvents = await responseEvent.json()
  const eventos = document.querySelector(".eventos");
  const eventosFullView = document.querySelector(".eventos-full-view");
  const closeBtn = document.querySelector(".close-btn");
  const eventImageFull = document.querySelector(".eventos-full-view img");
  const ownerFull = document.querySelector(".eventos-full-view .owner");
  const distanceFull = document.querySelector(".eventos-full-view .distance");

  let currentActive = 0;

  const createEvent = () => {
    allEvents.forEach((s, i) => {
      const event = document.createElement("div");
      event.classList.add("eventos-local");
      event.classList.add(`event-${i}`);

      const img = document.createElement("img");
      img.src = s.banner;

      const owner = document.createElement("div");
      owner.classList.add("owner");
      owner.innerHTML = s.description;

      const distance = document.createElement("div");
      distance.classList.add("distance");
      const eventDate = new Date(s.date)
      const formattedDate = `${eventDate.getDate()}/${eventDate.getMonth() + 1}/${eventDate.getFullYear()} ${eventDate.getHours()}:${eventDate.getMinutes().toString().padStart(2, '0')}`;
      distance.innerHTML = formattedDate;

      event.appendChild(img);
      event.appendChild(owner);
      event.appendChild(distance);

      eventos.appendChild(event);

      event.addEventListener("click", () => {
        showFullView(i);
      });
    });
  };


  createEvent();

  const showFullView = (index) => {
    const eventClass = `.event-${index}`;
    const selectedEvent = document.querySelector(eventClass);

    if (selectedEvent) {
      const eventDate = new Date(allEvents[index].date)
      const formattedDate = `${eventDate.getDate()}/${eventDate.getMonth() + 1}/${eventDate.getFullYear()} ${eventDate.getHours()}:${eventDate.getMinutes().toString().padStart(2, '0')}`;
      eventImageFull.src = allEvents[index].banner;
      ownerFull.innerHTML = allEvents[index].description;
      distanceFull.innerHTML = formattedDate;
      eventosFullView.classList.add("active");
    }
  };

closeBtn.addEventListener("click", () => {
  eventosFullView.classList.remove("active");
});

eventosFullView.addEventListener("click", (event) => {
  if (event.target === eventosFullView) {
    eventosFullView.classList.remove("active");
  }
});


  const mainPosts = document.querySelector('.main-posts');


  //POSTS
  const responsePosts = await fetch('https://api-eviene.onrender.com/post/',{
    method: 'GET',
    headers:{
      "Authorization": `Bearer ${localStorage.getItem("logado")}`
    }
  })

  const postsData = await responsePosts.json()
  console.log(postsData)
  const createPosts = (posts) => {
    posts.forEach(post => {
      const postBox = document.createElement('div');
      postBox.classList.add('post-box');

      const postImage = document.createElement('img');
      postImage.src = post.images[0];
      postImage.alt = '';

      const postInfo = document.createElement('div');
      postInfo.classList.add('post-info');

      const postProfile = document.createElement('div');
      postProfile.classList.add('post-profile');

      const postProfileImg = document.createElement('div');
      postProfileImg.classList.add('post-img');
      const profileImage = document.createElement('img');
      profileImage.src = post.author.profilePicture;
      postProfileImg.appendChild(profileImage);

      const ownerName = document.createElement('h3');
      ownerName.textContent = post.author.username;

      const likes = document.createElement('div');
      likes.classList.add('likes');
      const heartIcon = document.createElement('i');
      heartIcon.classList.add('ri-heart-3-line');
      const likesCount = document.createElement('span');
      likesCount.textContent = post.likes.length;
      const shareIcon = document.createElement('i');
      shareIcon.classList.add('ri-share-2-line');
      // const sharesCount = document.createElement('span');
      // sharesCount.textContent = post.sharesCount;

      postProfile.appendChild(postProfileImg);
      postProfile.appendChild(ownerName);
      likes.appendChild(heartIcon);
      likes.appendChild(likesCount);
      likes.appendChild(shareIcon);
      likes.appendChild(sharesCount);
      postInfo.appendChild(postProfile);
      postInfo.appendChild(likes);
      postBox.appendChild(postImage);
      postBox.appendChild(postInfo);

      mainPosts.appendChild(postBox);
    });
  };

  createPosts(postsData);
})