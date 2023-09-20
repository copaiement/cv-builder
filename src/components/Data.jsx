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

export const experience = [{
  id: 'EX00',
  field: 'Employer',
  data: '',
  type: 'text'
}, {
  id: 'EX01',
  field: 'Position Title',
  data: '',
  type: 'text'
}, {
  id: 'EX04',
  field: 'Job Description',
  data: '',
  type: 'text'
}, {
  id: 'EX05',
  field: 'Start Date',
  data: '',
  type: 'date'
}, {
  id: 'EX06',
  field: 'End Date',
  data: '',
  type: 'date'
}
];

export function addExperience(id) {
  const newExp = [{
    id: 'EX'+id+'0',
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

  experience.push(newExp);
}

export const education = [{
  field: 'School Name',
  data: '',
  type: 'text'
}, {
  field: 'Degree',
  data: '',
  type: 'text'
}, {
  field: 'Graduated',
  data: '',
  type: 'month'
}
];

