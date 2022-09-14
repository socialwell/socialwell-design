import { Badge } from "./components";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Badge variant="solid" label="solid" />
        <Badge variant="outline" label="outline" />
        <Badge variant="subtle" label="subtle" />
      </div>
    </div>
  );
}

export default App;
