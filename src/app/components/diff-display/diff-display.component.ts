import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type TEXT_DISPLAY = {
  [key: number]: { val: string, added?: boolean, removed?: boolean }
};

@Component({
  selector: 'app-diff-display',
  templateUrl: './diff-display.component.html',
  styleUrls: ['./diff-display.component.scss']
})
export class DiffDisplayComponent implements OnInit {

  @Input() text1Arr: string[] = [];
  @Input() text2Arr: string[] = [];
  @Input() linesRemovedFromText1 = new Set<number>();
  @Input() linesAddedToText2 = new Set<number>();
  @Output() compareNew:EventEmitter<Event>=new EventEmitter<Event>();


  // diff will be rendered using this
  text1DisplayObj: TEXT_DISPLAY = {};
  text2DisplayObj: TEXT_DISPLAY = {};
  totalLinesToDisplay: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const { text1DisplayObj, text2DisplayObj, range } = this.getDisplayArray();
    this.text1DisplayObj = text1DisplayObj;
    this.text2DisplayObj = text2DisplayObj;
    this.totalLinesToDisplay = Array(range);
  }


  getDisplayArray() {
    const text1DisplayObj: TEXT_DISPLAY = {};
    const text2DisplayObj: TEXT_DISPLAY = {};

    let range = this.text1Arr.length - this.linesRemovedFromText1.size + this.linesAddedToText2.size;
    let i = 0, j = 0;
    for (let k = 0; k < range; k++) {
      let inSet1 = this.linesRemovedFromText1.has(k);
      let inSet2 = this.linesAddedToText2.has(k);

      if (!(inSet1 || inSet2)) {
        // ie line is nor added nor removed
        text1DisplayObj[k] = { val: this.text1Arr[i] };
        text2DisplayObj[k] = { val: this.text2Arr[j] };
        i++; j++;
      }
      else{
        if (inSet1) {
          // ie this line is removed from text1
          text1DisplayObj[k] = { val: this.text1Arr[i], removed: true };
          i++;
        }
  
        if (inSet2) {
          // ie this line was added in set2
          text2DisplayObj[k] = { val: this.text2Arr[j], added: true };
          j++;
        }
      }
    }

    return { text1DisplayObj, text2DisplayObj, range }
  }


  clickHandler(e:Event){
    this.compareNew.emit(e);
  }
}
