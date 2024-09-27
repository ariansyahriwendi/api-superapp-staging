import { When } from '@cucumber/cucumber'
import { expect } from 'chai'
import axios from 'axios'
import { orderId } from '../penjualan/api-get-order-detail-step'

let response: any
let requestBody: any

When('api user assign kurir', async function () {
    
    requestBody = {
        "ids": [orderId],
        "global_ids": [],
        "type": "mobil",
        "driver_id": 300,
        "driver_name": null,
        "helper_id": null,
        "vehicle_id": 1,
        "plate_vehicle": null
    }
        response = await axios.put('https://staging-api-dashboard.superapp.co.id/api/v3/outgoing/v3/vendor/order/assign-courier', requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
})

    expect(response.status).to.equal(200)

    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

})

