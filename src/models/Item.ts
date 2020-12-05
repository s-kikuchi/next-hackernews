interface Item {
  id: number;
  score: number;
  title: string;
  type: string;
  url: string;
  time: number;
  descendants: number;
  by: string;
  __lastUpdated: number;
  kids: number[];
  text: string | any;
}

export default Item;
