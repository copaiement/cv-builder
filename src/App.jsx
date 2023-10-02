import './App.css'
import { useState } from 'react';
import { ContactInput, ContactOutput } from './components/Contact';
import { ExperienceInput, ExperienceOutput } from './components/Experience';
import { EducationInput, EducationOutput } from './components/Education';
import { SubmitButton } from './components/Components'
import { getContact, addEducation, addExperience, removeItem } from './components/Data';

// set up inital data arrays
let education = [];
education = addEducation(education);
let experience = [];
experience = addExperience(experience);
let contact = [];
contact = getContact();

function App() {
  // set states
  const [contList, setContList] = useState(contact);
  const [expList, setExpList] = useState(experience);
  const [eduList, setEduList] = useState(education);

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
  return (
    <div className='app'>
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
        <SubmitButton />
      </div>
      {/* <div className='output'>
        <ContactOutput />
        <ExperienceOutput 
          list={expList}
        />
        <EducationOutput 
          list={eduList}
        />
      </div> */}
    </div>
  )
}

export default App
