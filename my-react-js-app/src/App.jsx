
import './App.css'
import './index.css'
import Footer from './components/Layout/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Stats" element={<Stats/>}/>
        {/* 🧭 404 Catch-All Route */}
          <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/> 
    </BrowserRouter>
     
    
    </>
  )
}

export default App
