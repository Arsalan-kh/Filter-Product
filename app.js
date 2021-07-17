//************************Filter Cards******************************/
let products = [{
        productName: 'Cloth',
        image: "./img/cloth1.jpg",
        isLiked: false,
        tag: "cloth"
    },
    {
        productName: "Watch",
        image: "./img/watch1.jpg",
        isLiked: true,
        tag: "electronic"
    },
    {
        productName: "Watch",
        image: "./img/watch1.jpg",
        isLiked: true,
        tag: "electronic"
    },
    {
        productName: "Nike-Shoes",
        image: "./img/shoe3.jpg",
        isLiked: false,
        tag: "footwear"
    },
    {
        productName: "Shoe",
        image: "./img/shoe3.jpg",
        isLiked: true,
        tag: "footwear"
    },
    {
        productName: 'Cloth',
        image: "./img/cloth1.jpg",
        isLiked: false,
        tag: "cloth"
    }
];



function ProductTemplate(myProducts) {
    return `
      <div class="cards">
      <i class="fa fa-heart" aria-hidden="true"></i>
      <div class="img">
      <img src="${myProducts.image}">
      </div>
      <h4 >${myProducts.productName} </h4>
    
      <a href="">Add to Cart</a>
      </div>
    `;
}


document.getElementById("filteredItems").innerHTML += `

  ${products.map(ProductTemplate).join('')}
 
`;

function getProduct(userSelected) {
    let selectedItemsArray = products.filter(myProduct);

    function myProduct(myProducts) {
        if (myProducts.tag == userSelected) {
            // console.log(myProducts)
            return document.getElementById("filteredItems").innerHTML = `
        ${products.map(ProductTemplate).join('')}
        `;

        }
    }
    document.getElementById("filteredItems").innerHTML = `
  ${selectedItemsArray.map(ProductTemplate).join('')}  
  `
}