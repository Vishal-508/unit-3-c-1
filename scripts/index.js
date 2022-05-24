//store the products array in localstorage as "products"
// cunstructor function starts here
function Product(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=`Rs. ${p}/-`;
    this.image=i;
}

// add_product function starts here
function add_products(e){
    e.preventDefault();
    let form=document.getElementById("products");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
    // console.log(type,desc,price,image);
    let p1=new Product(type,desc,price,image);
    console.log(p1);
   
    let arr=JSON.parse(localStorage.getItem("products")) || [];
    arr.push(p1);
    localStorage.setItem("products",JSON.stringify(arr));
    form.type.value="";
    form.desc.value="";
    form.price.value="";
    form.image.value="";

}
