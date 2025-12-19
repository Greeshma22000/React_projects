import {create} from "zustand";

export const usePlanner = create((set)=>({
    tasks: [],
    addTask: (payload)=>set((state)=>({
        tasks: [...state.tasks, payload]
    }))
}))