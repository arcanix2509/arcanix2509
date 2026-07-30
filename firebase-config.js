import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhtsh1JAydayb9dNISRNrglIBmz1rd3sE",
  authDomain: "project-x-2bbb3.firebaseapp.com",
  databaseURL: "https://project-x-2bbb3-default-rtdb.firebaseio.com",
  projectId: "project-x-2bbb3",
  storageBucket: "project-x-2bbb3.firebasestorage.app",
  messagingSenderId: "42284285495",
  appId: "1:42284285495:android:1fc63760acc003726a09b2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);

// FCM Notification Token Setup
export async function requestNotificationPermission() {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: 'BOer4hJTUVRZae6gqgNNJ2MvaYyqZk7ieE_Aj3jE3Xg-V-yXWycFHJpMtrSiDLX-_ptUrZJ8rnyKVhpmOPjzCYs'
      });
      console.log('FCM Token Generated:', token);
      return token;
    }
  } catch (err) {
    console.error('Notification Permission Denied:', err);
  }
}