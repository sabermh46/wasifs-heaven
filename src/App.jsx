
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import BookList from './components/BookList'
import ProtectedRoute from './components/ProtectedRoute'
import ModalContainer from './components/common/ModalContainer'
import { HomePage } from './components/pages/HomePage'
import BookModal from './components/BookModal'
import FallbackBooksWithModal from './components/BookFallBack'



function App() {

  const location = useLocation()
const state = location.state


  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route element={<MainLayout />}>

          {/* Main view */}
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<FallbackBooksWithModal /> } /> {/* Fallback for direct hit */}

          {/* Protected route example */}
          <Route element={<ProtectedRoute />}>
            {/* <Route path="/admin/*" element={<AdminPage />} /> */}
          </Route>

        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/books/:id" element={
              <ModalContainer>
                <BookModal />
              </ModalContainer>
          } />
        </Routes>
      )}
    </>
  )
}

export default App



