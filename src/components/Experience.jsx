import { experience } from "./Data"
import { InputModule } from "./Components";

export function Experience() {
  return (
    <InputModule 
      title='Experience'
      list={experience}
    />
  )
}