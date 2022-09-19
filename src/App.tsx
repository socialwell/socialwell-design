import { useState } from "react";
import { Badge, FormControl } from "./components";

function App() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("1");
  const [bio, setBio] = useState("");

  return (
    <div className="App">
      <div className="card">
        <Badge variant="solid" label="solid" />
        <Badge variant="outline" label="outline" />
        <Badge variant="subtle" label="subtle" />
      </div>
      <div className="card">
        <FormControl
          type="text"
          label="first name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormControl
          type="select"
          label="gender"
          size="sm"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select</option>
          <option value="1">one</option>
        </FormControl>

        <FormControl
          type="textarea"
          label="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
