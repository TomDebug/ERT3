
    importScripts(
      'https://www.gstatic.com/firebasejs/9.8.1/firebase-app-compat.js'
    )
    importScripts(
      'https://www.gstatic.com/firebasejs/9.8.1/firebase-messaging-compat.js'
    )
    firebase.initializeApp({"apiKey":"AIzaSyDZqnMcSbykovZWgNQ-yO2Z4LfWgsWv7Ao","authDomain":"licences-4c645.firebaseapp.com","projectId":"licences-4c645","storageBucket":"licences-4c645.appspot.com","messagingSenderId":"557120582012","appId":"1:557120582012:web:3154075c52042ef00a34f9","measurementId":"G-QJNHLTT6EE"})

    // Retrieve an instance of Firebase Messaging so that it can handle background
    // messages.
    const messaging = firebase.messaging()

    // Setup event listeners for actions provided in the config:
    self.addEventListener('notificationclick', function(e) {
      const actions = [{"action":"goToLupasGithub","url":"https:\u002F\u002Fgithub.com\u002Flupas"},{"action":"goToModuleGithub","url":"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Ffirebase-module"}]
      const action = actions.find(x => x.action === e.action)
      const notification = e.notification

      if (!action) return

      if (action.url) {
        clients.openWindow(action.url)
        notification.close()
      }
    })

    