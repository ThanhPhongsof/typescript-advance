import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
import { useState } from "react";

export interface IState {
  people: {
    name: string;
    age: number;
    bio: string;
  }[];
}

const App = () => {
  const [people, setPeople] = useState<IState["people"]>([
    { name: "Phong Tran", age: 25, bio: "Badminton Player" },
  ]);

  return (
    <div className="container">
      <Form people={people} setPeople={setPeople} />
      <List people={people} />
    </div>
  );
};

export default App;
