import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add a text value"]
    }
  },
  { timestamps: true }
)

export default mongoose.models.Goal || mongoose.model('Goal', goalSchema)