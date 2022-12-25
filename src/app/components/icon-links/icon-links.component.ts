import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-links',
  templateUrl: './icon-links.component.html',
  styleUrls: ['./icon-links.component.scss']
})
export class IconLinksComponent implements OnInit {

  @Input() src='';
  @Input() url='';
  
  constructor() { }

  ngOnInit(): void {
  }

}
