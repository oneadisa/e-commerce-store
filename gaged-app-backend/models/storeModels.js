import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: true,
    },
    tagline: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
        lowercase: true,
    },
    logo: {
        type: String,
        required: true,
        default: "https://www.freepik.com/free-photo/blue-concrete-wall-textures-background_4202473.htm#page=1&query=blue%20background&position=3&from_view=keyword",
    },
    business: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "mySignedUpBusinessTable",
    },
}, {
    timestamps: true,
});

const newStore = mongoose.model("Store", storeSchema);

export default newStore;