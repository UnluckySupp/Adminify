import { LocalStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";

import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
name: LocalStorageTypes.PEOPLE,
initialState: getLocalStorage(LocalStorageTypes.PEOPLE) ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string) : initialState,
reducers: {
 addPeople: (_state, action) => {
    setLocalStorage(LocalStorageTypes.PEOPLE, action.payload)
    return action.payload;
 },
}
})

export const {addPeople} = peopleSlice.actions