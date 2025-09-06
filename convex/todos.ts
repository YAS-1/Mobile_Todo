// This file contains the application's funtions and operations
// It has the query(request) for fetching todos 
// It has the mutations for making changes to the database and the entries

import { query, mutation } from "./_generated/server";
import { ConvexError, v } from "convex/values";


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
export const toggleTodo = mutation({
    args: { id: v.id("todos") },
    handler: async(ctx, args) => {
        const todo = await ctx.db.get(args.id) // get the todo from the database
        if(!todo) throw new ConvexError("Todo not found"); // if the todo is not found, throw an error
    
        await ctx.db.patch(args.id, {
            isComplete: !todo.isComplete // change the isComplete value
        })
    }
});


// mutation for deleting a todo
export const deleteTodo = mutation({
    args: { id: v.id("todos") }, // the arg is the id of the todo to delete, and its picked from the todos table
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id); // delete the todo from the database
    }
});


// mutation to update a todo
export const updateTodo = mutation({
    args: { id: v.id("todos"), text: v.string() }, // the args are the id of the todo to update and the text of the todo
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            text: args.text // update the text of the todo
        });
    }
});


// mutation to clearAllTodos
export const clearAllTodos = mutation({
    handler: async (ctx) => {
        const todos = await ctx.db.query("todos").collect();

        // delete all the todos
        for(const todo of todos){
            await ctx.db.delete(todo._id);
        }

        return { deletedCount: todos.length };
    }
});