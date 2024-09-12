import { Schema } from "mongoose";

export const RatSchema = new Schema(
    {
        Name: { type: String, Require: true },
        callsign: { type: String, Require: true },
        picture: { type: String, Require: true },
        specialties: [{ type: String, Require: true }]
    },

    {
        timestamps: true,
        // @ts-ignore
        toJSON: { virtuals: true }
    }
)