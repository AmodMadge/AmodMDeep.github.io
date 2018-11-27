import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LOCAL_STORAGE } from 'angular-webstorage-service';
import 'hammerjs';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  public allCurrency = [];
  public arr = [];
  public arrCopy = [];
  p: number = 1;
  public favData = [];
  public selected: any;
  public comparsionId = [];
  public displaycheckbox: boolean = false;
  public key: string;
  public result = [];
  public reverse: boolean = false;

  constructor(private _route: ActivatedRoute, private router: Router, public listService: CryptoService) { }

  ngOnInit() {

    this.listService.getAllCurrency().subscribe(
      data => {
        this.allCurrency = data.data;
        console.log(this.allCurrency);
        for (let element in this.allCurrency) {
          this.arr.push(this.allCurrency[element]);
        }
        this.arrCopy = this.arr;
      },
      error => {
        console.log(error);
      }
    )

  }

  public sort(key) {
    this.key = key;
    //  console.log(this.key);
    this.reverse = !this.reverse;

  }


// for range slider function

  public myOnFinish(event1, type) {
 

    let min = event1.from;
    let max = event1.to;

    if (type === 'marketCap') {
      if (this.result.length > 0) {
        this.result = this.result.filter(word => (word.quotes.USD.market_cap > min && word.quotes.USD.market_cap < max));
      } else {
        this.result = this.arrCopy.filter(word => (word.quotes.USD.market_cap > min && word.quotes.USD.market_cap < max));
      }
    } else {
      if (this.result.length > 0) {
        this.result = this.result.filter(word => (word.quotes.USD.price > min && word.quotes.USD.price < max));
      } else {
        this.result = this.arrCopy.filter(word => (word.quotes.USD.price > min && word.quotes.USD.price < max));
      }
    }

    this.arr = this.result;


  }
// fav selected coin in local storage
  onSelect(j) {
  
    let key = 'id';
    this.favData.push(j);
    localStorage.setItem(key, JSON.stringify(this.favData));
    this.selected = (this.selected === j ? null : j);

  }
  isActive(j) {
    return this.selected === j;
  };
  
  // function for select coin by checkbox 
  onChange(id: number, isChecked: boolean)
  {
    if (isChecked) {
      this.comparsionId.push(id);
    } else{
      this.comparsionId.splice(0,this.comparsionId.length);
    
      if (isChecked) {
        this.comparsionId.push(id);
    }
  }
}

public checkboxdisplay() {
  this.displaycheckbox = !this.displaycheckbox;
  
}
  
// navigate comparison chart component 
  OnSelectCurrency() 
  {
    if(this.comparsionId.length >2)
    {
     alert("Please select only two currency");
     location.reload(true);

    }
    else{
      console.log(this.comparsionId);
      this.router.navigate(['/comparisonView',this.comparsionId[0],this.comparsionId[1]]);

    }
    
  }

  //navigate to price chart
  public gopricechart(v) {
    this.router.navigate(['/priceChart'],{ queryParams: {pc:v} });
}

}


