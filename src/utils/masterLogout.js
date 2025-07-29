
import { clearAdmin } from '../redux/user/admin'
import { clearCustomer } from '../redux/user/customer'
import { persistor } from '../store/store'

export const masterLogout = (dispatch, navigate) => {
  dispatch(clearCustomer())
  dispatch(clearAdmin())
  persistor.purge().then(() => {
    navigate('/')
  })
}
