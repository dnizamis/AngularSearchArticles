import {Component} from '@angular/core';
import {ArticleModel} from "../article.model";
import {ArticleService} from "../article.service";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent{
  articleList: ArticleModel[] = [];
  filteredArticleList: ArticleModel[] = [];
  searchQuery: string = '';

  constructor(
    private articleService: ArticleService) {
    this.getArticles();
  }

  private getArticles(){
    this.articleService.getArticles().subscribe({
      next:(res) => {
        this.articleList=res;
        this.filteredArticleList = res;
      },
      error:(err)=>console.log(err)
    })
  }

  receiveSearchedKeyword(searchedKeyword: string) {
    this.searchQuery = searchedKeyword;
    this.filterArticles();
  }

  filterArticles() {
    if (this.searchQuery.trim() === '') {
      this.filteredArticleList = this.articleList;
    } else {
      this.filteredArticleList = this.articleList.filter((article) =>
        article.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        || article.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

}
