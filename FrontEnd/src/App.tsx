import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ClientPage from './routes/ClientPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientPage />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
