import './App.css'
import User from './assets/components/User.JSX'
import SearchUI from './assets/components/pluggDebounce.jsx'
import Counter from './assets/components/Counter.jsx'

function App() {
  return (
    <>
      <div>
        <h1>Ogges hemsida</h1>
      </div>
      <Counter />
      <User />
      <SearchUI />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
