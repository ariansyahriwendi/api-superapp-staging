import { When } from '@cucumber/cucumber'
import { expect } from 'chai'
import axios from 'axios'

let missionId: number
let response: any

When('api user get mission', async function () {

    await browser.pause(3000)

    response = await axios.get('https://staging-api-dashboard.superapp.co.id/api/mission/list?page=1&limit=10&sort_by=created_at&sort_type=desc&warehouse_id=1&user_level=customer&target_type=all&period=all&expiration_period=all&condition=all&status=-2&segment_id=-1&dropdown=all', {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })

    expect(response.status).to.equal(200)

    missionId = response.data.result.data[0].id
    console.log('Mission Id:', missionId)

    this.missionId = missionId
    
})
