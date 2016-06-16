import $ from "jquery";

// Get Models
import {Employee} from './model/employee';
import {Views} from './model/views';
import {AppController} from './controllers/appController';

const url = 'https://secret-forest-21470.herokuapp.com/collections/abcdefghijklijklmnopqrstuvwxyz/';

let form = $('.employeeForm');
let employeeArea = $('.employees')

form.on('submit', function (event){
  event.preventDefault();

  // let name     = form.find('.name').val(); //<input>

  // Store Elements
  let employeeForm  = $('.employeeForm'); //<form>
  let name     = $('.name'); //<input>
  let numberInput   = $('.numberInput'); //<input>
  let location = $('.location'); //<input>

  let employee = {
    name: name.val(),
    number: numberInput.val(),
    location: location.val(),
  };

  console.log(employee);
});

//  Import contact list form Employee;
let contactList = new Employee('Contact List');

// Send data to the server
$.post(url, employeeArea).then(function(res){
  console.log(res);
  console.log(employeeArea);
  let employeeHTML = employeeTemplate(res);
  employeeArea.prepend(employeeHTML);
});

function getEmployees() {
  // get employees and add to page
  $.getJSON(url).then(function(res){
    res.forEach(function (person){
      let employeeHTML = employeeTemplate(employeeArea);
      employeeArea.append(employeeHTML);
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
              <small>${employee.phone}</small>
              <br>
              They are from - ${employee.location}
             </p>
          </div>
        </div>
      </article>
    </div>
  `;
}

getEmployees();


// // Initiate our App Controller
// let app = new AppController(employeeForm, name, numberInput, location, contactList);
//
// // This kicks off the app
// app.init();
