import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weatherIcon: any;
  weatherDetails: any;
  temp: any;
  toDate: Date = new Date();
  cityName: any;
  constructor(public httpClient: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.httpClient
      .get(`${apiUrl}/weather?q=Toronto&appid=${apiKey}`)
      .subscribe((results) => {
        console.log(results);
        this.temp = results['main'];
        this.cityName = results['name'];
        this.weatherDetails = results['weather'][0];
        console.log(this.weatherDetails.icon);
        this.weatherIcon = `https://openweathermap.org/img/w/${this.weatherDetails.icon}.png`;
        console.log(this.temp);
      });
  }
}
