import {
    IonCard, IonCardContent,
    IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonItem, IonNav, IonNavLink,
    IonPage,
    IonRow,
    IonSearchbar, IonSegmentButton, IonSplitPane,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {Fragment, useEffect, useState} from "react";
import {inspect} from "util";
import '../theme/variables.css'

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className='title'><strong>Login or sign in</strong></IonTitle>
                    {/*<IonSegmentButton>Login</IonSegmentButton>*/}
                    {/*<IonSegmentButton>Sign in</IonSegmentButton>*/}
                </IonToolbar>
                <IonSplitPane></IonSplitPane>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <div className='col col-sm'>
                                    <p><a href="/login" className="btn btn-primary">Log In</a></p>
                                    <p><a href="/sign" className='btn btn-primary'>Sign In</a></p>
                                </div>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            {/*<IonContent fullscreen>*/}
            {/*    <IonHeader collapse="condense">*/}
            {/*    </IonHeader>*/}
            {/*    /!*<ExploreContainer />*!/*/}
            {/*</IonContent>*/}
        </IonPage>
    );
};
//
// const Home: React.FC = () => {
//
//     return (
//         <Fragment>
//         <p>test</p>
//         <div>
//         </div>
//         </Fragment>
//     );
// }

export default Home;
