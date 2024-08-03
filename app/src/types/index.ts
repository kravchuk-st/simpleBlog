interface IBtn {
  title: string;
  style?: string;
  type?: "button" | "submit" | "reset";
}

interface IInput {
  style?: string;
  name?: string;
  type?: string;
}

interface IMenuBtn {
  title: string;
}

interface ICategory {
  id: number;
  attributes: {[key: string]: string};
}

interface ICard {
  title: string;
  date: string;
  author: string;
  img: any;
  alt_img: string;
  category: any;
  publishedAt: string;
}

interface IData {
  id: number;
  attributes: ICard;
}

interface IAppData {
  searchTerm: string,
  actualCategory: string,
  categoriesList: ICategory[],
  articlesSlider: IData[],
}

interface ILayoutAppContext extends IAppData {
	setAppData: Function;
}

export type {
  IAppData,
  ILayoutAppContext,
	IBtn,
  IInput,
  IMenuBtn,
  ICard,
  IData,
  ICategory,
};
