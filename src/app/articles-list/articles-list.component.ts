import {Component, OnInit} from '@angular/core';
import {ArticleModel} from "../article/article.model";
import {ArticleService} from "../article.service";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent {
   articleList: ArticleModel[] = [];

  constructor(private articleService: ArticleService) {
    this.getArticles();
  }
  private getArticles(){
    this.articleService.getArticles().subscribe({
      next:(res) => {
        this.articleList=res;
        console.log(res);
      },
      error:(err)=>console.log(err)
    })
  }
}

