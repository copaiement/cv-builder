import { InputModule, OutputModule, Buttons } from "./Components";

export function ExperienceInput({ list, handleExpChange, handleRemoveExp, handleAddExp }) {
  return (
    <div className='experience inputSection'>
      {list.map((exp, index) => (
        <InputModule
          key={index}
          id={index}
          title={'Experience'}
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