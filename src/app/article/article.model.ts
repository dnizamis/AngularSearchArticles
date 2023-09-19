export class ArticleModel{
  public id: number;
  public title: string;
  public description: string;

  constructor(id: number, title: string, desc: string) {
    this.id = id;
    this.title = title;
    this.description = desc;
  }

}
