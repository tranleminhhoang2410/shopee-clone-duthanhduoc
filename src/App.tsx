import useRoutesElement from './hooks/useRoutesElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElement = useRoutesElement()

  return (
    <div>
      {routeElement}
      <ToastContainer />
    </div>
  )
}

export default App
