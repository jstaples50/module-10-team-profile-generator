function employeeCardHtml(employee) {
  let roleParameter;
  let roleValue;
  if(employee.getRole() === 'Manager') {
    roleParameter = 'Office Number';
    roleValue = employee.officeNumber;
  } else if(employee.getRole() === 'Engineer') {
    roleParameter = 'Github';
    roleValue = employee.github;
  } else {
    roleParameter = 'School';
    roleValue = employee.school;
  }

  return `
<div class="card p-0 m-3" style="width: 18rem; border-radius: 20px;">
  <div class="card-body text-bg-primary" style="border-radius: 20px 20px 0 0;">
    <h4 class="card-title">${employee.getName()}</h4>
    <h6 class="card-subtitle">${employee.getRole()}</h6>
  </div>
  <ul class="list-group list-group-flush p-4">
    <li class="list-group-item">Id: ${employee.getId()}</li>
    <li class="list-group-item">Email: ${employee.getEmail()}</li>
    <li class="list-group-item">${roleParameter}: ${roleValue}</li>
  </ul>
</div>
  `
};






module.exports = {employeeCardHtml}