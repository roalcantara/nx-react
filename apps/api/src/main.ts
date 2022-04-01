import { api } from './app/api'

const HOST = process.env.HOST || 'localhost'
const PORT = Number(process.env.port) || 3000

api(HOST, PORT).listen(PORT, () => console.log(`Listening on ${HOST}:${PORT}`))
