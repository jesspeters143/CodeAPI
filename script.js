//the user will enter a character name. Get the character name, photo, and mor einfo about the character
document.querySelector('button').addEventListener('click', getMoreInfo)

function getMoreInfo(){
  const url = 'https://swapi.dev/api/people/1/'

  fetch(url)
      .then(res => res.json()) //parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h1').innerText = data.name
        document.querySelector('h2').innerText = data.height
        document.querySelector('h3').innerText = data.hair_color
      })
      .catch(err => {
        console.log(`error ${err}`)
      });
}
