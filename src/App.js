// import logo from './logo.svg';
import './App.css';
import JSONDATA from './data/MOCK_DATA.json'

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search..." />
      {JSONDATA.map((val,key) => {
        return (
          <div className="animal" key={key}>
            <p>{val.Name} </p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
