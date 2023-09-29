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
    setExpList(addExperience(expList, expList.length));
  }

  function handleRemoveExp(e) {
    let group = parseInt(e.target.id);
    setExpList(removeExperience(expList, group));
  }

  function handleChange(e) {
    console.log(expList)
    let code = e.target.id;
    console.log(code);
    let group = code.slice(code.indexOf('g') + 1, code.indexOf('i'))
    let id = `${code.slice(code.indexOf('i') + 1)}`;
    let left = expList.slice(0, group);
    let right = expList.slice((group + 1));
    setExpList([...left, expList[group].map(index => {
      if (index.id === id) {
        return { ...index, data: e.target.value }
      } else {
        return index;
      }
    }), ...right])
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