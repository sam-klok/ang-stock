import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import * as jsonData from './sampleProducts.json';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-stock';
  stockURL = 'https://api.twelvedata.com/stocks?apikey=6f7026034d724ea781376e301c7c3c88';

  public products = jsonData;
  public products$: any;
  public boredapi$: any;
  public stockData$: any;

  constructor(private httpClient: HttpClient){
      // promise
      // fetch(this.stockURL)
      // .then((res)=> res.json())
      // .then((body)=>console.log(body));

      // fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));
  }

  ngOnInit(): void{
    this.products$ = new Observable((observe) => {
      observe.next(jsonData);
      observe.complete();
      observe.error('Something went wrong');
    });

    this.boredapi$ = new Observable((observe) => {
      fetch('https://www.boredapi.com/api/activity')
        .then((res) => res.json())
        .then((body) => {
          observe.next(body);
          observe.complete();
        })
        .catch((err) => observe.error(err));
    });

    this.stockData$ = this.httpClient.get<any[]>(this.stockURL);

    this.boredapi$.subscribe((val: any) => console.log('boredapi$ = '+ JSON.stringify(val)));
    this.products$.subscribe((val: any) => console.log('products$ = '+ JSON.stringify(val)));
  }

  // Promise<Response> stockData$ - observer?
  //stockData$ = fetch(this.stockURL);
  
      //.then((res)=> res.json());


  
}
