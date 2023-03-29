import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-stock';
  stockURL = 'https://api.twelvedata.com/stocks?apikey=6f7026034d724ea781376e301c7c3c88';

  constructor(private http: HttpClient){
      fetch(this.stockURL)
      .then((res)=> res.json())
      .then((body)=>console.log(body));

      fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

      
  }

  // stockData$ - observer?
  stockData$ = fetch(this.stockURL);
  
      //.then((res)=> res.json());


  
}
