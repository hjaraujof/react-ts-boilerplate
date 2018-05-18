export class IHTMLBasicProps{
  public id: string = '';
  public classes: string = '';
  constructor(obj: { id:string, classes:string }) {
    if (obj.id) { this.id = obj.id; }
    if (obj.classes) { this.classes = obj.classes; }
  }
}
