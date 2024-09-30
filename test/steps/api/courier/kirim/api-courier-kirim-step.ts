import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any

When('api user courier kirim', async function () {

    const token = this.token;

    requestBody = {
        "latitude": -7.2574717,
        "longitude": 122.7520867,
        "goods_photo": "https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png",
        "reject_reason_note": "fraud",
        "customer_reject_reason": "Fraud Potential",
        "reject_reason": "Customer: Fraud Potential",
        "payments": [
            {
                "amount": 122222,
                "payment_photo": "https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png",
                "payment_type": "cash"
            }
        ],
        "orders": [
            {
                "grand_total": 122222,
                "is_no_rejected": false,
                "order_id": 1435419316, // must edit
                "items": [
                    {
                        "order_item_id": 6404274, // must edit
                        "reject_quantity": 3,
                        "reject_from": 4
                    }
                ]
            }
        ]
    }

    response = await axios.post('https://staging-api-courier.superapp.co.id/api/transaction', requestBody, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    console.log('Response Data:', JSON.stringify(response.data, null, 2));

    expect(response.status).to.equal(200)

    // expect(response.data).to.have.property('message')
    // expect(response.data.message).to.equal('Success')

    // expect(response.data).to.have.property('result')
    // expect(response.data.result).to.have.property('id')
    // expect(response.data.result).to.have.property('driver_id')
    // expect(response.data.result).to.have.property('courier_type')
    // expect(response.data.result).to.have.property('is_internal')
    // expect(response.data.result).to.have.property('name')
    // expect(response.data.result).to.have.property('phone')
    // expect(response.data.result).to.have.property('token')
    // expect(response.data.result).to.have.property('vendor_id')
    // expect(response.data.result).to.have.property('is_testing')
})