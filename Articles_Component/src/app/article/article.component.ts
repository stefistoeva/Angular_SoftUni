import { Component, Input } from '@angular/core';
import { Article } from "../models/article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  private symbols = 250;
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';
  
  constructor() {
    this.articleDescLen = 0;
    this.descToShow = "";
  }

  readMore(): void {
    this.articleDescLen += this.symbols;
    // console.log(this.article.descrtiption);
    if(this.articleDescLen >= this.article.descrtiption.length) {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
      this.descToShow = this.article.descrtiption;
    } else {
      this.descToShow = this.article.descrtiption.substring(0, this.articleDescLen);
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    // @ts-ignore
    this.imageButtonTitle = this.imageButtonTitle === "Show Image"
      ? "Hide Image" : "Show Image";
  }

  hideDesc(): void {
    this.descToShow = "";
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }
}
