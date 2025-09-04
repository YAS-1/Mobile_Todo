// This file contains the application's funtions and operations
// It has the query(request) for fetching todos 
// It has the mutations for making changes to the database and the entries

import { query, mutation } from "./_generated/server";
import { v } from "convex/values";


// Query for fetching todos
export const getTodos = query({
    // handler is the function that will be called when the query is run
    handler: async (ctx) => {
        const todos = await ctx.db.query("todos").order("desc").collect();
        return todos;
    
    }
});


// mutation for adding a todo
export const addTodo =  mutation({
    args: { text: v.string() }, // args are the arguments passed to the mutation
    handler: async (ctx, args) => {
        const todoId = await ctx.db.insert("todos", {
            text: args.text,
            isComplete: false
        });

        return todoId;
    }
});


// mutation for setting the todo as complete
export const
