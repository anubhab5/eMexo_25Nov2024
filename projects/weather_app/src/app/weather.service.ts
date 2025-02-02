import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'f00c38e0279b7bc85480c3fe775d518c'; // Replace with your OpenWeather API key
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`
    );
  }
}
