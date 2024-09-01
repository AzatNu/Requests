import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyChids62lSIlNt-IpuDYgQ5_sNPiooUrj4",
    authDomain: "requester-5c7a3.firebaseapp.com",
    projectId: "requester-5c7a3",
    storageBucket: "requester-5c7a3.appspot.com",
    messagingSenderId: "205470009434",
    appId: "1:205470009434:web:3fa1b5882866a59d897063",
    databaseURL:
        "https://requester-5c7a3-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
