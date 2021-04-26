// import logo from './logo.svg';
import './App.css';
import JSONDATA from './data/MOCK_DATA.json'
import {useState} from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
      <input type="text" 
             placeholder="Search..." 
             onChange={event => {
                setSearchTerm(event.target.value)
          }}
          />

      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val
        } else if 
          (val.Name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return val
        }
      
      }).map((val,key) => {
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
