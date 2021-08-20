//the user will enter a character name. Get the character name, photo, and mor einfo about the character
document.querySelector('button').addEventListener('click', getMoreInfo)

function getMoreInfo(){
  const url = 'https://swapi.dev/api/people/1/'

  fetch(url)
      .then(res => res.json()) //parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h1').innerText = data.name
        document.querySelector('h2').innerText = "Height: " + data.height
        })
      .catch(err => {
        console.log(`error ${err}`)
      });
 }

 document.querySelector('button').addEventListener('click', getMovies)

  function getMovies(){
    const url = 'https://swapi.dev/api/films/1'

    fetch(url)
        .then(res => res.json()) //parse response as JSON
        .then(data => {
          console.log(data)
          document.querySelector('h3').innerText = data.title
          document.querySelector('p').innerText = data.opening_crawl
          })
        .catch(err => {
          console.log(`error ${err}`)
        });
   }
