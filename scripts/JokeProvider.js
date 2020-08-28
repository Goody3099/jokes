let joke;

// 1. define and export a useJoke function that simply returns the joke object.
//         Advanced: find a way to return a copy of the joke object (tip: .slice will not work)
// 2. define and export a getJoke function that fetches a joke from the API and sets the joke variable to the response

export const useJoke = () => {
    return joke
}

export const getJoke = (taco) => {

    if (taco === "Random") {
        return fetch("https://official-joke-api.appspot.com/jokes/random")
            .then(response => response.json())
            .then((response) => {
                joke = response
            })
        }
    else if (taco === "General") {
        return fetch("https://official-joke-api.appspot.com/jokes/general/random")
            .then(response => response.json())
            .then((response) => {
                joke = response[0]
            })
        }
    else if (taco === "Programming") {
        return fetch("https://official-joke-api.appspot.com/jokes/programming/random")
            .then(response => response.json())
            .then((response) => {
                joke = response[0]
            })
        }
    else if (taco === "Knock Knock") {
        return fetch("https://official-joke-api.appspot.com/jokes/knock-knock/random")
            .then(response => response.json())
            .then((response) => {
                joke = response[0]
            })
        }
}
