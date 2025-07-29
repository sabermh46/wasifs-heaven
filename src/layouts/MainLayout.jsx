import { Outlet, useLocation } from 'react-router-dom'
import ModalContainer from '../components/common/ModalContainer'

export default function MainLayout() {
  const location = useLocation()
  const backgroundLocation = location.state && location.state.backgroundLocation

  return (
    <>
      <Outlet />
      {backgroundLocation && <ModalContainer />}
    </>
  )
}
