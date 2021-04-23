import "./scss/app"
import {Data,SearchData} from "./api";
import {Card} from "./components/Card";

const search=document.querySelector("input");

search.addEventListener("keyup",async(e)=>{
    const res=await SearchData(e.target.value);
    Card(res,e.target.value);
});

async function app(){
    const res = await Data();
    Card(res);
}

app();