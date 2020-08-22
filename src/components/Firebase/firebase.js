import app from 'firebase/app';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDi5A1RU_KyfSAsx_A2etFRW1ZGmayHqhw",
    authDomain: "help-panic-hack.firebaseapp.com",
    databaseURL: "https://help-panic-hack.firebaseio.com",
    projectId: "help-panic-hack",
    storageBucket: "help-panic-hack.appspot.com",
    messagingSenderId: "490228102535",
    appId: "1:490228102535:web:fd2741f8def872d91d0f22",
    measurementId: "G-QV4KCQC86E"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();


    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;