import { When } from '@cucumber/cucumber'
import { expect } from 'chai'
import axios from 'axios'

let response: any

When('api user publish mission', async function () {
    response = await axios.put(
        `https://staging-api-dashboard.superapp.co.id/api/mission/publish/${this.missionId}`, 
        {}, 
        {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })

        expect(response.status).to.equal(200)

})
