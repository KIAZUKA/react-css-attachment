import {CssModules}from "./components/CssModules"
import {InlineStyle} from "./components/InlineStyle";
import {StyledJsx} from "./components/styledJsx";
import {StyledComponents} from"./components/StyledComponets";
import {Emotion} from "./components/Emotion";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules/>
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
