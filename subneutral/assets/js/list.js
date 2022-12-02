import config from '../../config.js'

if (document.domain !== config.domain) {
    location.replace(`http://${config.domain}`)
}

for (const image of config.images) {

    let listedImage = document.createElement('img')
    listedImage.src = image.src
    listedImage.alt = image.alt
    listedImage.className = "listedImage"

    document.body.querySelector('.images').appendChild(listedImage)

}