import { create } from "zustand";

interface IFruit {
  id: number;
  name: string;
}

interface IFruitStore {
  fruitList: IFruit[];
  addFruit: (newFruit: IFruit) => void;
  removeFruit: (fruitId: number) => void;
}

export const useFruitStore = create<IFruitStore>((set) => ({
  fruitList: [],
  addFruit: (newFruit) =>
    set(({ fruitList }) => {
      const newFruitList = [...fruitList, newFruit];
      return { fruitList: newFruitList };
    }),
  removeFruit: (fruitId) =>
    set(({ fruitList }) => {
      const newFruitList = fruitList.filter((fruits) => fruits.id !== fruitId);
      return { fruitList: newFruitList };
    }),
}));
