import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tour} from "../model/tour";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Tour[]> {
    return this.http.get<Tour[]>(API_URL + '/tuors');
  }

  findTourById(id: number) {
    return this.http.get<Tour>(`${API_URL}/tuors/${id}`);
  }

  saveTour(tour: Tour): Observable<Tour> {
    return this.http.post<Tour>(API_URL + `/tuors`, tour);
  }

  deleteTour(id: number | undefined): Observable<Tour> {
    return this.http.delete<Tour>(`${API_URL}/tuors/${id}`);
  }

  editTour(id: number | undefined, tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(`${API_URL}/tuors/${id}`, tour);
  }
}
