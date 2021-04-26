let productDiv = document.querySelector(".productDiv");

const siteUrl = "https://flowerpowerlcb.com/wp-json/wc/store/products";




fetch(siteUrl)
.then (response => response.json())
.then(data => {
    productlist(data);
})
.catch((error) => {
    console.error('Error:', error);
});


function productlist (products) {
    let allProducts ="";
    for (let product in products) {

        console.log(products[product]);
        imageUrl(products.feature_media);

        allProducts += `
        <div class ="productDivlist">
        
          <div> <img src="${products[product].images[0].src}"></div>
           <div class="diiv"><h1>${products[product].name}</h1>
            <p>Price: ${products[product].price_html}</P>
           
           <a href="detail.html?id=${products[product].id}"> <button>View More</button></a></div>
            
        </div>`;
        
    }
    productDiv.innerHTML = allProducts;
}

function imageUrl (id) {
    fetch("http://flowerpowerlcb.com/wp-json/wp/v2/media")
    .then (response => response.json())
    .then (data => {
        
        multiImg (data.source_url);
    })
    .catch ((error) => {
        console.error("error (imageUrl):", error);
    })
}

function multiImg(src) {
    console.log ("Img : " + src);
    if (src) {
        let image = document.createElement("image");
        image.src = src;
        image.alt = "bunch of flower";
        image.width = 640;
        output.prepend (image);
    }
}





