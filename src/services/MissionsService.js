import { dbContext } from "../db/DbContext.js"

class MissionsService {
    async updateMissions(missionId, updateData) {
        const missionToUpdate = await dbContext.Missions.findById(missionId);
        console.log('Update Data:', updateData);
        if (updateData.codename != undefined) missionToUpdate.codename = updateData.codename
        if (updateData.completed != undefined) missionToUpdate.completed = updateData.completed
        if (updateData.year != undefined) missionToUpdate.year = updateData.year
        if (updateData.objective != undefined) missionToUpdate.objective = updateData.objective

        await missionToUpdate.save();
        return missionToUpdate;
    }

    async createMissions(missionData) {
        const mission = await dbContext.Missions.create(missionData);
        await mission.populate('location');
        await mission.populate('rat', '-name -picture');

        return mission;
    }

    async getMissionById(ratId) {
        const missions = await dbContext.Missions.find({ ratId: ratId })
            .populate('location')
            .populate('rat', '-name -picture');
        return missions;
    }

    async getMissionByLocationId(locationId) {
        const missions = await dbContext.Missions.find({ locationId: locationId })
            .populate('location')
            .populate('rat', '-name -picture');
        return missions;
    }

    async getMissions() {
        const missions = await dbContext.Missions.find()
            .populate('location')
            .populate('rat', '-name -picture');
        return missions;
    }
}

export const missionsService = new MissionsService();