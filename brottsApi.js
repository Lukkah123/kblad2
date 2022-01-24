async function getBrott() {
  let rawData = await fetch('https://brottsplatskartan.se/api/eventsNearby?lat=56.03&lng=14.16')
  let brott = await rawData.json()
  let html = ''
  console.log(brott)
  for (let i = 0; i < 5; i++){
    html += `
    <article>
    <h3>${brott.data[i].description}</h3>
    ${brott.data[i].content}
    <img src="${brott.data[i].image}">
    <p>${brott.data[i].pubdate_iso8601}</p>
    </article>
    `
  }
    
  console.log(brott)

  document.querySelector('.brott').innerHTML = html
}

getBrott()
