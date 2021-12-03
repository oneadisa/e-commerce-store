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
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    }

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
}, {
    timestamps: true,
});

const Store = mongoose.model("Store", storeSchema);

export default Store;