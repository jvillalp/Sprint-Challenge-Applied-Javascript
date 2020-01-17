// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then (response =>{
        console.log(response)
        const cardsDiv = createCard(response.data.articles);
    })
    .catch(error =>{
        console.log('The data is not responding', error);
    });

    const entryPoint2 = document.querySelector('.cards-container');
    
    function createCard(articles){
        console.log(articles)
        Object.keys(articles).forEach((articleType) => {
            articles[articleType].forEach((article) =>{
                console.log(article)

                const card = document.createElement('div');
                const headLine = document.createElement('div');
                const author = document.createElement('div');
                const imgContainer = document.createElement('div');
                const img = document.createElement('img');
                const authorName = document.createElement('span');

                card.classList.add('card');
                headLine.classList.add('headline');
                author.classList.add('author');
                imgContainer.classList.add('img-container');

                img.src = article.authorPhoto;

                headLine.textContent = article.headline;
                authorName.textContent = `By ${article.authorName}`;

                card.appendChild(headLine);
                card.appendChild(author);
                author.appendChild(imgContainer);
                author.appendChild(authorName);
                imgContainer.appendChild(img);

                entryPoint2.appendChild(card);
            });
        });
    }