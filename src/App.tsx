import useRoutesElement from './hooks/useRoutesElement'

function App() {
  const routeElement = useRoutesElement()

  return <div>{routeElement}</div>
}

export default App
