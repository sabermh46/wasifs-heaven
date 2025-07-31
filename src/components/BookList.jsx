import { useNavigate, useLocation } from 'react-router-dom'
import { motherWrapper } from '../utils/tailcss'

export default function BookList() {
  const navigate = useNavigate()
  const location = useLocation()

  const openModal = (id) => {
    navigate(`/books/${id}`, { state: { backgroundLocation: location } })
  }

  return (
    <div className={`${motherWrapper} p-6`}>
      <h1 className="text-2xl mb-4">Book List</h1>
      <ul className="space-y-2">
        {[101, 102, 103].map((id) => (
          <li
            key={id}
            className="cursor-pointer text-blue-500 underline"
            onClick={() => openModal(id)}
          >
            Open Book #{id}
          </li>
        ))}
      </ul>
    </div>
  )
}

