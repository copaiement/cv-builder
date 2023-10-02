import { InputModule, OutputModule, Buttons } from "./Components";

export function EducationInput({ list, handleEduChange, handleRemoveEdu, handleAddEdu }) {
  return (
    <div className='education inputSection'>
      {list.map((edu, index) => (
        <InputModule
          key={index}
          id={index}
          title={'Education'}
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
      {list.map((item, index) => (
        <OutputModule
        key={'out' + index}
        title={'Education'}
        list={item}
        />
      ))}
    </div>
  )  
}