import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
title: string = 'Basketball'
content: string = 'Michael Jordan is the best!'
isTechRelated: boolean = true;


changeColor(){
    return this.title === 'true' ? 'blue' : 'yellow';
  }
// setTimeout(() => {
//   title = true;
// }, 2000);
}

