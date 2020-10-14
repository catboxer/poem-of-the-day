async function getPoem(){
  const response = await fetch('https://www.poemist.com/api/v1/randompoems')
  const poem = await response.json()
  return(poem.slice(0,1))
}


getPoem().then(poem => {

document.body.innerHTML= 
`<h1 class='title'>Poem Of The Day</h1>
<div class="one-poem">
  <div class="poem-title">${poem[0].title}</div>
    <div class="poem-author">by: ${poem[0].poet.name}</div>
  <div class="poem-content">${poem[0].content.replace( /[\r\n]+/gm, "</br>" )}</div>
  </div>`;
})

window.document.addEventListener("DOMContentLoaded", getPoem);