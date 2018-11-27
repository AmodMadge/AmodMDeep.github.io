import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
//import { Location, DatePipe, CurrencyPipe } from '@angular/common';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css']
})
export class ChartViewComponent implements OnInit {

  public currentCoin;
  public myCurrentCoin;
  coinData;
  //data;
  priceDetails;
//  chart: Chart;
  //public comparearray:any=[];
  //public d = new Date();
   chart=[];
   time=[];


  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    public listService: CryptoService
  ) {
    this.currentCoin = this._route.snapshot.paramMap.get('id');
    console.log(this.currentCoin);
  }

   type = 'line';
  options = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: true,
      intersect: false,
      mode: 'index'
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 0,
        bottom: 0
      }
    },
    hover: {
      animationDuration: 500,
      mode: 'index',
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          type: 'time',
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            autoSkip: true
          }
        }
      ],
      yAxes: [
        {
          display: true,
          type: 'linear',
          gridLines: {
            display: true,
            drawBorder: false
          }
        }
      ]
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 2,
        pointStyle: 'cross'
      }
    }
  };

  /*public specific(s):any {
    this.listService.specific(s).subscribe(
      data =>{
        
          if(s==data.data.id ){
            this.d.setHours(
              this.comparearray.push(data.data),
             24);
      
          }


          //chart data
       
    let chart = new Chart({
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Price Chart'
      },
      xAxis: {
      type: 'Price Chart',
      title: {
        text: 'Coins'
      }
    },
    credits: {
      enabled: false
    },
      yAxis: {
        title: {
            text: 'Price'
        }
    },
    series: [{
      name: 'Price',
      data:  [{
        id: this.comparearray[0].symbol,
          name: this.comparearray[0].name,
          y: this.comparearray[0].quotes.USD.price
      }]
    }, 
    {
      name:"Volume_24h",
      data: [{
        id: this.comparearray[0].symbol,
          name: this.comparearray[0].name,
          y: this.comparearray[0].quotes.USD.volume_24h
      }]
    }
  ]
  });
      //console.log(this.comparearray[0].id);
    this.chart = chart;
    chart.ref$.subscribe(console.log);


      },
      error=>{
        console.log("Error");
        console.log(error.status);
            
      })
 }


  */

  ngOnInit() 
  {

    this.listService.getCurrentCoinInfo(this.currentCoin)
    .subscribe(
      data => 
      {
        this.coinData = data;
        // console.log(data);
      },
      err => 
      {
        console.log(err);
      }
    );


    /*this.listService.getCurrentCoinInfo(this.currentCoin)
    .subscribe((res.forEach(y => {
      this.priceDetails.push(y.priceDetails)   
      this.time.push(y.time)                                                                                                                                     
      
    });*/

  }


}
