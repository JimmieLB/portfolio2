import './App.css'
import Body from './components/Body';
import Header from './components/Header';
function App() {

  return (
    <>
      <div className='absolute w-[100vw] h-[100vh] bg-neutral z-[-100]'></div>
      <Header/>
      <Body/>
    </>
  )
}

export default App
