async function getBrott() {
  let rawData = await fetch('https://brottsplatskartan.se/api/eventsNearby?lat=56.03&lng=14.16')
  let brott = await rawData.json()
  let html = ''
  for (let i = 0; i < 10; i++){
    html += `
    <article>
    <h3>${brott.data[i].description}</h3>
    ${brott.data[i].content}
    <img src="${brott.data[i].image}">
    </article>
    `
  }
    
  console.log(brott)

  document.querySelector('.brott').innerHTML = html
}

getBrott()
