import React, {useRef, useState} from "react";
import {
  IonApp, IonButton, IonCard, IonCardContent,
  IonCol,
  IonContent, IonDatetime,
  IonGrid,
  IonHeader, IonIcon, IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import {logIn, refreshOutline} from "ionicons/icons";
import {insertProduit} from "../hooks/useData";

const InsererProduit: React.FC = () => {
  const nomproduit=useRef<HTMLIonInputElement>(null);
  const [image,setImage]=useState<string>("");
  const [res,setRes]=useState<string[]>([]);
  // const resetInputs = () => {
  //   idproduitInputRef.current!.value="";
  //   montantDeBaseInputRef.current!.value="";
  // };
  const handleImage = (e:any) => {
    const file=e.target.files;
    const gmi:string[]=[];
    for (let i = 0; i < file.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(file[i]);
      reader.onload =()=>{
        const uri=reader.result as string;
        setImage(uri);
        gmi[i]=uri;
      };
    };
    setRes(gmi)
  }
  const handleNom = (e:any) => {
  }
  const handleSubmit = () => {
    const enteredidproduit : any = nomproduit.current!.value
    // console.log(enteredidproduit)
    // console.log(res[0]);
    const t=res[0].replace("/","_");
    console.log(t)
    insertProduit(enteredidproduit.toString(),t)
    window.location.href="ajoutenchere"
  }
  return(
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>AjoutEnchere</IonTitle>
          </IonToolbar>

        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Nom produit</IonLabel>
                  <IonInput ref={nomproduit}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  {/*<IonLabel position="floating">Image</IonLabel>*/}
                  <input multiple type="file" onChange={handleImage} />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-left">
                <IonButton onClick={handleSubmit}>
                  <IonIcon slot="start" icon={logIn}/>
                  Ajouter produit
                </IonButton>
              </IonCol>
              <IonCol className="ion-text-right">
                {/*<IonButton onClick={resetInputs}>*/}
                {/*  <IonIcon slot="start" icon={refreshOutline}/>*/}
                {/*  refresh*/}
                {/*</IonButton>*/}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
              </IonCol>
            </IonRow>
          </IonGrid>

        </IonContent>
      </IonApp>

  );
}
export default InsererProduit;