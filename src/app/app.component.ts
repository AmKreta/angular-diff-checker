import { Component } from '@angular/core';
import diffFunction from 'src/util/lcsLinewise.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DiffChecker';

  inputText1 = '';
  inputText2 = '';
  input1Arr: string[] = []
  input2Arr: string[] = []
  linesRemovedFromText1 = new Set<number>();
  linesAddedToText2 = new Set<number>();
  showDiff = false;
  links=[
    {src:'/assets/github.png',url:'https://github.com/AmKreta/'},
    {src:'/assets/linkedin.png',url:'https://www.linkedin.com/in/kumar-amresh-1017a7161/'},
    {src:'/assets/youtube.png',url:'https://www.youtube.com/channel/UCPv6-SDz1t5Bc-3AeNYo1lQ'},
    {src:'/assets/stackoverflow.png',url:'https://stackoverflow.com/users/9280058/amresh-kumar'},
  ]

  findDifference() {
    this.input1Arr = this.inputText1.split('\n');
    this.input2Arr = this.inputText2.split('\n')
    const diff = diffFunction(this.input1Arr, this.input2Arr);
    this.linesRemovedFromText1 = diff.indexRemovedFromStr1;
    this.linesAddedToText2 = diff.indexaddedInStr2;
    this.showDiff = true;
  }

  onInputText1Change(newVal: string) {
    this.inputText1 = newVal;
  }

  onInputText2Change(newVal: string) {
    this.inputText2 = newVal;
  }


  clearState() {
    this.input1Arr = [];
    this.input2Arr = [];
    this.linesRemovedFromText1 = new Set<number>();
    this.linesAddedToText2 = new Set<number>();
    this.showDiff = false;
  }

}
