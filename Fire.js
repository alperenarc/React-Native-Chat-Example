
import firebase from 'firebase'

class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.lenght) {
            firebase.initializeApp({
                apiKey: "AIzaSyA4U5tA035NFi5B2L6NPvKzGvRFN7PIayg",
                authDomain: "socialchat-4572b.firebaseapp.com",
                databaseURL: "https://socialchat-4572b.firebaseio.com",
                projectId: "socialchat-4572b",
                storageBucket: "socialchat-4572b.appspot.com",
                messagingSenderId: "1064791156702",
                appId: "1:1064791156702:web:1d7425a5f86f560063df4f"
            })
        }
    }

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously()
            }
        })
    }

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this.db.push(message)
        });
    }

    parse = message => {
        const { user, text, timestamp } = message.val()
        const { key: _id } = message
        const createdAt = new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)))
    }
    off() {
        this.db.off()
    }
    get db() {
        return firebase.database().ref("messages")
    }
    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }


}

export default new Fire()