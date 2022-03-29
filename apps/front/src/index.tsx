import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './web-vitals'

createRoot(document.getElementById('root')).render(<App />)

if (process.env.NODE_ENV === 'production') {
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below: https://cra.link/PWA
  window.addEventListener('load', async () => {
    if ('serviceWorker' in navigator) {
      await navigator.serviceWorker.register('./service-worker.js')
    } else {
      ;(await import('./service-worker-registration')).register()
    }
  })

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals()
}
