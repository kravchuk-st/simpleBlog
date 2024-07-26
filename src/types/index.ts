interface IBtn {
  title: string;
  style?: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
}

interface IInput {
  style?: string;
  type?: string;
}

interface IMenuBtn {
  activeMenu: string;
  title: string;
  onClick: Function;
}

export type {
	IBtn,
  IInput,
  IMenuBtn,
};
