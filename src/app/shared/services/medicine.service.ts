import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMedicine } from '../models/medicine.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  baseUrl = 'https://localhost:44320/';

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  public GetMedicines(): Observable<IMedicine[]> {
    return this._httpClient.get<IMedicine[]>(this.baseUrl + 'api/medicines');
  }

  public GetMedicine(id: number): Observable<IMedicine> {
    return this._httpClient.get<IMedicine>(this.baseUrl + 'api/medicines/' + id);
  }

  public AddMedicine(data: IMedicine): Observable<any> {
    const headers = { 'content-type': 'application/json; charset=utf-8' };
    return this._httpClient.post(this.baseUrl + 'api/medicines', data, { headers });
  }

  public UpdateMedicine(data: IMedicine): Observable<any> {
    const headers = { 'content-type': 'application/json; charset=utf-8' };
    return this._httpClient.put(this.baseUrl + 'api/medicines/' + data.id, data, { headers });
  }

  public DeleteMedicine(id: number): Observable<any> {
    return this._httpClient.delete(this.baseUrl + 'api/medicines/' + id);
  }
}
