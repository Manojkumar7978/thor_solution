let navBtn=[
    {
        logo:"./assets/title.png",
        text:"Customizer Title"
    },
    {
        logo:"./assets/panel.png",
        text:"Layers Panel"
    },
    {
        logo:"./assets/layer.png",
        text:"Layers"
    },
    {
        logo:"./assets/layersetting.png",
        text:"Layer Settings"
    },
    {
        logo:"./assets/Thumbnails Button.png",
        text:"Thumbnails Button"
    },
    {
        logo:"./assets/Text Input & Dropdown.png",
        text:"Text Input & Dropdown"
    },
    {
        logo:"./assets/File Upload.png",
        text:"File Upload"
    },
    {
        logo:"./assets/Print Ready.png",
        text:"Print Ready"
    },
    {
        logo:"./assets/Customizer.png",
        text:"Customizer"
    },
    {
        logo:"./assets/title.png",
        text:"Step Title (mobile)"
    },
    {
        logo:"./assets/title.png",
        text:"Summary Title"
    },
    {
        logo:"./assets/cart.png",
        text:"Add To Cart & Buttons"
    },
    {
        logo:"./assets/confirm.png",
        text:"Confirm Button (mobile)"
    },
    {
        logo:"./assets/price.png",
        text:"Price"
    },
]

let themeNav=document.querySelector(".theme-nav")

navBtn.map((el,ind)=>{
    let x=document.createElement("div")
    x.setAttribute("class","nav-btns")
    if(ind===0){
        x.classList.add("theme-active")
    }
    x.setAttribute("id",ind)
    x.onclick=()=>{
        let nav=document.querySelectorAll(".nav-btns")
        for(ele of nav){
            ele.classList.remove("theme-active")
        }
        x.classList.add("theme-active")
    }
    let div=document.createElement("div")
    let img=document.createElement("img")
    let title=document.createElement("h1")
    title.textContent=el.text
    img.setAttribute("src",el.logo)
    div.append(img,title)
    x.append(div)
    themeNav.append(x)
})

