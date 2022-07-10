import { Routes, Route } from 'solid-app-router'
import AddButton from './pages/AddButton'

function App () {

  return (
    <>
      <Routes>
        <Route path="/buttons/add" component={AddButton}/>
      </Routes>
    </>
  )
}

export default App
