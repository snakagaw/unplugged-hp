import * as functions from 'firebase-functions'
import * as express from 'express'
const basicAuth = require('basic-auth-connect')

const app = express()

app.use(basicAuth('kiuchi', 'mickey'))

app.use(express.static(__dirname + '/../dist/'))

export const basic = functions.https.onRequest(app)
