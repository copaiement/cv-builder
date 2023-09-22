import { useState } from "react";
import { InputModule, Buttons } from "./Components";
import { experience, addExperience, removeExperience } from "./Data";
import { generateKey } from "./KeyGen";


export function Experience() {
  const [expList, setExpList] = useState(experience)

  // move function to add a new list here
  // Create Experience array

  // change single InputModule call to a map function

  // move buttons creation to after inputs instead of inside 

  function handleAddExp() {
    addExperience(experience.length);
    setExpList(experience);
    console.log(experience)
  }

  function handleRemoveExp(exp) {
    let newExp = removeExperience(exp);
    setExpList(newExp);
  }

  return (
    <div className='Experience'>
      {expList.map((exp) => (
        <InputModule
          key={generateKey}
          title='Experience'
          list={exp}
          rmvFxn={handleRemoveExp}
        />
      ))}
      <Buttons 
        add={true}
        addFxn={handleAddExp}
      />
    </div>
  )
}