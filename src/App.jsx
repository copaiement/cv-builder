import './App.css'
import { useState } from 'react';
import { ContactInput, ContactOutput } from './components/Contact';
import { ExperienceInput, ExperienceOutput } from './components/Experience';
import { EducationInput, EducationOutput } from './components/Education';
import { SubmitButton, ResetButton } from './components/Components'
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
    setOutputList([contList, expList, eduList]);
    toggleInput();
  }

  function handleReset() {
    setContList(contact);
    setExpList(experience);
    setEduList(education);
    setOutputList([contact, experience, education]);
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
        <SubmitButton 
          handleSubmit={handleSubmit}
        />
        <ResetButton
          handleReset={handleReset}
        />
      </div>
      <div className='outputs'>
        <ContactOutput 
          list={outputList[0]}
        />
        <ExperienceOutput 
          list={outputList[1]}
        />
        <EducationOutput 
          list={outputList[2]}
        />
      </div>
    </div>
  )
}

export default App
