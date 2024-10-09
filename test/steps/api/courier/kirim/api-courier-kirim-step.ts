import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any

When('api user courier kirim', async function () {

    requestBody = {
        "latitude": -7.257472,
        "longitude": 122.7520867,
        "goods_photos": ["https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png"],
        "reject_reason_note": "",
        "customer_reject_reason": "",
        "reject_reason": "",
        "payments": [
            {
                "amount": this.grandTotal,
                "payment_photo": "https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png",
                "payment_type": "cash"
            }
        ],
        "orders": [
            {
                "grand_total": this.grandTotal,
                "is_no_rejected": true,
                "order_id": this.orderId,
                "items": [
                    {
                        "order_item_id": this.orderItemId,
                        "reject_quantity": 0,
                        "reject_from": 0
                    }
                ]
            }
        ]
    }
    response = await axios.post('https://staging-api-courier.superapp.co.id/api/transaction', requestBody, {
        headers: {
            'Authorization': `Bearer ${this.token}`
        }
    })
    expect(response.status).to.equal(200)
})