import { When } from '@cucumber/cucumber'
import { expect } from 'chai'
import axios from 'axios'

let response: any
let requestBody: any

When('api user dikirim', async function () {
    
    console.log('api user dikirim')

    try {
        requestBody = {
        "ids": [this.first_order_id],
        "global_ids": [],
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
} catch (error) {
    requestBody = {
        "ids": [],
        "global_ids": [this.first_order_id],
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
}
})

