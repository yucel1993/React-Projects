import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";
import Header from './components/Header';
import Question from './components/Question';

function App() {
  return (
    <div className="App text-center mt-5">
      
      <Header/>
      <Question/> 
    </div>
  );
}

export default App;
