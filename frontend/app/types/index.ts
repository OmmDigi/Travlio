export interface ITours {
  ID: number;
  IMG : string;
  TITLE: string;
  PRICE: string;
  TAGS: string;
  DATE: string;
  TIME: string;
  TOUR_TYPE: string;
}

export interface IResponse<T> {
  message: string;
  status: number;
  success: boolean;
  data: T;
}

export interface ITour {
  title : string;
  htmlDescription : string;
}
