import { InputModule, OutputModule, Buttons } from "./Components";

export function EducationInput({ list, handleEduChange, handleRemoveEdu, handleAddEdu }) {
  return (
    <div className='education inputSection'>
      <div className='inputHeader'>Education</div>
      {list.map((edu, index) => (
        <InputModule
          key={index}
          id={index}
          list={edu}
          handleChange={handleEduChange}
          rmvFxn={handleRemoveEdu}
        />
      ))}
      <Buttons
        addFxn={handleAddEdu}
      />
    </div>
  )
}

export function EducationOutput({ list }) {
  return (
    <div className='educationOutput'>
      <div className='outputHeader'>Education</div>
      {list.map((item, index) => (
        <OutputModule
        key={'out' + index}
        list={item}
        />
      ))}
    </div>
  )  
}