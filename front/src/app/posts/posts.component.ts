import { Component, OnInit } from '@angular/core';

import { ApiService } from './../app/services/api/api.service';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

	posts: any;

	constructor(
		private api: ApiService
	) { }

	ngOnInit() {
		this.getPosts();
	}

	getPosts() {
		this.api.getPosts().subscribe(
			res => {
				console.log(res);
				this.posts = res;
			}, error => {
				console.log(error);				
			}
		)
	}

}
