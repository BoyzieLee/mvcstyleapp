import $ from "jquery";

// Get Models
import { Employee} from './models/employee';

import { Views} from './models/views';
import { AppController} from './controllers/appController';

const url = 'https://secret-forest-21470.herokuapp.com/collections/abcdefghijklijklmnopqrstuvwxyz/';


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
