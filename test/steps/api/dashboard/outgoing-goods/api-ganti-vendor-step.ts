import { When } from '@cucumber/cucumber'
import { expect } from 'chai'
import axios from 'axios'

let response: any
let requestBody: any

When('api user ganti vendor', async function () {

    console.log('api user ganti vendor')

    try {
        requestBody = {
            "ids": [this.first_order_id],
            "global_ids": [],
            "vendor_pic_id_before": 499,
            "vendor_pic_id_after": 43,
            "reason": "Order jumlah besar"
        }

        response = await axios.put('https://staging-api-dashboard.superapp.co.id/api/v3/outgoing/v3/vendor/order/assign-vendor', requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })

        expect(response.status).to.equal(200)

    } catch (error) {

            requestBody = {
                "ids": [],
                "global_ids": [this.first_order_id],
                "vendor_pic_id_before": 499,
                "vendor_pic_id_after": 43,
                "reason": "Order jumlah besar"
            }

            response = await axios.put('https://staging-api-dashboard.superapp.co.id/api/v3/outgoing/v3/vendor/order/assign-vendor', requestBody, {
                headers: {
                    "Authorization": `Bearer ${this.token}`
                }
            })

            expect(response.status).to.equal(200)

    }
})

