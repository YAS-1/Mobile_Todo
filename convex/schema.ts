import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Creating the Schema, table and table attributes
export default defineSchema({
    todos: defineTable({
        text: v.string(),
        isComplete: v.boolean(),
    }),
});