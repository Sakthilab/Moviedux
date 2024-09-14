import logo from './logo.svg';
import './App.css';
import './styles.css'
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import MoviesGrid from './componenets/MoviesGrid';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <MoviesGrid></MoviesGrid>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
