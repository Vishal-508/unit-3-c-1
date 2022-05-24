// 
let prod=JSON.parse(localStorage.getItem("products")) || [];
display(prod);

function display(d){
    d.forEach(function (ele,index){
        let main=document.getElementById("all_products");

        let div=document.createElement("div");
        // div.setAttribute("id","card");
        let img=document.createElement("img");
        img.setAttribute("src",ele.image);
       
        let type=document.createElement("h2");
        type.innerText=ele.type;
        let des=document.createElement("p");
        des.innerText=ele.desc;
        let price=document.createElement("h3");
        price.innerText=ele.price;
        let rem=document.createElement("button");
        rem.innerText="remove";
        rem.addEventListener("click",function(){
         remove(index);
        })
        div.append(img,type,des,price,rem);
       
        main.append(div);
        // document.getElementById("all_products").append(div);
    })

}
function remove(ind){
    let prod=JSON.parse(localStorage.getItem("products")) || [];
   let newprod=prod.filter(function (ele,i){
       if(i==ind){
        let trash=JSON.parse(localStorage.getItem("trash")) || [];
        trash.push(ele);
        localStorage.setItem("trash",JSON.stringify(trash));
       }else{

           return i!==ind;
       }
   })
   localStorage.setItem("products",JSON.stringify(newprod));
   window.location.reload();
}