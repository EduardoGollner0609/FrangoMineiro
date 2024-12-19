import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ClientPage from './routes/ClientPage'
import HomePage from './routes/ClientPage/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientPage />}>
          <Route index element={<HomePage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
