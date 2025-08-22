import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonButton
} from '@ionic/react';
import "../components/CSS/Home.css";

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="custom-header">
                    <IonTitle className="header-title">Weep</IonTitle>
                    <IonSearchbar className="search-bar" animated={true} placeholder=""></IonSearchbar>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>


            </IonContent>
        </IonPage>
    );
};

export default Home;