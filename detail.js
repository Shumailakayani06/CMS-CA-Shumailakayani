const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");
if (!id) {window.location ="products.html";}

let siteUrl = "http://flowerpowerlcb.com/wp-json/wc/store/products/"+id;
fetch (siteUrl)
.then(response => response.json())
.then(data => {
   
    showProduct(data);
})
.catch((error)=> {
    console.error("error:", error);
})

let showProductDiv= document.querySelector(".showProductDiv");
function showProduct(data) {
    console.log(data);
    let pname = data.name;
    imageUrl(data.featured_media);
    let detail =
     `
    <div productDetailList>
    <h1>${data.name}</h1>
    <p>${data.featured_media}</p>
    <p>${data.description}</p> 
    <p>${data.price_html}</P>
    <p>In stock: ${data.is_in_stock}</p> 
    
    </div>
    <div>
    <a href="detail.html"> <button>Back to product list</button></a>
    </div>
    `
showProductDiv.innerHTML = detail;
document.title = pname;

}






function imageUrl (id) {
    fetch("http://flowerpowerlcb.com/wp-json/wp/v2/media")
    .then (response => response.json())
    .then (data => {
        
        multiImg(data.source_url);
    })
    .catch ((error) => {
        console.error("error (imageUrl):", error);
    })
}

function multiImg(src) {
    console.log (src);
    if (src) {
        let image = document.createElement("image");
        image.src = src;
        image.alt = "bunch of flower";
        image.width = 640;
        output.prepend (image);
    }
}
