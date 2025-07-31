import { Outlet, useLocation } from 'react-router-dom'
import ModalContainer from '../components/common/ModalContainer'
import { NavBar } from '../components/common/NavBar'
import { Footer } from '../components/common/Footer'

export default function MainLayout() {
  const location = useLocation()
  const backgroundLocation = location.state && location.state.backgroundLocation

  return (
    <>
      <NavBar />
      <Outlet />
      {backgroundLocation && <ModalContainer />}
      <Footer />
    </>
  )
}
