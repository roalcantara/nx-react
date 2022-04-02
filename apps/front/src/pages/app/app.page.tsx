import './app.page.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Companies, Company, Phone, NotFound } from '..'

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Companies />} />
      <Route path="/companies/:companyId" element={<Company title="Local Public Office" />} />
      <Route path="/number/:numberId" element={<Phone />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)
