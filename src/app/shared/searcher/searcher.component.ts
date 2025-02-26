import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
  standalone: false
})
export class SearcherComponent  implements OnInit {

  @Output() searcher = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  public search(event: any): void{
    console.log(event.target.value);
    this.searcher.emit(event.target.value);
  }

}
