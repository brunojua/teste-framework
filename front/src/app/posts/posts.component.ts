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
        res = res.slice(0, 10);
				this.posts = res;
			}, error => {
				console.log(error);
			}
		)
	}

}
