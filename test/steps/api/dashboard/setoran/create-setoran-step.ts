import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any

When('api user create setoran', async function () {

requestBody = {
    type: "inhouse",
    warehouse_id: 1,
    driver_id: 300,
    vendor_pic_id: null,
    orders: [
        {
            id: this.orderId,
            amount_transfer: 0,
            amount_cash: this.grandTotal,
            order_amounts: [
                {
                    amount: this.grandTotal,
                    id: this.orderAmountsId,
                    image: "",
                    is_deleted: 0,
                    order_id: this.orderId,
                    payment_type: this.payment_type
                }
            ]
        }
    ],
    file: ""
}

response = await axios.post(`https://staging-api-dashboard.superapp.co.id/api/accounting/deposit/create`, requestBody, {
        headers: {
            "Authorization": `Bearer ${this.token}`,
        }
})
    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))
})