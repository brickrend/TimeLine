import "./App.css";
import HomePage from "./Components/home";
import ItemList from "./Components/ItemList";
import { ListWrapper, BackGround } from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <BackGround>
      <HomePage />
      <ListWrapper>
        <ItemList />
      </ListWrapper>
    </BackGround>
  );
}

export default App;
