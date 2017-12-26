import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin'
// uncomment to init firebase-admin (manage user, realtime db)
// admin.initializeApp(functions.config().firebase);

// tslint:disable-next-line:no-import-side-effect
import 'dotenv/config'

import authRoutes from './auth'
import apiRoutes from './api-routes'

const express = require('express')
const app = express()

// Automatically allow cross-origin requests
// app.use(require('cors')())

app.use('/auth', authRoutes)
app.use('/', apiRoutes)

// `/api` endpoint
export const api = functions.https.onRequest(app)