import * as firebase from 'firebase'
import 'firebase/firestore'

const {
  API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET_URL,
  PROJECT_ID, MESSAGING_SENDER_ID
} = process.env;

const router = require('express').Router()

router.get('/medications', (req, res) => {
  firebase.firestore().collection('medications').get()
    .then((querySnapshot) => {
      const medications = {}
      querySnapshot.forEach((doc) => {
        medications[doc.id] = doc.data()
      })

      res.json(medications)
    })
    .catch((err) => console.log(err))
})

export default router

