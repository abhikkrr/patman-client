import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Borrow } from '../model/Borrow';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  browserWindow = window || {};
  browserWindowEnv = this.browserWindow['__env'] || {};
  baseUrl: string = (this.browserWindowEnv.apiUrl.includes("http")) ? this.browserWindowEnv.apiUrl + '/lib/v1':"";

  constructor(
    private httpClient: HttpClient,
  ) { }

  findAll(){
    return this.httpClient.get<Array<Borrow>>(`${this.baseUrl}/borrows`);
  }

  findById(id: number){
    return this.httpClient.get<Borrow>(`${this.baseUrl}/borrows/${id}`);
  }

  add(entity: Borrow){
    return this.httpClient.post<string>(`${this.baseUrl}/borrows`,entity);
  }

  edit(entity: Borrow){
    return this.httpClient.put<string>(`${this.baseUrl}/borrows/${entity.id}`,entity);
  }

  delete(id: number){
    return this.httpClient.delete<string>(`${this.baseUrl}/borrows/${id}`);
  }
}
