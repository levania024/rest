import { Schema } from "mongoose";

export const LocationSchema = new Schema(
    {
        country: { type: String, Require: true },
        area: { type: String, Require: true },
        labels: [{ type: String, Require: true }]
    },

    {
        timestamps: true,
        // @ts-ignore
        toJSON: { virtuals: true }
    }
)