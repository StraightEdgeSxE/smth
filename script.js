const post = document.querySelector('.post');
const likesEl = document.querySelector('.likes');
const heart = document.querySelector('.heart-icon');

likesEl.innerText = 'Пока нет ни одного лайка';

let likeCounter = 0;

post.addEventListener('dblclick', () => {
    likeCounter++;
    if(likeCounter === 1) likesEl.innerText = likeCounter + ' лайк';
    else likesEl.innerText = likeCounter + ' лайк';

    heart.classList.add('animate-like');
    setTimeout( () => {
        heart.classList.remove('animate-like');
    }, 800);
});