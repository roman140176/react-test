import { Routes,Route } from "react-router-dom"
import { Home } from './pages/Home';
import { Favourites } from './pages/Favourutes';
import { DefaultLayout } from "./layouts/default";
import { ErrorPageLayout } from './layouts/ErrorPageLayout';
import { NotFound } from "./pages/NotFound";

function App() {
  
  return (
    <>      
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route path="/" element={<Home/>}/>        
          <Route path="/favourites" element={<Favourites/>}/>      
        </Route>  
        <Route path="*" element={<ErrorPageLayout/>}>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
