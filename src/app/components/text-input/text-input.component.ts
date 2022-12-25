import { AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements AfterViewInit {

 
  @Input()text:string='';
  @Input() label='';
  @Input() id='';
  @Output() onChange:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngAfterViewInit(): void {
  
  }

  changeHandler(newVal:string){
    this.onChange.emit(newVal);
  }

}
