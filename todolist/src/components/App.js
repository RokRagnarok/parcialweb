//import Home from './Home/Home';
import Header from '../shared/layout/Header';
import './App.css';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
//import Todo from './Todo/Todo';
//import Timer from './Pomodoro/Timer';
//import Crypto from './Crypto/Crypto';
//import Charthome from '../Chart/Charthome';
//import Animation from './Animating/Animation';
import Anim from '../Anim/Anim';
//import Numbers from './PureComponents/Numbers'
import Calculator from '../Calculator/Calculator';
function App() {
  return (
    <div className="App">
      <Header title="Header" url="https://github.com/"/>
      <Content >
        <Calculator/>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
