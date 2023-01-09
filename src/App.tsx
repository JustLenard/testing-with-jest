import "./App.css"
import Application from "./components/application/Application"
import Counter2 from "./components/counter2/Counter2"
import CounterAplication from "./components/counterAplication/CounterAplication"
import User from "./components/user/User"
import AppProviders from "./providers/AppProviders"

const App = () => {
  return (
    <AppProviders>
      <div className="App">
        <User />
        <Application />
        <CounterAplication />
        <Counter2 count={4} />
      </div>
    </AppProviders>
  )
}

export default App
