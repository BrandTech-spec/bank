import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    name: v.string(),
    _id: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("This TypeScript function is running on the server.");
    await ctx.db.insert("users", {
      name: args.name,
      tokenIdentifier: args._id,
    });
  },
});

export const sendMessage = mutation({
  args: {
    sender: v.string(),
    body: v.string(),
    reciever: v.string(),
    role: v.string(),
    time: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("This TypeScript function is running on the server.");
    await ctx.db.insert("messages", {
      sender: args.sender,
      body: args.body,
      recipient: args.reciever,
      role: args.role,
      timestamp: args.time,
    });
  },
});

export const getMessages = query({
  args: { sender: v.optional(v.string()),  reciever:v.optional( v.string() )},
  handler: async (ctx, args) => {
    // Get most recent messages first
    const messages = await ctx.db
      .query("messages")
      .filter((q) => q.add(q.eq(q.field("recipient"), args?.reciever) , q.eq(q.field("sender"), args?.sender)) )
      .order("desc")
      .take(50)
      
    // Reverse the list so that it's in a chronological order.
    return messages.reverse();
  },
});

{/*export const getUser = query({
  args: {
    id:v.string(")
  },
  handler: async (ctx, args) => {
    // Get most recent messages first
    const messages =  await ctx.db.get(args?.id);
    // Reverse the list so that it's in a chronological order.
    return messages;
  },
});
*/}