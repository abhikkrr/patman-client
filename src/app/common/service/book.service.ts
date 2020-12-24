import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/Books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  browserWindow = window || {};
  browserWindowEnv = this.browserWindow['__env'] || {};
  baseUrl: string = (this.browserWindowEnv.apiUrl.includes("http")) ? this.browserWindowEnv.apiUrl + '/lib/v1':"";

  constructor(
    private httpClient: HttpClient,
  ) { }

  findAll(){
    return this.httpClient.get<Array<Book>>(`${this.baseUrl}/books`);
  }

  findById(id: number){
    return this.httpClient.get<Book>(`${this.baseUrl}/books/${id}`);
  }

  add(entity: Book){
    return this.httpClient.post<string>(`${this.baseUrl}/books`,entity);
  }

  edit(entity: Book){
    return this.httpClient.put<string>(`${this.baseUrl}/books/${entity.id}`,entity);
  }

  delete(id: number){
    return this.httpClient.delete<string>(`${this.baseUrl}/books/${id}`);
  }
  
}
