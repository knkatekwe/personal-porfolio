import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActivityLogService {
  constructor(private readonly http: HttpClient) {}

  postActivityLog(payload): Promise<any> {
    return this.http
      .post<any>(`${environment.apiUrl}/api/v1/activity-logs`, payload)
      .toPromise();
  }

  getIPAddress(): Promise<any> {
    return this.http.get('https://api.ipify.org/?format=json').toPromise();
  }
}
