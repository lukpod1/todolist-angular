export class Task {

  static lastId = 0;
  id?: number;
  title: string;
  content: string;

  constructor(title, content) {
    this.id = Task.lastId + 1;
    this.title = title;
    this.content = content;
    Task.lastId++;
  }

}
