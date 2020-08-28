import { getJoke, useJoke } from './JokeProvider.js';
import { Joke, Punchline } from './Joke.js'
const jokeBtn = document.querySelector(".request-joke-btn");
const punchlineBtn = document.querySelector(".request-punchline-btn")
const jokeElement = document.querySelector(".joke-setup");
const punchlineElement = document.querySelector(".joke-punchline");
const selectEmement = document.querySelector("#myList");

jokeBtn.addEventListener("click", (e) => {
  const selection = selectEmement.value
  console.log(selection)
  //const selectedType = selection.options[selection.selectedIndex].value;
  getJoke(selection).then(taco =>{
    const theJoke = useJoke()
    jokeElement.innerHTML = Joke(theJoke)
    punchlineElement.innerHTML = ""
  })

  punchlineBtn.addEventListener("click", (e) => {
    const theJoke = useJoke()
      punchlineElement.innerHTML = Punchline(theJoke)
  })
  //   getJoke().then(taco => {
  //     const theJoke = useJoke()
  //     punchlineElement.innerHTML = Punchline(theJoke)
  //   }) 
  // })
  console.log("I should be grabbing a joke now...");
  // TODO: fetch a joke from the Joke API and render it to the DOM
});

