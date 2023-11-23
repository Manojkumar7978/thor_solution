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
    {
        logo:"./assets/Switch View Arrows.png",
        text:"Switch View Arrows"
    },
    {
        logo:"./assets/Switch View Dots.png",
        text:"Switch View Dots"
    },
    {
        logo:"./assets/Zoom1.png",
        text:"Zoom"
    },
    {
        logo:"./assets/Share Button.png",
        text:"Share Button"
    },
    {
        logo:"./assets/Description (mobile).png",
        text:"Description (mobile)"
    },
    {
        logo:"./assets/Out of Stock.png",
        text:"Out of Stock"
    },
]
let layersPanel=()=>{
    return `
    <div>
    <h1 class="theme-title">Layers Panel</h1>
    <div class="changable-theme-content">
        <div>Panel Position</div>
        <div value="font-type">
            <input type="text" alt="Font" value="Left">
            <img src="./assets/Group 25.png" alt="group25">
        </div>
        <div>
            Background colour
            <div class="span" style="background-color: #F9F6EF;"> </div>
        </div>
        <div>
            Border colour
            <div class="span" style="background-color: #F9F6EF;"></div>
        </div>
        <div>
            Border thickness
            <div value="input">14 px</div>
        </div>
        <div>
            Error colour
            <div class="span" style="background-color: #D7554F;"></div>
        </div>
    </div>
</div>
    `
}
let Layers=()=>{
    return `
     <div>
                <h1 class="theme-title">Layers</h1>
                <div class="changable-theme-content">
                    <div>
                        Font colour
                        <div class="span" style="background-color: #2D2D2D;"> </div>
                    </div>
                    <div>
                        Font size
                        <div value="input">14 px</div>
                    </div>
                    <div>Font Family</div>
                    <div value="font-type">
                        <input type="text" alt="Font" value="Poppins">
                        <img src="./assets/Group 25.png" alt="group25">
                    </div>
                    <div>
                        Description font colour
                        <div class="span" style="background-color: #2D2D2D;"> </div>
                    </div>
                    <div>
                        Description font size
                        <div value="input">14 px</div>
                    </div>
                    <div>Description font family</div>
                    <div value="font-type">
                        <input type="text" alt="Font" value="Poppins">
                        <img src="./assets/Group 25.png" alt="group25">
                    </div>
                    <div>
                        Divider colour
                        <div class="span" style="background-color: #9C9C9C;"> </div>
                    </div>
                    <div>
                        Divider thickness
                        <div value="input">1 px</div>
                    </div>

                  
                </div>
            </div>
    `
}

let customTitle=()=>{
    return `
    <div>
                <h1 class="theme-title">Customizer Title</h1>
                <div class="changable-theme-content">
                    <div>
                    Background colour
                        <div class="span" style="background-color: #F9F6EF;"> </div>
                    </div>
                    <div>Font</div>
                    <div value="font-type">
                        <input type="text" alt="Font" value="Poppins">
                        <img src="./assets/Group 25.png" alt="group25">
                    </div>

                    <div>
                        Font size
                        <div value="input">14 px</div>
                    </div>
                    <div>
                        Font size(mobile)
                        <div value="input">14 px</div>
                    </div>
                   
                    <div>
                        Font colour
                        <div class="span" style="background-color: #2D2D2D;"> </div>
                    </div>
                    <div>
                        Font colour(mobile)
                        <div class="span" style="background-color: #2D2D2D;"> </div>
                    </div>
                    <div>
                        Divider colour
                        <div class="span" style="background-color: #2D2D2D;"> </div>
                    </div>

                    <div>
                        Divider thickness
                        <div value="input">0 px</div>
                    </div>
            
                  
                </div>
            </div>
    `
}
let themeNav=document.querySelector(".theme-nav")
let changableTheme=document.querySelector(".changable-theme")

changableTheme.innerHTML=customTitle()

navBtn.map((el,ind)=>{
    let x=document.createElement("div")
    x.setAttribute("class","nav-btns")
    if(ind===0){
        x.classList.add("theme-active")
    }
    x.setAttribute("id",ind)
    x.onclick=()=>{
        let nav=document.querySelectorAll(".nav-btns")
        changableTheme.innerHTML=""
        for(ele of nav){
            ele.classList.remove("theme-active")
        }
        x.classList.add("theme-active")
        if(ind===0){
            changableTheme.innerHTML=customTitle()
        }else if(ind===1){
            changableTheme.innerHTML=layersPanel()
        }else if(ind===2){
            changableTheme.innerHTML=Layers()
        }
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

