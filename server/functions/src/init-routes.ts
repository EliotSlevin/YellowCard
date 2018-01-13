import * as firebase from 'firebase'
import 'firebase/firestore'

import { verifyUser } from './auth'
const {
  API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET_URL,
  PROJECT_ID, MESSAGING_SENDER_ID
} = process.env;

const client = firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  storageBucket: STORAGE_BUCKET_URL,
  projectId: PROJECT_ID,
  messagingSenderId: MESSAGING_SENDER_ID
})

const router = require('express').Router()

const getInitData = (req, res) => {
  return verifyUser(req, res)
    .then(() => {
      const resData = { API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET_URL, PROJECT_ID, MESSAGING_SENDER_ID }
      res.status(200).json(resData)
    })
    .catch((err) => {
      console.error('err', err)
      res.status(500).json({ error: err });
    })
}



router.post('/', (req, res) => getInitData(req, res))

export default router
