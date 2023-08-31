import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Spin } from 'antd'
import './App.css';


const MainPage = lazy(() => import('./pages/MainPage'))
const GamePage = lazy(() => import('./pages/GamePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Suspense fallback={<Spin/>}><MainPage/></Suspense>}/>
      {/* <Route path="/" element={<Suspense fallback={<Spin/>}><GamesList/></Suspense>}/> */}
      <Route path="/game/:gameId" element={<Suspense fallback={<Spin/>}><GamePage/></Suspense>}/>
      <Route path="*" element={<Suspense fallback={<Spin/>}><NotFoundPage /></Suspense>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
