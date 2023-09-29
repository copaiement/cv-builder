import { InputModule, OutputModule, Buttons } from "./Components";

export function ExperienceInput({ list, handleExpChange, handleRemoveExp, handleAddExp }) {
  return (
    <div className='Experience'>
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

export function ExperienceOutput({ list, index }) {
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