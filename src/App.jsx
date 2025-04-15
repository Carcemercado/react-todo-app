import reactLogo from './assets/react.svg'
import './App.css'
import CardToDisplay from './components/CardToDisplay'
function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Todo List App with React</h1>
      <CardToDisplay />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
