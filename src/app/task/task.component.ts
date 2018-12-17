import { Task } from './task';
import { Component, OnInit, Input } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  listTask: Task[] = [
    // {
    //   id: 2,
    //   title: 'Fazer Front-End da Embrapa',
    //   content: 'Tentar usar o framework Bulma CSS'
    // },
    // {
    //   title: 'Estudar o Curso da Udemy de Angular',
    //   content: 'Começar a assistir as aulas sobre o projeto do curso'
    // },
    // {
    //   title: 'Estudar Node.js',
    //   content: 'Assistir as aulas do curso de canal Balda.io'
    // }
  ];


  constructor() { }

  ngOnInit() {
  }

  addTask(newTask) {
    const title = prompt('Title:');
    const content = prompt('Content:');

    newTask = new Task(title, content);
    this.listTask.push(newTask);

  }

  removeTask(task) {
    this.listTask = this.listTask.filter(t => t.id !== task.id);
  }

  updateTask(task) {
    const title: string = prompt('Title:');
    const content: string = prompt('Content:');


    const index = this.listTask.indexOf(task);

    const newTask = new Task(title, content);
    newTask.id = index + 1;

    this.listTask.splice(index, 1, newTask);



  }

}
