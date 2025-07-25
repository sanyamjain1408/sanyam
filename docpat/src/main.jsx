import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from "./App.jsx"
import Home from "./components/Home/Home.jsx"
import './index.css'

import Breastfeeding from './components/Pages/Breastfeeding/Breastfeeding.jsx'
import  Cardiologist from "./components/Pages/Cardiologist/Cardiologist.jsx"
import Pediatrics from "./components/Pages/Pediatrics/Pediatrics.jsx"
import Dentistry from "./components/Pages/Dentistry/Dentistry.jsx"
import Diabetologist from "./components/Pages/Diabetologist/Diabetologist.jsx"
import Diabeties from "./components/Pages/Diabeties/Diabeties.jsx"
import Endocrinology from "./components/Pages/Endocrinology/Endocrinology.jsx"
import ENT from "./components/Pages/ENT/ENT.jsx"
import Gustroenterologist from "./components/Pages/Gustroenterologist/Gustroenterologist.jsx"
import Gynecologist from "./components/Pages/Gynecologist/Gynecologist.jsx"
import Infertility from "./components/Pages/Infertility/Infertility.jsx"
import Breathing from "./components/Pages/Breathing/Breathing.jsx"
import Kidney from "./components/Pages/Kidney/Kidney.jsx"
import Labreport from "./components/Pages/Labreport/Labreport.jsx"
import Liver from "./components/Pages/Liver/Liver.jsx"
import Neurologist from "./components/Pages/Neurologist/Neurologist.jsx"
import Oncologist from "./components/Pages/Oncologist/Oncologist.jsx"
import Ophthalmology from "./components/Pages/Ophthalmology/Ophthalmology.jsx"
import Orthopedics from "./components/Pages/Orthopedics/Orthopedics.jsx"
import Physician from "./components/Pages/Physician/Physician.jsx"
import Pregneancy from "./components/Pages/Pregneancy/Pregneancy.jsx"
import Psychiatrist from "./components/Pages/Psychiatrist/Psychiatrist.jsx"
import Sexologist from "./components/Pages/Sexologist/Sexologist.jsx"
import Stress from "./components/Pages/Stress/Stress.jsx"
import Surgery from "./components/Pages/Surgery/Surgery.jsx"
import Weight from "./components/Pages/Weight/Weight.jsx"
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Profile from './components/Pages/Profile/Profile.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/breastfeeding' element={<Breastfeeding/>}/>
      <Route path='/cardiologist' element={<Cardiologist/>}/>
      <Route path='/pediatrics' element={<Pediatrics/>}/>
      <Route path='/dentistry' element={<Dentistry/>}/>
      <Route path='/diabetologist' element={<Diabetologist/>}/>
      <Route path='/diabeties' element={<Diabeties/>}/>
      <Route path='/endocrinology' element={<Endocrinology/>}/>
      <Route path='/ent' element={<ENT/>}/>
      <Route path='/gusto' element={<Gustroenterologist/>}/>
      <Route path='/gyno' element={<Gynecologist/>}/>
      <Route path='/infertility' element={<Infertility/>}/>
      <Route path='/lungs' element={<Breathing/>}/>
      <Route path='/kidney' element={<Kidney/>}/>
      <Route path='/labreport' element={<Labreport/>}/>
      <Route path='/liver' element={<Liver/>}/>
      <Route path='/neuro' element={<Neurologist/>}/>
      <Route path='/oncologist' element={<Oncologist/>}/>
      <Route path='/optp' element={<Ophthalmology/>}/>
      <Route path='/ortho' element={<Orthopedics/>}/>
      <Route path='/physician' element={<Physician/>}/>
      <Route path='/pregnancy' element={<Pregneancy/>}/>
      <Route path='/psychiarist' element={<Psychiatrist/>}/>
      <Route path='/sexo' element={<Sexologist/>}/>
      <Route path='/stress' element={<Stress/>}/>
      <Route path='/surgery' element={<Surgery/>}/>
      <Route path='/weight' element={<Weight/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/profile' element={<Profile/>}/>      
       
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
