import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Main } from './pages/Main'
import { About } from './pages/About'
import { Contact } from './pages/Contact';
import { Habit } from './pages/Habit';


export default function App() {

  return (
    <>
      <div className="nav"> 
        <Navbar/>
      </div>
      
      <Routes>
        <Route path='/Habit' element={<Habit />} />
        <Route path='/Main' element={<Main />} />
        <Route path='/*' element={<Main />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  )
}