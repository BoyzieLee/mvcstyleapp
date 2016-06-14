import $ from "jquery";

// Get Models
import { Employee} from './model/employee';

import { Views} from './model/views';
import { AppController} from './controllers/appController';

const url = 'https://secret-forest-21470.herokuapp.com/collections/abcdefghijklijklmnopqrstuvwxyz/';

let form = $('.employeeForm');
let employee = $('.employees')

form.on('submit', function (event){
  event.preventDefault();

  let employeeForm  = form.find('.name').val(); //<form>
  let nameInput     = form.find('.nameInput').val(); //<input>
  let ageInput      = form.find('.ageInput').val(); //<input>
  let locationInput = form.find('.locationInput').val(); //<input>

  let employee = {
    name: name,
    age: age,
    location: location,
  };
});
// Store Elements
// let employeeForm  = $('.employeeForm'); //<form>
// let nameInput     = $('.nameInput'); //<input>
// let numberInput   = $('.numberInput'); //<input>
// let locationInput = $('.locationInput'); //<input>
// //  Import contact list form Employee;
// let contactList = new Employee('Contact List');

// Send data to the server
$.post(url, employee).then(function(res){
  console.log(employee);
  let employeeHTML = employeeTemplate(res);
  employee.prepend(employeeHTML);
});


function getEmployees() {
  // get employees and add to page
  $.getJSON(url).then(function(res){
    res.formEach(function (person){
      let employeeHTML = employeeTemplate(employee);
      employee.append(employeeHTML);
    });
  });
}

function employeeTemplate(employee){
  return`
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="http://placehold.it/128x128" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>${employee.name}</strong>
              <small>${employee.age}</small>
              <br>
              They are from - ${employee.location}
             </p>
          </div>
        </div>
      </article>
    </div>
  `;

}




// Initiate our App Controller
// let app = new AppController(employeeForm, nameInput, numberInput, locationInput, contactList);

// app.init();
