import { verifyUser } from './auth'
const { API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET_URL, MESSAGING_SENDER_ID } = process.env;

const router = require('express').Router()

const getInitData = (req, res) => {
  return verifyUser(req, res)
    .then(() => {
      const resData = { API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET_URL, MESSAGING_SENDER_ID }
      return res.status(200).json(resData)
    })
    .catch((err) => {
      console.error('err', err)
      res.status(500).json({ error: err });
    })
}



router.post('/', (req, res) => {
  return getInitData(req, res)
})

export default router
