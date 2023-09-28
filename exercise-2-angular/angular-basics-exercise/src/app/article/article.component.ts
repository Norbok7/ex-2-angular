import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
title: any = 'Basketball'
content: string = 'Michael Jordan is the best!'
isTechRelated: boolean = true;


changeColor(){
    return true !== this.isTechRelated ? 'blue' : 'yellow';
  }
clickToTrue(){
  return this.isTechRelated = false;
}

}
