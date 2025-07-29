import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function BookModal() {
  const location = useLocation()
  const {id} = useParams();
  const navigate = useNavigate()

  // If there's no background page, redirect back to list
  useEffect(() => {
  }, [location])

  return (

      <div className=" p-4 w-[800px]">
        <h2>Book Details # {id}</h2>
      </div>

  )
}
