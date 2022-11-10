import { isBefore, startOfTomorrow } from "date-fns";

export const inHandsDate = (date) => isBefore(new Date(date), new Date()) ? startOfTomorrow().toDateString() : date.toDateString()
