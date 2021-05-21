import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { AppComponent } from './app.component';
import { AlbunsComponent } from './albuns/albuns.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [    
    { path: '', component: PostsComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'albuns', component: AlbunsComponent },
    { path: 'todos', component: TodosComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
