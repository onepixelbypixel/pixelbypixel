const px=new pixelbypixel({from:document.getElementById("pixelbypixelimg")});let paletteList=[[[0,0,0],[255,255,255],],[[26,28,44],[93,39,93],[177,62,83],[239,125,87],[255,205,117],[167,240,112],[56,183,100],[37,113,121],[41,54,111],[59,93,201],[65,166,246],[115,239,247],[244,244,244],[148,176,194],[86,108,134],[51,60,87],],[[229,227,211],[162,216,162],[78,193,172],[16,130,168],[0,50,138],[88,15,143],[199,72,155],[218,142,134],[214,201,144],[196,162,54],[190,89,9],[140,16,8],[11,11,11],[107,79,61],[169,147,121],[204,195,168],],[[21,25,26],[138,76,88],[217,98,117],[230,184,193],[69,107,115],[75,151,166],[165,189,194],[255,245,247]],[[234,230,229],[117,179,167],[38,157,138],[25,71,62],[186,148,140],[180,104,89],[90,66,61],[0,10,8]],],uploadedImageSrc="",currentPalette=0;document.addEventListener("DOMContentLoaded",function(){document.getElementById("imageInput").onchange=function(t){let _=new Image;_.src=URL.createObjectURL(this.files[0]),uploadedImageSrc=_.src,_.onload=()=>{px.sFIS(_.src),e()}};let e=()=>{document.querySelector(".loader").classList.toggle("active"),setTimeout(()=>{document.querySelector(".loader").classList.toggle("active")},800),px.sS(t.value).sP(paletteList[currentPalette]).draw().p().iC(),_.checked&&px.cGS(),l.checked&&px.cLA(),c.checked&&px.cGA("canvas",uploadedImageSrc),a.checked&&px.cP()};document.querySelector("#palettecolor").innerHTML="",(paletteList=[...paletteList]).forEach((e,t)=>{let _=document.createElement("option");_.value=t,e.forEach(e=>{let t=document.createElement("div");t.classList="colorblock",t.style.backgroundColor=`rgba(${e[0]},${e[1]},${e[2]},1)`,_.appendChild(t)}),document.getElementById("paletteselector").appendChild(_)}),new SlimSelect({hideSelectedOption:!0,showSearch:!1,select:"#paletteselector",onChange(t){currentPalette=t.value,a.checked=!0,e()}});let t=document.querySelector("#pxPerSq");t.addEventListener("change",function(t){this.value>50?this.value=50:this.value<2&&(this.value=2),e()});let _=document.querySelector("#greyscale");_.addEventListener("change",e);let l=document.querySelector("#pixellineart");l.addEventListener("change",e);let c=document.querySelector("#lineart");c.addEventListener("change",e);let a=document.querySelector("#palette");a.addEventListener("change",e);let r=document.querySelector("#downloadimage");r.addEventListener("click",function(e){px.sI()});let n=document.querySelector("#flipH");n.addEventListener("click",function(e){px.fH()});let o=document.querySelector("#imageColor"),i=document.querySelector(".detected-colorpalette");o.addEventListener("change",function(e){o.checked?(i.classList.remove("hide"),px.iC()):i.classList.add("hide")});let d=document.querySelector(".drawer-toggle"),s=document.querySelector(".drawer");d.addEventListener("click",function(){s.classList.toggle("open"),d.classList.toggle("open")}),e()});