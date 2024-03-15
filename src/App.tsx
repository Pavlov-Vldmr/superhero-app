import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/home-page'
import { SearchPage } from './pages/search-page'
import { HistoryPage } from './pages/history-page'
import { FavoritesPage } from './pages/favorites-page'
import { SignupPage } from './pages/sign-up-page'
import { SigninPage } from './pages/sign-in-page'
import { ProductPage } from './pages/product-page'
import { NotFoundPage } from './pages/not-found-page'

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
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App