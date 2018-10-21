import { types } from "mobx-state-tree";
import Item from "./Item";

const ItemList = types
  .model("ItemList", {
    items: types.array(Item)
  })
  .actions(self => ({
    add(item) {
      self.items.push(item);
    },
    remove(item) {
      self.items.splice(self.items.indexOf(item), 1);
    }
  }));

export default ItemList;
