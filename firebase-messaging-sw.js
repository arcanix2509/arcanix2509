importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBhtsh1JAydayb9dNISRNrglIBmz1rd3sE",
  projectId: "project-x-2bbb3",
  messagingSenderId: "42284285495",
  appId: "1:42284285495:android:1fc63760acc003726a09b2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/avatar-placeholder.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});