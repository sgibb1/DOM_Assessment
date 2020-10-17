const main = document.querySelector('main');

const jokeOne = "What did the employee do when the boss said to have a good day? Went home.";
const jokeTwo = "What does a mathematician say when something goes wrong? Figures!";
const jokeThree = "What did one ocean say to the other?  Nothing, they just waved.";

const template = `
      <section>
        <h1 class="header">My Jokes</h1>
        <p id="jokeOneParagraph">${jokeOne}</p>
        <p id="jokeTwoParagraph">${jokeTwo}</p>
        <p id="jokeThreeParagraph">${jokeThree}</p> 
      </section>
`;

        const p = document.createElement('p');
        p.textContent = "That's all folks!"
        
main.innerHTML = template;
main.appendChild(p); 

