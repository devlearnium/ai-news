importScripts('https://gstatic.com');
importScripts('https://gstatic.com');

firebase.initializeApp({
  apiKey: "AIzaSyDm510z18AorLRljFsSeNO4YNPwf2n27g8",
  authDomain: "://firebaseapp.com",
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
    data: { url: payload.data?.url || 'https://github.io' }
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
