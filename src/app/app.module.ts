import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { PostsComponent } from './posts/posts.component';
import { AlbunsComponent } from './albuns/albuns.component';
import { TodosComponent } from './todos/todos.component';

import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		PostsComponent,
		AlbunsComponent,
		TodosComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
		HttpClientModule,
    FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
