import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ArticleModel} from "./article/article.model";

@Injectable({
  providedIn: 'root'
})

export class ArticleService{
  baseUrl = "/api/articles";
  constructor(private http: HttpClient) {
  }
  getArticles(){
    return this.http.get<ArticleModel[]>(this.baseUrl);
  }
}
