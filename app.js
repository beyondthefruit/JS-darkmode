console.log('dark mode');

//select my elements
const btn = document.querySelector('.btn');
const articleSection = document.querySelector('.articles');

//add my event listener for my toggle
btn.addEventListener('click', function () {
  console.log('hi');
  document.documentElement.classList.toggle('dark-theme'); //select html and toggle
});
// console.log(articles);

// pop up my article with data from my articles
articleSection.innerHTML = articles
  .map((article) => {
    const formatDate = moment(article.date).format('MMMM Do, YYYY');
    // console.log(article);
    return `<article class="post">
          <h2>${article.title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${article.length}min read</span>
          </div>
          <p>
            ${article.snippet}
          </p>
        </article>`;
  })
  .join('');
