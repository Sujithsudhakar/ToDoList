import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Todo } from "../interfaces/todo";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  private url: string = environment.apiURL;

  public getList(): Observable<Todo> {
    return this.httpClient.get<Todo>(this.url);
  }
}
