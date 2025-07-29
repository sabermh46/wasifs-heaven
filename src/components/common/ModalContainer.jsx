import { useNavigate, useLocation } from 'react-router-dom'

export default function ModalContainer({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClose = () => {
    if (location.state?.backgroundLocation) {
      navigate(-1)
    } else {
      // fallback: remove last segment of pathname
      const parts = location.pathname.split('/').filter(Boolean)
      parts.pop() // remove the modal segment
      const fallbackPath = '/' + parts.join('/')
      navigate(fallbackPath || '/', { replace: true })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center">
      <div className="bg-card p-6 rounded-lg shadow-xl max-w-[700px] w-[calc(100%-40px)] relative overflow-x-clip overflow-y-auto">
        <button
            onClick={handleClose}
            className="absolute top-4 z-50 right-4 text-sm text-gray-500 hover:text-white bg-background aspect-square w-6 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-background/30 cursor-pointer"
          >
            ✕
        </button>

        {/* Modal Body */}
        {children}
      </div>
    </div>
  )
}
