

let api_url="https://fakestoreapi.com/products";
// as search button clicked fetch data as per the id typed in the input field and display it on the page
let container=document.getElementById("container");
let array=[];

let displayData = () => {
  // Clear container first so clicking multiple times doesn't duplicate list
  container.innerHTML = "";
  array.map((x) => {
    container.innerHTML += `
      <div class="card">  
      <h3>${x.title}</h3>
        <img src="${x.image}" alt="${x.title}">
        <div class="card-body">
          <p class="price">$${x.price}</p>
          <p class="description">${x.description.substring(0, 100)}...</p>
        </div>
      </div>`;
  });
};

 localStorage.setItem("array", JSON.stringify(array));
// const getData=async()=>{
//   let res = await fetch(api_url);
//   let data = await res.json();
//   array=data;
//   displayData();
//   console.log(data);
// }


// fetch data as typesd on the input field and display it on the page using filter method of array and map method to display it on the page. if no data found then display no data found message on the page. 



let searchData = async () => {
  let input = document.getElementById("search").value;
  let res = await fetch(api_url); 
  let data = await res.json();
  let filteredData = data.filter((x) => x.title.toLowerCase().includes(input.toLowerCase()));
  if (filteredData.length > 0) {
    array = filteredData;
    displayData();
  }
  else {
    container.innerHTML = "<h2 style=\"color: white; text-align: center;\">No data found</h2>";
  }
}

