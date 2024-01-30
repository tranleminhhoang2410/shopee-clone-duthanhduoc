import { useContext, useEffect } from 'react'
import useRoutesElement from './hooks/useRoutesElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LocalStorageEventTarget } from './utils/auth'
import { AppContext } from './contexts/app.context'

function App() {
  const routeElement = useRoutesElement()
  const { reset } = useContext(AppContext)

  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])

  return (
    <div>
      {routeElement}
      <ToastContainer />
    </div>
  )
}

export default App
