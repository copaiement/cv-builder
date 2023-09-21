import { useState } from "react";
import { InputModule, Buttons } from "./Components";
import { experience, addExperience, removeExperience } from "./Data";

export function Experience() {
  const [expList, setExpList] = useState(experience)

  // move function to add a new list here

  // change single InputModule call to a map function

  // move buttons creation to after inputs instead of inside 

  function handleAddExp() {
    addExperience(experience.length);
    setExpList(experience);
  }

  // function handleRemoveExp() {
  //   removeExperience(id);
  //   setExpList(experience);
  // }

  return (
    <div>
      {expList.map((exp, index) => (
        <InputModule
          key={index} 
          title='Experience'
          list={exp}
          //removeFxn={handleRemoveExp(index)}
        />
      ))}
      <Buttons 
        add={true}
        addFxn={handleAddExp}
      />
    </div>
  )
}