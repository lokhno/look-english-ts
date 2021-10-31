export interface ListState<T> {
    selectedItems: Set<number>;
    items: T[];
}
