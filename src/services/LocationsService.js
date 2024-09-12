import { dbContext } from "../db/DbContext.js"

class LocationsService {
    async getLocations() {
        const locations = await dbContext.Rats.find()
        return locations
    }
}

export const locationsService = new LocationsService()