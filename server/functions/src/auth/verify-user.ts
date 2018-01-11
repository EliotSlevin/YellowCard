import fetch from 'node-fetch'
const { API_KEY } = process.env;

const verifyUserUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`


export const verifyUser = (req, res) => {
  if (!req.body.email) return res.status(400).json({ error: 'missing email' })
  if (!req.body.password) return res.status(400).json({ error: 'missing password' })

  return fetch(verifyUserUrl,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: req.body.email,
        password: req.body.password,
        returnSecureToken: true
      })
    })
    .then((apiRes) => apiRes.json())
    .then((apiResBody) => {
      if (apiResBody.error) throw apiResBody.error
      const uid = apiResBody.localId
      const authIdToken = apiResBody.idToken
      const authRefreshToken = apiResBody.refreshToken

      return Promise.resolve({ uid, authIdToken, authRefreshToken })
    })
}

const router = require('express').Router()


router.post('/', (req, res) => {
  return verifyUser(req, res)
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})

export default router