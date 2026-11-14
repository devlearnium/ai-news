importScripts('https://gstatic.com');
importScripts('https://gstatic.com');

firebase.initializeApp({
  apiKey: "AIzaSyDm510z18AorLRljFsSeNO4YNPwf2n27g8",
  authDomain: "ai-news-pwa.firebaseapp.com",
  projectId: "ai-news-pwa",
  storageBucket: "ai-news-pwa.firebasestorage.app",
  messagingSenderId: "274551981454",
  appId: "1:274551981454:web:1cfeec8be3432cfd85d0df",
  measurementId: "G-3Y8RQLPLCF"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: 'https://flaticon.com',
    data: { url: payload.data?.url || '/ai-news/' }
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
