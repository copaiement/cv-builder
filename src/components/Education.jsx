// TO DO:
// Make addExperience and removeExperience generic functions
// Restructure Education Data to look like Experience
// update below functions from Experience to work with Education

import { useState } from "react";
import { InputModule, Buttons } from "./Components";
import { addEducation, removeItem } from "./Data";

// set up experience array
let education = [];
education = addEducation(education);

export function Education() {

  // set state
  const [eduList, setEduList] = useState(education)

  function handleAddEdu() {
    setEduList(addEducation(eduList, eduList.length));
  }

  function handleRemoveEdu(e) {
    let group = parseInt(e.target.id);
    setEduList(removeItem(eduList, group));
  }

  function handleChange(e) {
    console.log(eduList)
    let code = e.target.id;
    console.log(code);
    let group = code.slice(code.indexOf('g') + 1, code.indexOf('i'))
    let id = `${code.slice(code.indexOf('i') + 1)}`;
    let left = eduList.slice(0, group);
    let right = eduList.slice((group + 1));
    setEduList([...left, eduList[group].map(index => {
      if (index.id === id) {
        return { ...index, data: e.target.value }
      } else {
        return index;
      }
    }), ...right])
    console.log(eduList)
  }

  return (
    <div className='Education'>
      {eduList.map((edu, index) => (
        <InputModule
          key={index}
          id={index}
          title={'Education' + index}
          list={edu}
          handleChange={handleChange}
          rmvFxn={handleRemoveEdu}
        />
      ))}
      <Buttons
        add={true}
        addFxn={handleAddEdu}
      />
    </div>
  )
}