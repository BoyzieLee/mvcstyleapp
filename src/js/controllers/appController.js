import $ from "jquery";
import _ from 'lodash';

import {Contacts} from '../moduels/contacts';

export class AppController {

  constructor (formElem, taskElem, instance) {
    this.button = formElem;
    this.taskArea = taskElem;
    this.todoListInstance = instance;
  }

  init() {
    this.formSubmit();
    this.taskClick();
  }

  //initialize the form
  formSubmit() {
    this.button.on('submit', (event) => {
      //     event.preventDefault();
      console.log(event);

      // $('#employeeForm').on('submit', (event) => {
      //   // prevent browser default
      //   event.preventDefault();

      // let input = this.button.find('input');
      // this.addTaskToCollection(input.val());

      let data = {name:$('.nameInput') .val(), numberInput: $('.number') .val(), location: $('.locationInput') .val(),}
      data.val(''); //this clears the input
      // console.log(input.val());
    });
  }

  //initialize the for click event
  taskClick() {
    // prevent browser default
    this.taskArea.on('click', 'li', (event) => {
      event.preventDefault();
      // find the specific li clicked on
      let liClicked = $(event.target);

      // Find the Element's ID
      let liID = liClicked.attr('id');

      // add the remove class here


      // Toggle the completed class on that li
      // liClicked.toggleClass('completed');


      // Find the item in the array by it's ID
      let specTask = _.find(this.todoListInstance.tasks, { id: Number(liID)});
      //^^^this allows you to find a specific object in our array.

      // Use the .toggleStatus method to chang the status
      // console.log(specTask);
      specTask.toggleStatus();
      // console.log(specTask);

      // use .addClass to change the view

      // you MUST specify which li was click on in this function block
      // console.log(event.target);
      // console.log('Task Clicked');
    });
  }

  addTaskToCollection(taskDesc) {
    let rando = _.random(1000, 9999);
    // console.log(rando);
    // console.log(Task);
    let t = new Task(taskDesc, rando); // create instace of task
    this.todoListInstance.tasks.push(t); //push to my task array
    // console.log(t);
    this.addTaskToView(t); // call an update to the view

    console.log(this.todoListInstance);
  }

  addTaskToView(taskObj) {
    let taskHTML = this.taskTemplate(taskObj);
    this.taskArea.append(taskHTML);
  }

  taskTemplate(taskObj) {
    return `<li id="${taskObj.id}">${taskObj.desc}</li>`;
  }

}
