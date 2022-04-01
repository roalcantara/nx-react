import admin from 'firebase-admin'
import { https } from 'firebase-functions'
import { api as app } from './app/api'

admin.initializeApp()

export const api = https.onRequest(app())
