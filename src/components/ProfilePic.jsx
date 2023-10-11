
export function ProfilePicInput({ handleImage }) {
  return (
    <form action="/action_page.php">
      <div className='inputHeader'>Profile Picture</div>
      <input 
        type="file" 
        id="img" 
        name="img" 
        accept="image/*"
        onChange={handleImage}
      />
    </form>
  )
}

export function ProfilePicOutput({ imageURL }) {
  return (
    <div className='profilePicContainer'>
      <img id="profilePic" src={imageURL} />
    </div>
  )
}