import './App.css'
import { useState } from 'react';
import { ProfilePicInput, ProfilePicOutput } from './components/ProfilePic';
import { ContactInput, ContactOutput, NameOutput } from './components/Contact';
import { ExperienceInput, ExperienceOutput } from './components/Experience';
import { EducationInput, EducationOutput } from './components/Education';
import { SubmitReset } from './components/Components'
import { getContact, addEducation, addExperience, removeItem } from './components/Data';
import { toggleInput } from './components/StyleFxns';

// set up inital data arrays
let contact = [];
contact = getContact();
let experience = [];
experience = addExperience(experience);
let education = [];
education = addEducation(education);
let outputs = [contact, experience, education];

function App() {
  // set states
  const [contList, setContList] = useState(contact);
  const [expList, setExpList] = useState(experience);
  const [eduList, setEduList] = useState(education);
  const [outputList, setOutputList] = useState(outputs);
  const [image, setImage] = useState();

  // data functions
  function handleContChange(e) {
    let code = e.target.id;
    let id = `${code.slice(code.indexOf('i') + 1)}`;
    setContList(contList.map(item => {
      if (item.id === id) {
        return {...item, data: e.target.value}
      } else {
        return item;
      }
    }));
  }

  function handleAddExp() {
    setExpList(addExperience(expList, expList.length));
  }

  function handleRemoveExp(e) {
    let group = parseInt(e.target.id);
    let newExp = removeItem(expList, group);
    // re-index the list
    let remap = newExp.map((item, index) => {
      return item.map(exp => {return {...exp, group: index}});
    });
    setExpList(remap);
  }

  function handleExpChange(e) {
    let code = e.target.id;
    let group = code.slice(code.indexOf('g') + 1, code.indexOf('i'))
    let id = `${code.slice(code.indexOf('i') + 1)}`;
    let left = expList.slice(0, group);
    let right = expList.slice((group + 1));
    setExpList([...left, expList[group].map(item => {
      if (item.id === id) {
        return { ...item, data: e.target.value }
      } else {
        return item;
      }
    }), ...right])
  }

  function handleAddEdu() {
    setEduList(addEducation(eduList, eduList.length));
  }

  function handleRemoveEdu(e) {
    let group = parseInt(e.target.id);
    let newEdu = removeItem(eduList, group);
    // re-index the list
    let remap = newEdu.map((item, index) => {
      return item.map(edu => {return {...edu, group: index}});
    });
    setEduList(remap);
  }

  function handleEduChange(e) {
    let code = e.target.id;
    let group = code.slice(code.indexOf('g') + 1, code.indexOf('i'))
    let id = `${code.slice(code.indexOf('i') + 1)}`;
    let left = eduList.slice(0, group);
    let right = eduList.slice((group + 1));
    setEduList([...left, eduList[group].map(item => {
      if (item.id === id) {
        return { ...item, data: e.target.value }
      } else {
        return item;
      }
    }), ...right])
  }

  function handleSubmit() {
    setOutputList([contList, expList, eduList, image]);
    toggleInput();
  }

  function handleReset() {
    setContList(contact);
    setExpList(experience);
    setEduList(education);
    setImage();
    setOutputList([contact, experience, education, ]);
  }

  //const [image, setImage] = useState();

  function handleImage(e) {
    let imgSrc = URL.createObjectURL(e.target.files[0]);
    setImage(imgSrc);
  }

  return (
    <div className='app'>
      <div 
        className='menuBtnContainer'
        onClick={toggleInput}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>arrow-left-circle</title>
          <path className='menuBtn' d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M18,11H10L13.5,7.5L12.08,6.08L6.16,12L12.08,17.92L13.5,16.5L10,13H18V11Z" />
        </svg>
      </div>
      <div className='inputForm'>
        <ProfilePicInput
          handleImage={handleImage}
        />
        <ContactInput 
          list={contList}
          handleContChange={handleContChange}
        />
        <ExperienceInput 
          list={expList}
          handleExpChange={handleExpChange}
          handleRemoveExp={handleRemoveExp}
          handleAddExp={handleAddExp}
        />
        <EducationInput 
          list={eduList}
          handleEduChange={handleEduChange}
          handleRemoveEdu={handleRemoveEdu}
          handleAddEdu={handleAddEdu}
        />
        <SubmitReset
          handleSubmit={handleSubmit}
          handleReset={handleReset}
        />
      </div>
      <div className='outputsPage'>
        <div className='outputsContainer'>
          <div className='leftOutputs'>
            <ProfilePicOutput
              imageURL={outputList[3]}
            />
            <ContactOutput
              list={outputList[0].filter(item => item.id >= 4)}
            />
            <EducationOutput
              list={outputList[2]}
            />
          </div>
          <div className='rightOutputs'>
            <NameOutput
              list={outputList[0].filter(item => item.id < 4)}
            />
            <ExperienceOutput
              list={outputList[1]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
