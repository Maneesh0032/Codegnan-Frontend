//function changetext(){
//    let h1tag=document.getElementsByTagName("h1");
//    h1tag[0].innerText="Hello World";
//}

let api_url="https://fakestoreapi.com/products";
// let title=document.getElementById("title");
// let img=document.getElementsByTagName("img");
// let content=document.getElementById("content");
// let price=document.getElementById("price");

let container=document.getElementById("container");
let array=[];


let displayData = () => {
  // Clear container first so clicking multiple times doesn't duplicate list
  container.innerHTML = ""; 
  
  array.map((x) => {
    container.innerHTML += `
      <div class="card">
        <img src="${x.image}" alt="${x.title}">
        <div class="card-body">
          <h3>${x.title}</h3>
          <p class="price">$${x.price}</p>
          <p class="description">${x.description.substring(0, 100)}...</p>
        </div>
      </div>`;
  });
};

const getData=async()=>{
  let res = await fetch(api_url);
  let data = await res.json();
  // document.getElementById("title").innerText="Title: "+data[0].title;
  // document.querySelector("img").src=data[0].image;
  // document.getElementById("content").innerText="Description: "+data[0].description;
  // document.getElementById("price").innerText="Price: "+data[0].price;

  // title.innerHTML+=data[0].title;
  // img.src=data[0].image;
  // content.innerHTML+=data[0].description;
  // price.innerHTML+=data[0].price;
  array=data;
  displayData();
}