// import logo from './logo.svg';
import './App.css';
import JSONDATA from './data/MOCK_DATA.json'
import {useState} from 'react';
// can I turn search engine to a to do application
import {
  AppDiv,
  AppInput,
  AppPara
} from '../styledComponent/AppStyled';

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <AppDiv>
      <AppInput type="text" 
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
            <AppPara>{val.Name} </AppPara>
          </div>
        )
      })}
    </AppDiv>
  );
}

export default App;
