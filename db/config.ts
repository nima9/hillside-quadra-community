import { defineDb, defineTable, column } from "astro:db";

const Dates = defineTable({
  columns: {
    eventName: column.text(),
    eventType: column.text(),
    eventDate: column.date(),
    timeStart: column.text(),
    timeEnd: column.text(),
    description: column.text(),
    address: column.text(),
  },
});

export default defineDb({
  tables: { Dates },
});
