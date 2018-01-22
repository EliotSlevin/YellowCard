import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp(functions.config().firebase)

// tslint:disable-next-line:no-import-side-effect
import 'dotenv/config'
import initRoutes from './init-routes'
import { validateTokenMiddleware } from './auth'

const cookieParser = require('cookie-parser')()
const app = require('express')()

// Automatically allow cross-origin requests
// app.use(require('cors')({ origin: true }))

app.use('/init', initRoutes)
app.use(cookieParser);
app.use(validateTokenMiddleware); // all routes below secured


// `/api` endpoint
export const api = functions.https.onRequest(app)