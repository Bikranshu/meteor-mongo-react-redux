import * as ActionType from '../constants/actionType';

/**
 * These are the actions dispatched whenever the API is used
 */

export function listItem(entity, data) {
    return {
        type: ActionType.LIST,
        entity: entity,
        data: data
    }
}

export function selectItem(entity, data) {
    return {
        type: ActionType.SELECT_ITEM,
        entity: entity,
        data: data
    }
}

export function deleteItem(entity, id) {
    return {
        type: ActionType.DELETE,
        entity: entity,
        id: id
    }
}