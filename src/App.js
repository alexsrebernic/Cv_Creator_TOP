
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from './components/Footer'
class App extends Component {
  
  render(){
  return(
    <div id="app">
      <Header/>
      <Body />
      <Footer />
    </div>
  )

  }
}

export default App;
