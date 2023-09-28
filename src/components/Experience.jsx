import { useState } from "react";
import { InputModule, Buttons } from "./Components";
import { addExperience, removeExperience } from "./Data";

// set up experience array
let experience = [];
experience = addExperience(experience);

export function Experience() {

  // set state
  const [expList, setExpList] = useState(experience)

  function handleAddExp() {
    let newExp = addExperience(expList);
    setExpList(newExp);
    console.log(newExp)
  }

  function handleRemoveExp(event) {
    let group = parseInt(event.target.id);
    let newExp = removeExperience(expList, group);
    setExpList(newExp);
    console.log(newExp);
  }

  return (
    <div className='Experience'>
      {expList.map((exp, index) => (
        <InputModule
          key={index}
          id={index}
          title={'Experience' + index}
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