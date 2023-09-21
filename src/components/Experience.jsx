import { useState } from "react";
import { experience, addExperience } from "./Data"
import { InputModule } from "./Components";

export function Experience() {
  const [expList, setExpList] = useState(experience)

  // move function to add a new list here

  // remove original list and create in Data with a function (and and ID)

  // update state with button

  // pass through function for button

  // change single InputModule call to a map function

  // move buttons creation to after inputs instead of inside 

  return (
    <InputModule 
      title='Experience'
      list={experience}
      add={true}
      addFxn = {addExperience}
    />
  )
}