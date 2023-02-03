import React, {useEffect, useRef, useState} from 'react';
import './AjoutEnchere.css';
import {
    IonApp,
    IonButton, IonCard, IonCardContent,
    IonCol,
    IonContent, IonDatetime,
    IonGrid,
    IonHeader, IonIcon, IonInput,
    IonItem,
    IonLabel,
    IonRow,
    IonTitle,
    IonToolbar,
    IonList, IonImg,
} from "@ionic/react";
import {logIn, logoFacebook, refreshOutline} from "ionicons/icons";
import {ajoutenchere, castToTimeStamp, listeproduit, login} from "../hooks/useData";
import {useHistory} from "react-router";
import {format} from "util";
// import {toast, ToastContainer} from "react-toastify";

const AjoutEnchere: React.FC = () => {
    const [liste, setList] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const timestamp = Date.now();// This would be the timestamp you want to format
    const datenow = new Intl.DateTimeFormat('fr-FR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
    const [donne,setDonne]=useState<string>()
    const datefininput = useRef<HTMLIonDatetimeElement>(null);
    const idproduitInputRef = useRef<HTMLIonInputElement>(null);
    const montantDeBaseInputRef = useRef<HTMLIonInputElement>(null);
    useEffect(() => {
        setLoading(true);
        fetch('https://webservice-enchere-production.up.railway.app/api/encheres/getallproduits')
            .then(data => data.json())
            .then(res => {
                setList(res);
                setLoading(false);
            })
    }, [])
    useEffect(() => {
        setLoading(true);
        fetch('https://webservice-enchere-production.up.railway.app/api/encheres/getallproduits')
            .then(data => data.json())
            .then(res => {
                setList(res);
                setLoading(false);
            })
    }, [])
    const produitList =liste.map((group)=>{
        return(
            <IonList>
                <IonItem>
                    <IonLabel>{group.id}</IonLabel>
                    <br/>
                    <IonLabel>{group.nom}</IonLabel>
                    <br/>
                    <div className='photo'>
                    <IonImg src={group.lienimage} className='image'></IonImg>
                    </div>
                    <br/>
                </IonItem>
            </IonList>
        )
    })
    const debutenchere = () => {
        const enteredidproduit : any = idproduitInputRef.current!.value
        const enteredidclient :any = sessionStorage.getItem("idclient")
        const montantdebase :any = montantDeBaseInputRef.current!.value
        const datefin :any = datefininput.current!.value
        let exist = false
        listeproduit().then(async (res) =>{
            res.json().then(ress=>{
                for (let i = 0; i < ress.length; i++) {
                    if(parseInt(ress[i].id)===parseInt(enteredidproduit)){
                        exist = true
                    }
                }
                if(exist){
                    let thing = (datefin.replace("T"," ")).toString()
                    thing.split("")
                    let tenadatefin = ""
                    for (let j = 0; j < thing.length; j++) {
                        if(j==24||j==23||j==22||j==21||j==20||j==19){
                        }
                        else{
                            tenadatefin = tenadatefin + thing[j]
                        }
                    }
                    let datedebut1 = datenow.replace(",","").replace(" PM","").replace(" AM","")
                    let datedebut2 = datedebut1.split(" ")[0]
                    let datedebut5 = datedebut2.split("")
                    let datedebut3 = datedebut5[6]+datedebut5[7]+datedebut5[8]+datedebut5[9]+"-"+datedebut5[3]+datedebut5[4]+"-"+datedebut5[0]+datedebut5[1]
                    let datedebut4 = datedebut3+" "+datedebut1.split(" ")[1]
                    const tenadatedebut = datedebut4
                    ajoutenchere(enteredidproduit.toString(),enteredidclient.toString(),tenadatedebut,tenadatefin,montantdebase.toString()).then(async (res) =>{
                        history.push("/acceuilclient")
                    })
                }
                else {
                    setDonne("The product Id does not Exist")
                }
            })
        })
    };
    const resetInputs = () => {
        idproduitInputRef.current!.value="";
        montantDeBaseInputRef.current!.value="";
    };
    const showToast = () => {
        // toast("Hello, this is a toast message", {
        //     position: "top-center",
        //     autoClose: 2000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true
        // });
        return (
            <IonContent>
                <IonButton onClick={showToast}>Show Toast </IonButton>
                {/*<ToastContainer />*/}
            </IonContent>
        )
    };
    return(
        <IonApp>
            <a href="/insertionProduit">Ajouter produit</a>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>AjoutEnchere</IonTitle>
                </IonToolbar>

            </IonHeader>
            <IonContent className="ion-padding">
                {produitList}
                {/*<select className="" id="">*/}
                {/*    <option value="">test</option>*/}
                {/*    <option value="">test</option>*/}
                {/*    <option value="">test</option>*/}
                {/*    <option value="">test</option>*/}
                {/*</select>*/}
                <IonGrid>
                    {donne && (<IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardContent>
                                    {donne}
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>)}
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">The id of the product you want to sell, insert a product you want to sell</IonLabel>
                                <IonInput ref={idproduitInputRef}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">The time you want to end the Enchere</IonLabel>
                                <br/>
                                <br/>
                                <br/>
                                <IonDatetime ref={datefininput}></IonDatetime>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Montant de base</IonLabel>
                                <IonInput ref={montantDeBaseInputRef}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-left">
                            <IonButton onClick={debutenchere}>
                                <IonIcon slot="start" icon={logIn}/>
                                DEBUTER ENCHERE
                            </IonButton>
                        </IonCol>
                        <IonCol className="ion-text-right">
                            <IonButton onClick={resetInputs}>
                                <IonIcon slot="start" icon={refreshOutline}/>
                                refresh
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonContent>
                                <IonButton onClick={showToast}>Show Toast</IonButton>
                                {/*<ToastContainer />*/}
                            </IonContent>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonApp>

    );
};
export default AjoutEnchere;