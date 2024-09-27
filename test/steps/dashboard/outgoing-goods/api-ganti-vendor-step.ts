import { When } from '@cucumber/cucumber'
import { expect } from 'chai'
import axios from 'axios'
import { orderId } from '../penjualan/api-get-order-detail-step'

let response: any
let requestBody: any

When('api user ganti vendor', async function () {
    
    requestBody = {
        "ids": [orderId],
        "global_ids": [],
        "vendor_pic_id_before": 499,
        "vendor_pic_id_after": 43,
        "reason": "Order jumlah besar"
    }
        response = await axios.put('https://staging-api-dashboard.superapp.co.id/api/v3/outgoing/v3/vendor/order/assign-vendor', requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
                // "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg0NiwiaWF0IjoxNzI3MTUyOTYwLCJleHAiOjE3MjcyMzkzNjB9.auN6kpmDJcxU7AESas784J9z9ziRL6P87bhzDbJDiuk`
            }
})

    expect(response.status).to.equal(200)
    // expect(response.data.result).to.have.property('id')
    
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

})

