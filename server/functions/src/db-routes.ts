import * as firebase from 'firebase'
import 'firebase/firestore'

const {
  API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET_URL,
  PROJECT_ID, MESSAGING_SENDER_ID
} = process.env;

const router = require('express').Router()

function getKeyedCollection(collectionId: string) {
  return firebase.firestore().collection(collectionId).get()
    .then((querySnapshot) => {
      const collection = {}
      querySnapshot.forEach((doc) => {
        collection[doc.id] = doc.data()
      })

      return collection
    })
}

function getKeyedEntity(collectionId: string, entityId: string) {
  return firebase.firestore().collection(collectionId).doc(entityId)
    .get()
    .then((doc) => {
      if (!doc.exists) throw { error: `/${collectionId}/${entityId} does not exist` }

      return { [doc.id]: doc.data() }
    })

}

router.get('/medications', (req, res) => {
  getKeyedCollection('medications')
    .then((medications) => res.json(medications))
    .catch((err) => {
      console.log(err)
      res.status(500).json('Unable to retrieve /medications')
    })
})

router.get('/medications/:id', (req, res) => {
  const id = req.params.id
  getKeyedEntity('medications', id)
    .then((medications) => res.json(medications))
    .catch((err) => {
      console.log(err)
      res.status(500).json(`Unable to retrieve /medications/${id}`)
    })
})

router.get('/users/:id', (req, res) => {
  const id = req.params.id
  console.log('users/id', id)
  getKeyedEntity('users', id)
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err)
      res.status(500).json(`Unable to retrieve /users/${id}`)
    })
})

export default router

