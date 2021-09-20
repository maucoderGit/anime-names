const messages = [
    "Luffy",
    "Zoro",
    "Nami",
    "Ussop",
    "Sanji",
    "Chopper",
    "Robin",
    "Franky",
    "Brook",
    "Jimbe"
]

const randomMessage = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = 
{
    randomMessage
}