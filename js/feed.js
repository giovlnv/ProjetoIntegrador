import { allEvents } from './main.js';
import { postsData } from './main.js';


// EVENTOS

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
    img.src = s.imageUrl;

    const owner = document.createElement("div");
    owner.classList.add("owner");
    owner.innerHTML = s.owner;

    const distance = document.createElement("div");
    distance.classList.add("distance");
    distance.innerHTML = s.distance;

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
    eventImageFull.src = allEvents[index].imageUrl;
    ownerFull.innerHTML = allEvents[index].owner;
    distanceFull.innerHTML = allEvents[index].distance;
    eventosFullView.classList.add("active");
  }
};

closeBtn.addEventListener("click", () => {
  eventosFullView.classList.remove("active");
});

const mainPosts = document.querySelector('.main-posts');


//POSTS

const createPosts = (posts) => {
  posts.forEach(post => {
    const postBox = document.createElement('div');
    postBox.classList.add('post-box');

    const postImage = document.createElement('img');
    postImage.src = post.imageUrl;
    postImage.alt = '';

    const postInfo = document.createElement('div');
    postInfo.classList.add('post-info');

    const postProfile = document.createElement('div');
    postProfile.classList.add('post-profile');

    const postProfileImg = document.createElement('div');
    postProfileImg.classList.add('post-img');
    const profileImage = document.createElement('img');
    profileImage.src = post.profileImageUrl;
    postProfileImg.appendChild(profileImage);

    const ownerName = document.createElement('h3');
    ownerName.textContent = post.ownerName;

    const likes = document.createElement('div');
    likes.classList.add('likes');
    const heartIcon = document.createElement('i');
    heartIcon.classList.add('ri-heart-3-line');
    const likesCount = document.createElement('span');
    likesCount.textContent = post.likesCount;
    const shareIcon = document.createElement('i');
    shareIcon.classList.add('ri-share-2-line');
    const sharesCount = document.createElement('span');
    sharesCount.textContent = post.sharesCount;

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