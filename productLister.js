async function loadJsonAndDisplayProducts() {
  
  let rawData = await fetch('/products.json')
  let products = await rawData.json()
  let html = ''
  for (let product of products) {
    html += `
    <article>
    <h3>${product.productName}</h3>
    <p>${product.description}</p>
    <p>Price: ${product.price} SEK </p>
    </article>
    `
  }

  document.querySelector('.products').innerHTML = html
}

loadJsonAndDisplayProducts()