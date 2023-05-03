import { ApplicationState } from "store";

export const headerSelector = (state: ApplicationState) => state.header;

export const openMenuSelector = (state: ApplicationState) => headerSelector(state).openMenu;
