import { education } from "./Data"
import { InputModule } from "./Components"

export function Education() {
  return (
    <InputModule 
      title='Education'
      list={education}
      add={true}
    />
  )
}