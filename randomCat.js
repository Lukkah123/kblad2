async function getCat() {
  let rawData = await fetch('https://api.thecatapi.com/v1/images/search')
  let cat = await rawData.json()
  
    let html = `
    <article>
    <h3> Just a random cat </h3>
    <img src="${cat[0].url}">
    </article>
    `
  console.log(cat)

  document.querySelector('.randomCat').innerHTML = html
}

getCat();