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
    let newExp = addExperience(expList, expList.length);
    setExpList(newExp);
    console.log(newExp)
  }

  function handleRemoveExp(e) {
    let group = parseInt(e.target.id);
    let newExp = removeExperience(expList, group);
    setExpList(newExp);
    console.log(newExp);
  }

  function handleChange(e) {
    console.log(expList)
    let code = e.target.id;
    let group = code.slice(code.indexOf('g') + 1, code.indexOf('i'))
    let id = `${code.slice(code.indexOf('i') + 1)}`;
    setExpList(...expList, expList[group].map(index => {
      if (index.id === id) {
        console.log('HII')
        return { ...index, data: e.target.value }
      } else {
        console.log('yooo')
        return index;
      }
    }))
    console.log(expList)
  }

  return (
    <div className='Experience'>
      {expList.map((exp, index) => (
        <InputModule
          key={index}
          id={index}
          title={'Experience' + index}
          list={exp}
          handleChange={handleChange}
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