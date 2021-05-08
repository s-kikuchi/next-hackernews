export interface Item {
  id: string;
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
