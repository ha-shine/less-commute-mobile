/**
 * Created by shine on 29/6/2017.
 */
export const SELECT_WORK_ADDRESS = 'SELECT_WORK_ADDRESS';
export const REMOVE_WORK_ADDRESS = 'REMOVE_WORK_ADDRESS';
export const FETCH_ROUTE_FROM_SOURCE = 'FETCH_ROUTE_FROM_SOURCE';
export const FETCH_ROUTE_FROM_DESTINATION = 'FETCH_ROUTE_TO_DESTINATION';
export const SELECT_ROUTE_FROM_SOURCE = 'SELECT_ROUTE_FROM_SOURCE';
export const CLEAR_ROUTE_FROM_SOURCE = 'CLEAR_ROUTE_FROM_SOURCE';
export const SELECT_ROUTE_FROM_DESTINATION = 'SELECT_ROUTE_FROM_DESTINATION';
export const CLEAR_ROUTE_FROM_DESTINATION = 'CLEAR_ROUTE_FROM_DESTINATION';
export const CLEAR_SELECTED_ROUTE_IDS = 'CLEAR_SELECTED_ROUTE_IDS';
export const SET_DAYS = 'SET_DAYS';
export const CHOOSE_ADDITIONAL_ADDRESS = 'CHOOSE_ADDITIONAL_ADDRESS';
export const ADD_ADDITIONAL_ROUTES = 'ADD_ADDITIONAL_ROUTES';
export const CHANGE_ADDITIONAL_ROUTES = 'CHANGE_ADDITIONAL_ROUTES';
export const REMOVE_ADDITIONAL_ROUTES = 'REMOVE_ADDITIONAL_ROUTES';
export const CLEAR_ADDITIONAL_ROUTES = 'CLEAR_ADDITIONAL_ROUTES';
export const EXPAND_ROUTE = 'EXPAND_ROUTE';
export const CHANGE_ADDRESS_SORT_TYPE = 'CHANGE_ADDRESS_SORT_TYPE';
export const EMAIL = 'h@shine.rocks';
export const GITHUB_LINK = 'https://www.github.com/ha-shine/less-commute';
export const TWITTER_HANDLE = '@_sha94';
export const TWITTER_LINK = 'https://twitter.com/_sha94';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export enum CurrentModal {
    NewRouteModal,
    NewRouteSecondModal,
    ChangeRouteModal,
    RouteDeleteConfirmModal,
    EntryDialogModal,
    InformationModal,
    None
}
export enum AddressSortType {
    NONE,
    FARE,
    DURATION
}