import React, {useEffect, useRef, useState} from 'react';
//import './Sign.css';
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
import {logIn, logoFacebook, refreshOutline} from "ionicons/icons";
import {insertclient, login} from "../hooks/useData";
import {useHistory} from "react-router";

const Sign: React.FC = () => {
    const [donne,setDonne]=useState<string>()
    const nomInputRef = useRef<HTMLIonInputElement>(null);
    const passwordInputRef = useRef<HTMLIonInputElement>(null);
    const history = useHistory();
    const insertuser = () => {
        const enteredName : any = nomInputRef.current!.value
        const enteredPassword :any = passwordInputRef.current!.value
        if ((enteredName=="")||(enteredPassword=="")){
            setDonne("veuillez remplir tout les cases")
        }
        else {
            insertclient(enteredName,enteredPassword)
            history.push("/login")
        }
    };
    const resetInputs = () => {
        nomInputRef.current!.value="";
        passwordInputRef.current!.value="";
    };
    return(
        <IonApp>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign</IonTitle>
                </IonToolbar>

            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">your name</IonLabel>
                                <IonInput ref={nomInputRef}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">your password</IonLabel>
                                <IonInput type="password" ref={passwordInputRef}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-left">
                            <IonButton onClick={insertuser}>
                                <IonIcon slot="start" icon={logIn}/>
                                logIn
                            </IonButton>
                        </IonCol>
                        <IonCol className="ion-text-right">
                            <IonButton onClick={resetInputs}>
                                <IonIcon slot="start" icon={refreshOutline}/>
                                refresh
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
export default Sign;