import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todos: ToDoModel[] = [];
  work: string = "";
  name: string = "";
  categories: CategoryModel[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.getAllTodos();
    this.getAllCategories();
  }

  getAllTodos() {
    this.http.get<ToDoModel[]>("http://localhost:5000/api/todos/getall").subscribe(result => {
      this.todos = result;
    })
  }

  saveTodo() {
    this.http.post("http://localhost:5000/api/todos/create?work=" + this.work, null).subscribe(() => {
      this.work = "";
      this.getAllTodos();
    });
  }


  getAllCategories() {
    this.http.get<CategoryModel[]>("http://localhost:5000/api/categories/getall").subscribe(result => {
      this.categories = result;
    })
  }

  saveCategory() {
    const data = { name: this.name };
    this.http.post("http://localhost:5000/api/categories/create", data).subscribe(() => {
      this.getAllCategories();
    });
  }
}

export class ToDoModel {
  id: number = 0;
  work: string = "";
}

export class CategoryModel {
  id: number = 0;
  name: string = "";
}