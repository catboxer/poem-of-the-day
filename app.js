async function getPoem(){
  const response = await fetch('https://www.poemist.com/api/v1/randompoems')
  const poem = await response.json()
  return(poem.slice(0,1))
}

// async function getProverb(){
//   const response = await 
//   fetch('https://quotes-and-proverbs.p.rapidapi.com/rapidapiquotes?r=love',{
//   method: "GET",
//   headers:{
// 	"x-rapidapi-host": "quotes-and-proverbs.p.rapidapi.com",
// 	"x-rapidapi-key": `${api-key}`
// 	"useQueryString": true
// }});
//   const proverb = await response.json()
//   console.log(proverb)
// }
// getProverb().catch(error => {
//   error.message; 'An error has occurred: 404'
// });

const onePoem = getPoem().then(poem => {
document.body.innerHTML= 
`<h1 class='title'>Poem Of The Day</h1>
<div class="one-poem">
  <div class="poem-title">${poem[0].title}</div>
    <div class="poem-author">by: ${poem[0].poet.name}</div>
  <div class="poem-content">${poem[0].content.replace( /[\r\n]+/gm, "</br>" )}</div>
  </div>`;
})

window.document.addEventListener("DOMContentLoaded", onePoem);