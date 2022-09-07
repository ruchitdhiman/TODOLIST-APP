
import './App.css';

import {useState} from "react";
import List from './List';
function App(){
const [currentItem , setCurrentItem] = useState(null);
const[itemList , updateItemList] = useState([]);
const onChangeHandler = e =>{
  setCurrentItem(e.target.value);
  

};
const addItemToList=()=>{
  updateItemList ([...itemList,{item : currentItem , key :Date.now()}]);
  setCurrentItem("");

};

  return (
    <div className="App">
      <header className="App-header" >
        <h1> TO DO LIST</h1>
        <div className="wrapper">
          <div className="input-wrapper">
          <input placeholder='add task' value={currentItem} onChange={onChangeHandler}/>
          <button onClick={addItemToList}> +</button>
          
          
          </div>
          <List itemList = {itemList} updateItemList ={updateItemList}/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
