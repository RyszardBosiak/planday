import ListItems from "./ListItems/ListItems";
import Search from "./Search/Search"
import { useState } from "react";
import "./App.scss";

function App() {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState("");

  let inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setMessage(e.target.value);
      setInputText(lowerCase);
  }

  let buttonHandler = () => {
    setInputText("");
    setMessage("");
  }

  return (
    <div className="App">
      <nav>
          <Search 
            inputHandler={inputHandler} 
            buttonHandler={buttonHandler}
            message={message}
          />
      </nav>
      <div className="container">
        <ListItems input={inputText}/>
      </div>
    </div>
  );
}

export default App;
