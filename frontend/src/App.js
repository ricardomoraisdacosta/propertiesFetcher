import classes from "./App.module.css";
import PropertyList from "./components/PropertyList/PropertyList";

function App() {
  return (
    <div className={classes.App}>
      <PropertyList />
    </div>
  );
}

export default App;
