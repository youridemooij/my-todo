export interface TodoListModel {
    id: number,
    name: string,

    items?: TodoListItemModel[]
}

export interface TodoListItemModel {
    id: number,
    listId: number,

    name: string,
    state?: number,

    order: number
}