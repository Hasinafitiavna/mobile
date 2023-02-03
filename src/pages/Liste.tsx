import React, {useEffect, useState} from "react";
import {IonImg, IonItem, IonLabel, IonList} from "@ionic/react";
import {useHistory} from "react-router";
//import './Liste.css';

const Liste: React.FC = () => {
    const [liste, setList] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    console.log(liste)
    useEffect(() => {
        setLoading(true);
        fetch('https://webservice-enchere-production.up.railway.app/api/encheres/getallenchereClientDetenteur/'+sessionStorage.getItem("idclient"))
            .then(data => data.json())
            .then(res => {
                setList(res);
                setLoading(false);
                console.log(res)
            })
    }, [])
    const enchereList =liste.map((enchere)=>{
        return(
            <IonList>
                <IonItem>
                    <IonLabel>{enchere.id}</IonLabel>
                    <br/>
                    <IonLabel>{enchere.idproduit}</IonLabel>
                    <br/>
                    <IonLabel>{enchere.datedebut}</IonLabel>
                    <br/>
                    <IonLabel>{enchere.datefin}</IonLabel>
                    <br/>
                    <IonLabel>{enchere.montantdebase}</IonLabel>
                    <br/>
                    <IonLabel>{enchere.state}</IonLabel>
                    <br/>
                </IonItem>
            </IonList>
        )
    })
    return(
        <div>{enchereList}</div>
    )
};
export default Liste;