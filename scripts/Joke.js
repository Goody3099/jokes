// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string
export const Joke = (jokeObject) => {
    return `<div>${jokeObject.setup}</div>`
            
}

export const Punchline = (jokeObject) => {
    return `<div>${jokeObject.punchline}</div>`
}