import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skeletonloader',
  templateUrl: './skeletonloader.component.html',
  styleUrls: ['./skeletonloader.component.scss'],
})
export class SkeletonloaderComponent implements OnInit {
  @Input() loading: any
  @Input() Loader: any
  
  constructor() { }

  ngOnInit() {}

}
