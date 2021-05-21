import { Component, OnInit } from '@angular/core';

import { ApiService } from './../app/services/api/api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: any

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
		this.api.getTodos().subscribe(
			res => {
        res = res.slice(0, 18);
				this.todos = res;
			}, error => {
				console.log(error);
			}
		)
	}

}
