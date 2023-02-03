import {useEffect, useState} from "react";

export function useData(name:string){
    const [data,setData] =useState([] as any[]);

    useEffect(()=>{
        const loadData = async ()=>{
            const url="https://webservice-enchere-production.up.railway.app/login/"+name+"/hasina"
            const data = await fetch(url);
            const json =await data.json();
            setData(json)
            console.log(json)
        };
        loadData();
    },[])

    return data

}

export async function login(name: string,password: string ){
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/loginV/"+name+"/"+password
    return await fetch(url);
}

export async function insertclient(name: string,password: string ){
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/insertclient/"+name+"/"+password
    return await fetch(url);
}
export async function insertProduit(name: string,lien: string ){
    // const t=lien.replace()
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/insertproduit";

    return await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nom: name,
            lienimage: lien
        })
    });
}

export async function listeproduit(){
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/getallproduits"
    return await fetch(url);
}

export async function listeenchere(idclient :string){
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/getallenchereClientDetenteur/"+parseInt(idclient)
    return await fetch(url);
}

export async function castToTimeStamp(date: Date){
    const thing = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(date)
    return new Date(thing.toString().replace(",","").replace("/","-").replace("AM","").replace(" PM",""))
}

export async function ajoutenchere(idproduit: string,idclient: string, datedebut: string, datefin: string, montant: string){
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/debuterEnchere/"+parseInt(idproduit)+"/"+parseInt(idclient)+"/"+datedebut+"/"+datefin+"/"+parseFloat(montant)
    return await fetch(url);
}

export async function demanderechargement(idclient: string, montant: string){
    const url = "https://webservice-enchere-production.up.railway.app/api/encheres/insertIntoRechargementCompte/"+parseInt(idclient)+"/"+parseFloat(montant)
    return await fetch(url);
}