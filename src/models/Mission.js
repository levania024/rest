import { Schema } from "mongoose";

export const MissionSchema = new Schema(
    {
        codename: { type: String, Require: true },
        objective: { type: String, Require: true },
        year: { type: String, Require: true },
        completed: { type: Boolean, require: true, default: false },
        ratId: { type: Schema.ObjectId, Require: true, ref: 'Rat' },
        locationId: { type: Schema.ObjectId, Require: true, ref: 'Location' }
    },

    {
        timestamps: true,
        // @ts-ignore
        toJSON: { virtuals: true }
    }
)

MissionSchema.virtual('location', {
    localField: 'locationId',
    ref: 'Location',
    foreignField: '_id',
    justOne: true
})

MissionSchema.virtual('rat', {
    localField: 'ratId',
    ref: 'Rat',
    foreignField: '_id',
    justOne: true
})