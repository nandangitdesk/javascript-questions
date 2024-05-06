const nav = document.querySelector('.nav');

nav.addEventListener("click",(e)=>{
  console.log(e.target.dataset.category)
  if(e.target.dataset.category !== undefined){
    searchFilter(e.target.dataset.category)
  }
})

const searchFilter = (value)=>{
  const images = document.querySelectorAll('.image img');
  images.forEach((image)=>{
    if(image.dataset.category === value || value === "All"){
      image.style.display = "block"
    }else{
      image.style.display = "none"
    }
  })
}