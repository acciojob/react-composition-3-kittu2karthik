
import Tooltip from "./Tooltip";
import './../styles/App.css';

const App = () => {
  return (
    <div className='App'>
      <Tooltip text="This is an amazing feature!">
        <p>Hover over me</p>
      </Tooltip>

      <Tooltip text="I am a tooltip for this button">
        <p>Hover here me to see another tooltip</p>
      </Tooltip>
    </div>
  )
}

export default App
