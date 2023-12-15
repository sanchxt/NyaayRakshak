import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    dateOfBirth: {
      type: Date,
    },
    activeCase: {
      type: Boolean,
      default: false,
    },
    nextHearingDate: {
      type: Date,
    },
    previousHearingDate: {
      type: Date,
    },
    currentLawyer: {
      type: String,
    },
    judgeName: {
      type: String,
    },
    currentProfilePicture: {
      type: String,
    },
    role: {
      type: String,
      enum: ["prisoner", "lawyer"],
      required: true,
    },
    pendingCases: {
      type: Number,
      default: 0,
    },
    casesSolved: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

export default User;
