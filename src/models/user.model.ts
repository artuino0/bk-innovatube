import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The name is required"],
    },
    lastname: {
      type: String,
      required: [true, "The name is required"],
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "The password is required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.toJSON = function () {
  const { __v, _id, password, ...user } = this.toObject();
  return { id: _id, ...user };
};

export const UserModel = model("User", UserSchema);
