import logo from "./logo.svg";
import "./App.css";
import PhoneNumberValidation from "./components/PhoneNumberValidation";
import CountryStateCity from "./components/CountryStateCity";

function App() {
  return (
    <div className="App">
      <h1>PhoneNumberValidation</h1>
      <PhoneNumberValidation />
      <h2>ControyStateCity</h2>
      <CountryStateCity />
    </div>
  );
}

export default App;
