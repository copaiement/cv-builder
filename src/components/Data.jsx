export const contact = [{
  id: 'CO00',
  field: 'Firstname',
  data: '',
  type: 'text'
}, {
  id: 'CO01',
  field: 'Lastname',
  data: '',
  type: 'text'
}, {
  id: 'CO02',
  field: 'Title',
  data: '',
  type: 'text'
}, {
  id: 'CO03',
  field: 'Headline',
  data: '',
  type: 'paragraph'
}, {
  id: 'CO04',
  field: 'Location',
  data: '',
  type: 'text'
}, {
  id: 'CO05',
  field: 'E-mail',
  data: '',
  type: 'email'
}, {
  id: 'CO06',
  field: 'Phone',
  data: '',
  type: 'tel'
}
];


export let experience = [];
addExperience(0);

// Function to add another Experience section to array
export function addExperience(group) {
  const newExp = [{
    group: group,
    id: '0',
    field: 'Employer',
    data: '',
    type: 'text'
  }, {
    id: 'EX'+id+'1',
    field: 'Position Title',
    data: '',
    type: 'text'
  }, {
    id: 'EX'+id+'2',
    field: 'Job Description',
    data: '',
    type: 'text'
  }, {
    id: 'EX'+id+'3',
    field: 'Start Date',
    data: '',
    type: 'date'
  }, {
    id: 'EX'+id+'4',
    field: 'End Date',
    data: '',
    type: 'date'
  }];
  
  // use spread instead of push to trigger repaint
  experience = [...experience, newExp];
}

// Function to remove an Experience section from array
export function removeExperience(exp) {
  return experience.filter((obj) => obj !== exp)
}

export let education = [];
addEducation(0);

// Function to add another Education section to array
export function addEducation(id) {
  const newEdu = [{
    id: 'ED'+id+'0',
    field: 'School Name',
    data: '',
    type: 'text'
  }, {
    id: 'ED'+id+'1',
    field: 'Degree',
    data: '',
    type: 'text'
  }, {
    id: 'ED'+id+'2',
    field: 'Graduated',
    data: '',
    type: 'month'
  }];
  
  // use spread instead of push to trigger repaint
  education = [...education, newEdu];
}

