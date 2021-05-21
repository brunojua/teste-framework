import { Component, OnInit } from '@angular/core';

import { ApiService } from './../app/services/api/api.service';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.scss']
})
export class AlbunsComponent implements OnInit {

  albums: any;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
		this.api.getAlbums().subscribe(
			res => {
        res = res.slice(0, 6);
				this.albums = res;
			}, error => {
				console.log(error);
			}
		)
	}

}
