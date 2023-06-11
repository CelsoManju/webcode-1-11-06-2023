
var currentPage = 1;
function loadPage(pageNumber) {

    if (pageNumber < 1 || pageNumber > 50) {
        return; 
      }

    var contentDiv = document.getElementById('contentDiv');
    contentDiv.innerHTML = '';
    console.log(pageNumber);    
    construct(contentDiv,pageNumber);    
    currentPage = pageNumber;
  }
  


async function getdata(){
    try{
    let res= await fetch('https://api.openbrewerydb.org/v1/breweries');
    let data = res.json();   
    return data;
    }
    catch(e){console.log(e)}
   
}
async function construct(contentDiv,pageNumber){
    let data = await getdata();
    let div =  document.createElement('div');
    div.innerHTML = `<div class="card cardwrapper" style="width: 30rem;" >
    <img src="img_src/brewery_img.jpg" class="card-img-top" alt="${data[pageNumber].name}">
    <div class="card-body">
      <h4 class="card-title">${data[pageNumber].name}</h4>
      <h6 class="card-text">Type : ${data[pageNumber].brewery_type}</h6>   
      <img class="img-icon" src="img_src/address_location_icon.png" > Address:
      <h6 class="card-text">${data[pageNumber].address_1}</h6> 
      <img class="img-icon" src="img_src/website_icon.png"> Website:
      <h6 class="card-text">${data[pageNumber].website_url}</h6>
      <img class="img-icon" src="img_src/phone_icon.png">  Phone:    
      <h6 class="card-text">${data[pageNumber].phone}</h6>
      
      </div>
  </div>`
  contentDiv.appendChild(div);


}


