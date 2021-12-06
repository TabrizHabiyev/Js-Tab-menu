let allBtn=document.querySelectorAll(".btn");
let activeContext = document.getElementById("london")
let tempContent, tempBtn;
console.log(tempContent)
allBtn.forEach(x=>{
    x.onclick = ()=>
    {
        let dataId=x.getAttribute("data-id");
        let tabcontect = document.getElementById(dataId);
        if (dataId!="london"){
           activeContext.style.display="none"
           allBtn[0].style.backgroundColor="#F1F1F1"
        }
        if (tempContent){
            tempContent.style.display="none"
            tempBtn.style.backgroundColor="#F1F1F1"
        }
       x.style.backgroundColor= "#ddd";
       tabcontect.style.display="block";
       console.log(tabcontect)
       tempContent = tabcontect;
       tempBtn = x;
    }
})