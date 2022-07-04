import React, { useState } from "react";
import "../css/Form.css";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const Form = ({ people, setPeople }: IProps) => {
  const [inputData, setInputData] = useState({ name: "", age: "", bio: "" });

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setPeople([
      ...people,
      {
        name: inputData.name,
        age: Number(inputData.age),
        bio: inputData.bio,
      },
    ]);
    setInputData({ name: "", age: "", bio: "" });
  };

  return (
    <div className="form-container">
      <h1>Form</h1>
      <form action="submit" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={inputData.name}
          onChange={onChange}
        />
        <input
          type="number"
          name="age"
          id="age"
          placeholder="age"
          value={inputData.age}
          onChange={onChange}
        />
        <textarea
          name="bio"
          id="bio"
          placeholder="Bio description"
          value={inputData.bio}
          onChange={onChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
