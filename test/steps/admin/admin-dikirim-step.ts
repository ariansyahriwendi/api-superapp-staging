import { When } from '@cucumber/cucumber'
import { expect } from 'chai'
import axios from 'axios'
import { orderId } from './admin-order-detail-step'

let response: any
let requestBody: any

When('I dikirim', async function () {
    
    requestBody = {
        "global_ids": [
            orderId
        ],
        "ids": [],
        "vehicle_type": "car",
        "action": "DELIVERED"
    }
        response = await axios.put('https://staging-api-dashboard.superapp.co.id/api/v3/outgoing/v3/vendor/order/update-status', requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
})

    expect(response.status).to.equal(200)

    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

})

