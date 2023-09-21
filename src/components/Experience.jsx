import { useState } from "react";
import { InputModule } from "./Components";
import { experience, addExperience } from "./Data";


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

  // function handleRemoveExp() {
  //   removeExperience(id);
  //   setExpList(experience);
  // }

  return (
    <div className='Experience'>
      {expList.map((exp, index) => (
        <InputModule
          key={index}
          title='Experience'
          list={exp}
          add={true}
          addFxn={handleAddExp}
        />
      ))}
    </div>
  )
}