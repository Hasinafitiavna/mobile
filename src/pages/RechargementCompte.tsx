import React, {useEffect, useRef, useState} from 'react';
//import './RechargementCompte.css';
import {
    IonApp,
    IonButton, IonCard, IonCardContent,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonIcon, IonInput,
    IonItem,
    IonLabel,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {logIn, logoFacebook, logOut, refreshOutline, remove} from "ionicons/icons";
import {demanderechargement, insertclient, login} from "../hooks/useData";
import {useHistory} from "react-router";

const RechargementCompte: React.FC = () => {
    const [donne,setDonne]=useState<string>()
    const montantInputRef = useRef<HTMLIonInputElement>(null);
    const history = useHistory();
    const deconnexion = () => {
        sessionStorage.removeItem("idclient")
        history.push("/login")
    }
    const demande = () => {
        const enteredmontant : any = montantInputRef.current!.value
        const idclient = sessionStorage.getItem("idclient")
        if ((enteredmontant=="")){
            setDonne("veuillez remplir la case")
        }
        else {
            demanderechargement(idclient+"",enteredmontant)
            history.push("/acceuil")
        }
    };
    const resetInputs = () => {
        montantInputRef.current!.value="";
    };
    return(
        <IonApp>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>RechargementCompte</IonTitle>
                </IonToolbar>

            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Montant Demanded</IonLabel>
                                <IonInput ref={montantInputRef}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-left">
                            <IonButton onClick={demande}>
                                <IonIcon slot="start" icon={logIn}/>
                                Demander Rechargement
                            </IonButton>
                        </IonCol>
                        <IonCol className="ion-text-right">
                            <IonButton onClick={resetInputs}>
                                <IonIcon slot="start" icon={refreshOutline}/>
                                refresh
                            </IonButton>
                        </IonCol>
                        <IonCol className="ion-text-left">
                            <IonButton onClick={deconnexion}>
                                <IonIcon slot="start" icon={logOut}/>
                                logOut
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                {donne && (<IonRow>
                    <IonCol>
                        <IonCard>
                            <IonCardContent>
                                {donne}
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>)}
            </IonContent>
        </IonApp>

    );
};
export default RechargementCompte;