const card = document.querySelector(".card");
const alert=document.querySelector(".alert");

export const Card=(data,search="")=>{
    card.innerHTML="";
    if(!data){
        alert.innerHTML=
        `<h4> <span>${search}</span> ile herhangi bir sonuç bulunamadı</h4>`;
        alert.style.opacity="1";
        return;
    }
    alert.style.opacity="0";
    data.forEach(item => {
       let div=`
        <div class="card-image">
            <img src="${item.image}">
            <h1>${item.name}</h1>
            <p>${shortTime(item.created)}</p>
        </div>
        `;
        card.innerHTML+=div;
    });
}
function shortTime(time){
    return time.split("T")[0];
}