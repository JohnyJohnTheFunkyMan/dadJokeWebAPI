const dadJokeUI = document.querySelector('.dad-joke')
const btn = document.querySelector('.new-joke')

const changeUI = async () => {
    const dadJoke = await newDadJoke()
    dadJokeUI.innerHTML = dadJoke
}

const newDadJoke = async () => {
    const dadJoke = await axios.get('https://icanhazdadjoke.com', { headers: { Accept: 'application/json' } })
    return dadJoke.data.joke
}

window.addEventListener('load', () => changeUI())

btn.addEventListener('click', () => {
    changeUI()
})

