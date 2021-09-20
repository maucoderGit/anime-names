const mugiwaras = [
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
    const mugiwara = mugiwaras[Math.floor(Math.random() * mugiwaras.length)]
    console.log(mugiwara)
}

module.exports = 
{
    randomMessage
}