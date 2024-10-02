import { When } from '@cucumber/cucumber'
import { expect } from 'chai'
import axios from 'axios'

let response: any
let requestBody: any

When('api user siap dikirim', async function () {
    
    try {
    
    requestBody = {
        "ids": [this.orderId],
        "global_ids": [], 
        "vehicle_type": "car",
        "action": "READY_TO_DELIVER"
    }
        response = await axios.put('https://staging-api-dashboard.superapp.co.id/api/v3/outgoing/v3/vendor/order/update-status', requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
})
    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))
    } catch (error) {
        requestBody = {
            "ids": [],
            "global_ids": [this.orderId], 
            "vehicle_type": "car",
            "action": "READY_TO_DELIVER"
        }
            response = await axios.put('https://staging-api-dashboard.superapp.co.id/api/v3/outgoing/v3/vendor/order/update-status', requestBody, {
                headers: {
                    "Authorization": `Bearer ${this.token}`
                }
    })
        expect(response.status).to.equal(200)
        // console.log('Response Data:', JSON.stringify(response.data, null, 2))
    }
})

