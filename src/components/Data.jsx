// ARRAY SETUPS
export function getContact() {
  const newCont = [{  
    group: '0',
    id: '0',
    field: 'Firstname',
    data: '',
    type: 'text'
  }, {
    group: '0',
    id: '1',
    field: 'Lastname',
    data: '',
    type: 'text'
  }, {
    group: '0',
    id: '2',
    field: 'Title',
    data: '',
    type: 'text'
  }, {
    group: '0',
    id: '3',
    field: 'Headline',
    data: '',
    type: 'paragraph'
  }, {
    group: '0',
    id: '4',
    field: 'Location',
    data: '',
    type: 'text'
  }, {
    group: '0',
    id: '5',
    field: 'E-mail',
    data: '',
    type: 'email'
  }, {
    group: '0',
    id: '6',
    field: 'Phone',
    data: '',
    type: 'tel'
  }];
  return newCont;
}

// Function to add another Education section to array
export function addEducation(eduArr, group = 0) {
  const newEdu = [{
    group: group,
    id: '0',
    field: 'School Name',
    data: '',
    type: 'text'
  }, {
    group: group,
    id: '1',
    field: 'Degree',
    data: '',
    type: 'text'
  }, {
    group: group,
    id: '2',
    field: 'Graduated',
    data: '',
    type: 'month'
  }];
  
  // use spread instead of push to trigger repaint
  return [...eduArr, newEdu];
}

// Function to add another Experience section to array
export function addExperience(expArr, group = 0) {
  const newExp = [{
    group: group,
    id: '0',
    field: 'Employer',
    data: '',
    type: 'text'
  }, {
    group: group,
    id: '1',
    field: 'Position Title',
    data: '',
    type: 'text'
  }, {
    group: group,
    id: '2',
    field: 'Job Description',
    data: '',
    type: 'text'
  }, {
    group: group,
    id: '3',
    field: 'Start Date',
    data: '',
    type: 'date'
  }, {
    group: group,
    id: '4',
    field: 'End Date',
    data: '',
    type: 'date'
  }];
  
  // use spread instead of push to trigger repaint
  return [...expArr, newExp];
}

// Function to remove a section from array
export function removeItem(arr, index) {
  const left = arr.slice(0, index);
  const right = arr.slice((index + 1));
  return [...left, ...right];
}


