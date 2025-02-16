import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    messages: defineTable({
      body: v.string(),
      sender: v.id("users"),
      recipient: v.id("users"),
      timestamp: v.string(),
      role:v.string()
    }).index("by_participants", ["sender", "recipient"]),
    users: defineTable({
      name: v.string(),
      tokenIdentifier: v.string(),
    }).index("by_token", ["tokenIdentifier"]),
  });