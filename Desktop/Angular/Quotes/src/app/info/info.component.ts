import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }
  addUpVote:number = 0;
addDownVote :number = 0;

  ngOnInit(): void {
  }
  upVote(){
    this.addUpVote++;
  }
  downVote(){
    this.addDownVote++;
  }

}
