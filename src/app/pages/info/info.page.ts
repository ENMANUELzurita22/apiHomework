import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: false
})
export class InfoPage implements OnInit {
  lastUpdate: string = 'Febrero 2025';
  constructor() { }

  ngOnInit() {
  }

}
