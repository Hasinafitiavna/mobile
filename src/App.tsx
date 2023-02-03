import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from "./pages/Login";
import Acceuil from "./pages/Acceuil";
import Sign from "./pages/Sign";
import AjoutEnchere from "./pages/AjoutEnchere";
import RechargementCompte from "./pages/RechargementCompte";
import InsererProduit from "./pages/InsererProduit";
import Liste from "./pages/Liste";
import EnchereListe from "./pages/EnchereListe";
import React from "react";

setupIonicReact();

function Signin() {
  return null;
}

function AcceuilClient() {
  return null;
}

function Rechargement() {
  return null;
}

function ListeEnchere() {
  return null;
}

setupIonicReact();

const App: React.FC = () => {
  // const appId = "e86de578-09f1-4613-aa95-379bf814ff34";
  // const OneSignalInit = () => {
  //   OneSignal.setAppId(appId)
  //   OneSignal.setNotificationOpenedHandler(
  //       function (jsonData) {
  //         console.log("This is the Notification:\n" + JSON.stringify(jsonData));
  //       }
  //   );
  // }
  //OneSignalInit();

  return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home/>
            </Route>
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
            <Route exact path="/acceuil">
              <Acceuil/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/sign">
              <Sign/>
            </Route>
            <Route exact path="/acceuilclient">
              <Acceuil/>
            </Route>
            <Route exact path="/ajoutenchere">
              <AjoutEnchere/>
            </Route>
            <Route exact path="/rechargement">
              <RechargementCompte/>
            </Route>
            <Route exact path="/insertionProduit">
              <InsererProduit/>
            </Route>
            <Route exact path="/liste">
              <Liste/>
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
  )
}
export default App;