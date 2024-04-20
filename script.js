// console.log('====================================');
// console.log("Connected");
// console.log('====================================');
// let xhr = new XMLHttpRequest();
// let api;
// xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       api = JSON.parse(xhr.responseText);
//       console.log(api.product.options[0].values[0]);
//     }
//   };
//   xhr.open('GET','https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448',true);
//   xhr.send();

colors={
 Yellow : "#ECDECC",
 Green :"#BBD278",
 Blue :"#BBC1F8",
 Pink :"#FFD3F8",
};
console.log(colors["Pink"]);
let purchase = {
  color:"yellow",
  size:"small",
}
function percent_off() {
  let price = Number(document.getElementById("price").innerText.substring(1));
  let compare_at_price = Number(
    document.getElementsByTagName("del")[0].innerText.substring(1)
  );
  document.getElementById("disc_per").innerText =`${Math.round((100-price/compare_at_price*100))}% Off`;
  console.log(price, compare_at_price);
}
percent_off();
for(let i=0;i<document.getElementsByTagName("input").length;i++)
{
  document.getElementsByTagName("input")[i].addEventListener("change",(event)=>{
      for(let j = 0;j<document.getElementsByTagName("input").length;j++){
        if(document.getElementsByTagName("input")[j]===event.target)
        {
          selected_size =document.getElementsByClassName("size_sec")[j];
          selected_size.style.backgroundColor ="#EDF0F8";
         selected_size.getElementsByTagName("span")[0].style.color ="#3A4980";
          purchase.size = selected_size.getElementsByTagName("span")[0].innerText;
          console.log(purchase.size);
        }
        else{
          document.getElementsByClassName("size_sec")[j].style.backgroundColor ="#F3F3F3";
          document.getElementsByClassName("size_sec")[j].getElementsByTagName("span")[0].style.color 
          ="#726C6C";
        }
      }
    });
    document.getElementsByTagName("input")[0].checked=true;
    document.getElementsByClassName("size_sec")[0].style.backgroundColor ="#EDF0F8";
    document.getElementsByClassName("size_sec")[0].getElementsByTagName("span")[0].style.color ="#3A4980";
}
document.getElementsByClassName("")
document.getElementById("quant_button").getElementsByTagName("span")[2].addEventListener("click",()=>{
  document.getElementById("quant_button").getElementsByTagName("span")[1].innerText=Number(document.getElementById("quant_button").getElementsByTagName("span")[1].innerText)+1; 
});

document.getElementById("quant_button").getElementsByTagName("span")[0].addEventListener("click",()=>{
  let quantity = document.getElementById("quant_button").getElementsByTagName("span")[1].innerText;
  console.log(quantity);
  if(Number(quantity)!==0)
  document.getElementById("quant_button").getElementsByTagName("span")[1].innerText=Number(quantity)-1;
});
i=0,j=0;
for(i=0;i<document.getElementsByClassName("real_colors_outer_div").length;i++){
  document.getElementsByClassName("real_colors_outer_div")[i].addEventListener("click",(event)=>{
    for(j=0;j<document.getElementsByClassName("real_colors_outer_div").length;j++)
    {
      if(document.getElementsByClassName("actual_colors")[j]===event.target)
      {
        purchase.color = event.target.id;
        document.getElementsByClassName("real_colors_outer_div")[j].style.borderWidth='3px';
        document.getElementsByClassName("actual_colors")[j].innerHTML='<img src = "assets/images/Vector (Stroke).png">';

      }
      else{
        document.getElementsByClassName("real_colors_outer_div")[j].style.borderWidth='0px';
        document.getElementsByClassName("actual_colors")[j].innerHTML = '';
      }
    }
  });
}

document.getElementsByTagName("button")[0].addEventListener("click",()=>{
  document.getElementById("purchase").style.display = "flex";
  document.getElementById("purchase").getElementsByTagName('p')[0].innerText = `Embrace Sideboard with Color ${purchase.color} and Size ${purchase.size} added to cart`;
  document.getElementById("buttons_div").style.marginBottom ="23px";
});