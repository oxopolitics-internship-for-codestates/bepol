"use strict";
import mongoose from "mongoose";

const newSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

const User = mongoose.model("User", newSchema);
export default User;
