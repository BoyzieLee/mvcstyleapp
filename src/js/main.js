import $ from "jquery";

// Get Models
import { Employee} from './moduels/employee';

import { Contacts} from './moduels/contacts';
import { AppController} from './controllers/appController';

// Store Elements
let employeeForm = $('.employeeForm'); //<form>
let nameInput = $('.nameInput'); //<input>
let numberInput = $('.numberInput'); //<input>
let locationInput = $('.locationInput'); //<input>
//  Import contact list form Employee;
let contactList = new Employee('Contact List');

// Initiate our App Controller
let app = new AppController(employeeForm, nameInput, numberInput, locationInput, contactList);
app.init();
