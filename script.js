let BagItems=[]

onLoad()
function onLoad(){
displayItemonHomePage()
displayBagIcon()
 let bagItemStr=localStorage.getItem('bagItems')
 BagItems=bagItemStr ? JSON.parse(bagItemStr): []
}
 
 function addToBag(itemId){
    BagItems.push(itemId)
    displayBagIcon()
    localStorage.setItem('bagItems',JSON.stringify(BagItems))

 }
 function displayBagIcon(){
    let bagItemsCountElement=document.querySelector(".bag-item-count")
    if (BagItems.length>0){
      bagItemsCountElement.style.visibility="visible"
      bagItemsCountElement.innerText=BagItems.length
    } else{
          bagItemsCountElement.style.computedstyleMap
      }
    
 }
 function displayItemonHomePage(){
    let itemContainerElement=document.querySelector(".items-container")
    if(!itemContainerElement){
      return
    }

let innerHTML=" "
items.forEach(item=> {
    innerHTML+=`<div class="item-contaier">
            <img  class ="item-image" src="${item.image}" alt="img" height="190px" width="190px">
            <div class="rating">${item.rating.stars} ⭐ ${item.rating.count}</div>
            <div class="company">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs${item.current_price}</span>
                <span class="original-price">Rs${item.original_price}</span>
                <span class="discount">(${item.discount}%OFF)</span><br>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
            
        </div>`
         
})
 
 

// let item={
//     item_image:'images/2.jpg',
//     rating:{
//         start:4.5,
//         end:780
//     },
//     company:"Dress Berry",
//     item_name:"Women Analogue Makeup",
//     current_price:824,
//     original_price:3299,
//     discount:70
// }

itemContainerElement.innerHTML=innerHTML
 }