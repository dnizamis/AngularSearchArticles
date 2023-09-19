import {Component, OnInit} from '@angular/core';
import {ArticleModel} from "../article/article.model";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit{
   articleList: ArticleModel[] = [
    new ArticleModel(1, 'First Article!', 'description of first article'),
     new ArticleModel(2, 'Second Article!', 'description of second article'),
     new ArticleModel(3, 'Third Article!', 'description of third article'),
     new ArticleModel(2, 'HUGE TITLE ARTICLEEEEEEEEEEEE!', 'HUGE DESCRIPTIONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN'),
     new ArticleModel(2, 'FITH Article!', 'description of FIFTH article')
  ]

  ngOnInit() {
  }

  constructor() {
  }
}

