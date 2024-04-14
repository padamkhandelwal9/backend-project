import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudinary url for taking vids and pictures
      required: true,
    },
    thumbnail:{
      type: String, //cloudinary url for taking vids and pictures
      required: true,
    },
    title:{
        type: String, 
        required: true,
      },
      description:{
        type: String, 
        required: true,
      },
      duration:{
        type:Number, //cloudinary for duration
        required:true
      },
      views:{
        type:Number,
        default:0
      },
      isPublished:{
        type:Boolean,
        default:true
      },
      owner:{
        type: Schema.Types.ObjectId,
         ref:"User"
      },
  },
  {
    timestamps: true,
  }
)

videoSchema.plugin(mongooseAggregatePaginate) //mongoose method that allows you to add mongoose plugins
//method that can be used to paginate query results when performing aggregate queries.

export const Video = mongoose.model("Video", videoSchema);

