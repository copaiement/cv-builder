import { InputModule, OutputModule, Buttons } from "./Components";

export function ExperienceInput({ list, handleExpChange, handleRemoveExp, handleAddExp }) {
  return (
    <div className='experience inputSection'>
      <div className='inputHeader'>Experience</div>
      {list.map((exp, index) => (
        <InputModule
          key={index}
          id={index}
          list={exp}
          handleChange={handleExpChange}
          rmvFxn={handleRemoveExp}
        />
      ))}
      <Buttons
        addFxn={handleAddExp}
      />
    </div>
  )
}

export function ExperienceOutput({ list }) {
  return (
    <div className='experienceOutput'>
      <div className='outputHeader'>Experience</div>
      {list.map((item, index) => (
        <OutputModule
        key={'out' + index}
        list={item}
        />
      ))}
    </div>
  )  
}