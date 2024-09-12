import { missionsService } from "../services/MissionsService.js"
import BaseController from "../utils/BaseController.js"

export class MissionsController extends BaseController {
    constructor() {
        super('api/missions')
        this.router
            .get('', this.getMissions)
            .post('', this.createMissions)
            .put('/:missionId', this.updateMissions)


    }
    async updateMissions(request, response, next) {
        try {
            const missionId = request.params.mission
            const updateData = request.body
            const missionUpdate = await missionsService.updateMissions(missionId, updateData)
            response.send(missionUpdate)
        } catch (error) {
            next(error)
        }
    }

    async createMissions(request, response, next) {
        try {
            const missionData = request.body
            const mission = await missionsService.createMissions(missionData)
            response.send(mission)
        } catch (error) {
            next(error)
        }
    }



    async getMissions(request, response, next) {
        try {
            const missions = await missionsService.getMissions()
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }
}