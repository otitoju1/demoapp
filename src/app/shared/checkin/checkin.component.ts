import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent implements OnInit {
  @Input() name: string = ''
  @Input() email: string = ''
  @Input() company: string = ''
  @Input() address: string = ''
  @Input() index: string = ''
  data: any[] = []

  constructor() { }

  ngOnInit() {}

}
