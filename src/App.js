import WelcomeContainerForm from "./components/WelcomeContainer";
import FirstForm from "./components/FirstForm";
import { Component } from "react";
class App extends Component {
  constructor(props){
    super(props)
  }
 
  render(){
    return (
      <div className="App">
      <WelcomeContainerForm />
      </div>
    );
  }
  
}

export default App;
