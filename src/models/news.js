import mongoose, {Schema} from "mongoose";

const newsSchema = new Schema(
    {
        title: String,
        description: String
    },
    {
        timestamps: true
    }
);

const News = mongoose.models.News || mongoose.model("News", newsSchema);

export default News;