import './app.page.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NotFound } from '..'

export const App = () => (
  <Router>
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)
