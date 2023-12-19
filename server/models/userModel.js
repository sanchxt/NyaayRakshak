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
    dateOfBirth: {
      type: Date,
    },
    age: {
      type: Number,
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
      default: "None",
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
    caseID: {
      type: Number,
      default: 0,
    },
    courtLevel: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (this.dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(this.dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    this.age = age;
  }

  next();
});

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
