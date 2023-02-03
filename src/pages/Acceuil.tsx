import React, {useEffect, useRef, useState} from 'react';
// import './Login.css';
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
import {logIn, logoFacebook, logOut, refreshOutline} from "ionicons/icons";
import {login} from "../hooks/useData";
import {useHistory} from "react-router";

const Acceuil: React.FC = () => {
    const history = useHistory();
    const deconnexion = () => {
        sessionStorage.removeItem("idclient")
        history.push("/login")
    }
    return(
        <IonApp>
            <center>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Acceuil</IonTitle>
                </IonToolbar>

            </IonHeader>

            <a href="/ajoutenchere">Start a new enchere</a>
            <br/>
            <a href="/rechargement">Recharger Compte</a>
            <br/>
            <a href="/liste">Regarder mes encheres</a>
                <br/><IonCol className="ion-text-left">
                <IonButton onClick={deconnexion}>
                    <IonIcon slot="start" icon={logOut}/>
                    logOut
                </IonButton>
            </IonCol>
                <br/>
            </center>

        </IonApp>

    );
};
export default Acceuil;