import axios from "axios";
const url="https://rickandmortyapi.com/api/character";

export async function SearchData(value){
    try {
        const res=await axios.get(`https://rickandmortyapi.com/api/character/?name=${value}`);
        return res.data.results;
    } catch (err) {
       if(err.message.includes("404")) return false;
    }
}

export async function Data(){
    const res=await axios.get(url);
    return res.data.results;
}