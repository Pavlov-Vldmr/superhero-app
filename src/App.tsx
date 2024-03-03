import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { SearchPage } from './pages/SearchPage'
import { HistoryPage } from './pages/HistoryPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { SignupPage } from './pages/SignupPage'
import { SigninPage } from './pages/SigninPage'
import { ProductPage } from './pages/ProductPage'


import './App.css'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />

          <Route path="/search" element={<SearchPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />


        </Routes>
      </Router>
    </>
  )
}

export default App