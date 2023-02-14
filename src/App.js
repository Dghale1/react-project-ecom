import './App.css';
import Login from './pages/Login'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Login />
      <Header />
      <main>
        <h1>This is our home</h1>
      </main>
      <Footer />

    </div>
  );
}

export default App;
