import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Test from './Pages/Test'
import SelectTest from './Pages/SelectTest'
import Result from './Pages/Result'

const App = () => {
  return (
    <>
  <BrowserRouter>

  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/select" element={<SelectTest />} />
  <Route path="/test/:id" element={<Test />} />
  <Route path="/result" element={<Result />} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
