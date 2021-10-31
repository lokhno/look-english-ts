import { ListState } from "../store/types";

interface IItem {
    _id: number;
}

export const excludeItems = <T extends { _id: number }>(state: ListState<T>): T[] => {
    return state.items.filter((item: T) => {
        let suitable = true;
        state.selectedItems.forEach((forDelete) => {
            if (item._id === forDelete) {
                suitable = false;
            }
        });
        return suitable;
    });
};

export const toggleSelectedItems = (selectedItems: Set<number>, id: number): Set<number> => {
    const tmpSelectedItemsSet: Set<number> = new Set(selectedItems);
    if (!tmpSelectedItemsSet.delete(id)) {
        tmpSelectedItemsSet.add(id);
    }
    return tmpSelectedItemsSet;
};

export const getItemById = <T extends IItem>(items: T[], id: number): T => {
    return items.filter((item) => item._id === id)[0];
};

export const shuffle = (arr: any) => {
    const putToCache = (elem: IItem, cache: IItem[]) => {
        if (cache.indexOf(elem) !== -1) {
            return;
        }
        var i = Math.floor(Math.random() * (cache.length + 1));
        cache.splice(i, 0, elem);
    };

    const madness = () => {
        var cache: IItem[] = [];
        return (a: IItem, b: IItem) => {
            putToCache(a, cache);
            putToCache(b, cache);
            return cache.indexOf(b) - cache.indexOf(a);
        };
    };
    var compare = madness();
    return arr.sort(compare);
};
