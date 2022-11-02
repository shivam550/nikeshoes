const wrapper =document.querySelector(".slidewrapper");
const menuitem =document.querySelectorAll(".menuitem");


const products = [
    {
      id: 1,
      title: "Air Force",
      price: 999,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 1999,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 1199,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 599,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 899,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let choosenProduct=products[0]

  const currentproductImg=document.querySelector(".productImg");
  const currentproductTitle=document.querySelector(".productTitle");
  const currentproductprice=document.querySelector(".productprice");
  const currentproductcolors=document.querySelectorAll(".color");
  const currentproductSizes=document.querySelectorAll(".size");

menuitem.forEach((item,index)=>{
item.addEventListener("click",()=>{
    // change the current slide
 wrapper.style.transform=`translateX(${-100 * index}vw)`;

  // change  the choosen product
  choosenProduct=products[index]
  // change  text of current product
  currentproductTitle.textContent=choosenProduct.title
  currentproductprice.textContent=choosenProduct.price+" ₹"
  currentproductImg.src =choosenProduct.colors[0].img
   //assigning new colors
  currentproductcolors.forEach((color,index)=>{
  color.style.backgroundColor=choosenProduct.colors[index].code
  });
 });
});

currentproductcolors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
      currentproductImg.src=choosenProduct.colors[index].img
    });
});


currentproductSizes.forEach((size,index)=>{
size.addEventListener("click",()=>{
    currentproductSizes.forEach((size)=>{
    size.style.backgroundColor="white"
    size.style.color="black"
    });
 size.style.backgroundColor="black"
 size.style.color="white"
});
});