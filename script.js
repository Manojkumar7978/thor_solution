let setting = document.querySelectorAll(".st")
let changableSection = document.querySelector(".changable-section")
let changableBrandSection = document.querySelector(".changable-brand-section")
let brandSetting=[]

// using these below functions settings get changed
// general setting
function general() {
    return (`
        <li>Order Summary</li>
        <li>KPI Dashboard</li>
        <li>Print-ready files</li>
        <li>PDF Preview</li>
        <li>Pantone Colours</li>
        <li> Messages & Alerts</li>
        <li>Bulk Variations</li>
        <li>Translations</li>
        `)
}

// Business setting
function Business() {
    return (`
        <li>Multi Currency</li>
        <li>Customizer Intergrations </li>
        <li>Sales Channel</li>
        <li>Bad Words</li>
        <li>Translations</li>
        <li>Users</li>
        <li>Billing & Subscription</li>
        <li>API Keys</li>
        `)
}
// brand setting
function Brand() {
    return (`
        <li class="brand " onclick="onBrandChange(this)">Logo</li>
        <li class="brand " onclick="onBrandChange(this)">Colour</li>
        <li class="brand " onclick="onBrandChange(this)">Font</li>
        <li class="brand " onclick="onBrandChange(this)">Button</li>
        <li class="brand " onclick="onBrandChange(this)">Social media links</li>
        `)
}
function logo(){
    return `
    <div class="logo-section">
                <h1 class="brand-heading">Logo</h1>
                <div>
                    <div>
                        <div>
                            <img src="./assets/file.png" alt="">
                            <div><h1>Add a default logo</h1>
                            <p>Used for most common logo applications</p>
                            </div>
                        </div>
                        <p>HEIC, PNG or JPG. Recommended width 512 px minimum</p>
                    </div>
                    <div>
                        <div>
                            <img src="./assets/file.png" alt="">
                            <div><h1>Add a default logo</h1>
                            <p>Used for most common logo applications</p>
                            </div>
                        </div>
                        <p>HEIC, PNG or JPG. Recommended width 512 px minimum</p>
                    </div>
                </div>
               </div> `
}
function color(){
    return  `
    <div class="color-section">
    <h1 class="brand-heading">Colour</h1>
    <div>
    <div class="color-input">
        <div>
            <h1>Primary colour</h1>
        <span>
            <input type="text"  value="#D9D9D9"/>
            <input value="#D9D9D9" type="color">
        </span>
        </div>
        <div>
            <h1>Secondary colour</h1>
        <span>
            <input type="text"  value="#9C9C9C"/>
            <input value="#9C9C9C" type="color">
        </span>
        </div>
        <div>
            <h1>Accent colour</h1>
        <span>
            <input type="text"  value="#9C9C9C"/>
            <input value="#9C9C9C" type="color">
        </span>
        </div>
    </div>
        
    </div>
   </div>
     `
}
function button(){
    return  `
    <div class="button-section">
    <h1 class="brand-heading">Colour</h1>
    <div>
        <h1>Primary button</h1>
        <h1>Secondary button</h1>
    </div>
   </div>
     `
}
function social(){
    return  `
    <div class="social-section">
                    <h1 class="brand-heading">Social media links</h1>
                   <div class="social">
                    <div>
                        <h1>Facebook</h1>
                        <input type="text" placeholder="Copy link here"/>
                    </div>
                    <div>
                        <h1>Instagram</h1>
                        <input type="text" placeholder="Copy link here"/>
                    </div>
                    <div>
                        <h1>Twitter</h1>
                        <input type="text" placeholder="Copy link here"/>
                    </div>
                    <div>
                        <h1>Linkedin</h1>
                        <input type="text" placeholder="Copy link here"/>
                    </div>
                   </div>
                   </div>
     `
}
function font(){
    return  `
    <div class="font-section">
    <h1 class="brand-heading">Font</h1>
   <div >
    <div>
        <label>Primary font</label>
        <div>
            <input type="text" class="input-font" placeholder="Upload a font"/>
            <span><img src="./assets/plusicon.png" alt=""></span>
        </div>
        
    </div>
    <div>
        <label>Secondary font</label>
        <div>
            <input type="text" class="input-font" placeholder="Upload a font"/>
            <span><img src="./assets/plusicon.png" alt=""></span>
        </div>
        
    </div>
    <div class="color-input font-color-input">
        <label>Primary font colour</label>
        <div>
            <span>
                <input type="text"  value="#D9D9D9"/>
                <input value="#D9D9D9" type="color">
            </span>
        </div>
        
    </div>
    <div class="color-input font-color-input">
        <label>Secondary font colour</label>
        <div>
            <span>
                <input type="text"  value="#D9D9D9"/>
                <input value="#D9D9D9" type="color">
            </span>
        </div>
        
    </div>
    <div class="color-input font-color-input">
        <label>Primary font size</label>
        <input type="number" class="font-size-no">
        
    </div>
    <div class="color-input font-color-input">
        <label>Secondary font size</label>
        <input type="number" class="font-size-no">
        
    </div>
   </div>
   </div>
     `
}

// initial setting
changableSection.innerHTML = general()

let clickEvent = (e) => {
    changableSection.innerHTML = ""
    for (el of setting) {
        el.classList.remove("active")
    }
    e.classList.add("active")
    let text = e.innerText
    if (text === "General") {
        changableSection.innerHTML = general()
    } else if (text == "Business Details") {
        changableSection.innerHTML = Business()
    } else if (text == "Brands") {
        changableSection.innerHTML = Brand()
        brandSetting=document.querySelectorAll(".brand")
    }
}

let onBrandChange = (e) => {
    changableBrandSection.innerHTML = ""
    for (el of brandSetting) {
        el.classList.remove("active_brand")
    }
    e.classList.add("active_brand")
    let text=e.innerText
    changableBrandSection.style.display="block"
    if(text==="Logo"){
        changableBrandSection.innerHTML=logo()
    }else if(text==="Colour"){
        changableBrandSection.innerHTML=color()
    }else if(text==="Button"){
        changableBrandSection.innerHTML=button()
    }else if(text==="Social media links"){
        changableBrandSection.innerHTML=social()
    }else if(text=="Font"){
        changableBrandSection.innerHTML=font()
    }
}