import { InputModule, OutputModule, Buttons } from "./Components";

export function EducationInput({ list, handleEduChange, handleRemoveEdu, handleAddEdu }) {
  return (
    <div className='Education'>
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

export function EducationOutput({ list, index }) {
  return (
    <div>
      {list.map(item => (
        <OutputModule
        key={index}
        title={'Education'}
        list={item}
        />
      ))}
    </div>
  )  
}