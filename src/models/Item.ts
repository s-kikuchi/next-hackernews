/*
interface Interface {
  id: number,
  score: number,
  title: string;
  type: string;
  url: string;
  time: number,
  descendants: number,
  by: string;
  __lastUpdated: number,
}
 */

class Item {
  id: number;
  score: number;
  title: string;
  type: string;
  url: string;
  time: number;
  descendants: number;
  by: string;
  __lastUpdated: number;

  constructor(data) {
    this.id = data.id;
    this.score = data.score;
    this.title = data.title;
    this.type = data.type;
    this.url = data.url;
    this.time = data.time;
    this.descendants = data.descendants;
    this.by = data.by;
    this.__lastUpdated = data.__lastUpdated;
  }
}

export default Item;
