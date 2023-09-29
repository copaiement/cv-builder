import { InputModule, OutputModule } from "./Components";

export function ContactInput({ list, handleContChange }) {
  return (
    <div className='Contact'>
      <InputModule 
        title='Contact Info'
        list={list}
        add={false}
        handleChange={handleContChange}
      />
    </div>
  )
}

export function ContactOutput({ contact }) {
  return (
    <OutputModule
      title={'Contact Info'}
      list={contact}
    />
  )
}