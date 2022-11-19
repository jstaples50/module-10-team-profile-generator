// Function to create html for single employee object

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
    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}<a></li>
    <li class="list-group-item">${roleParameter}: ${roleValue}</li>
  </ul>
</div>
  `
};

// Function to create the full html for the site with the employees' card html inserted

function fullHtml(teamArray) {
  let teamCards = '';
  teamArray.forEach((employee) => {
    teamCards += employeeCardHtml(employee);
  })

  return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>

        <div class="container mt-5">
            <nav class="navbar navbar-expand-lg text-bg-danger" style="height: 8rem; border-radius: 20px;">
              <div class="container-fluid d-flex justify-content-center">
                <h1>The Team</h1>
              </div>
            </nav>
        </div>

        <div class="container d-flex justify-content-center mt-3">
            <div class="row d-flex justify-content-center">
                  ${teamCards}
            </div>
        </div>
    </body>
</html>
  `

}




module.exports = {employeeCardHtml, fullHtml}