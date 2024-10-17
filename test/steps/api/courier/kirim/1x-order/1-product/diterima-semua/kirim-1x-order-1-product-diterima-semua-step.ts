import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any

When('api courier user kirim 1x order 1 product diterima semua', async function () {

    console.log('api courier user kirim 1x order 1 product diterima semua')

    requestBody = {
        latitude: -7.257472,
        longitude: 122.7520867,
        goods_photos: ["https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png"],
        orders: [
            {
                is_no_rejected: true,
                order_id: this.first_order_id
            }
        ],
        payments: [
            {
                payment_photo: "https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png",
                payment_type: "cash"
            }
        ]
    }
    response = await axios.post('https://staging-api-courier.superapp.co.id/api/transaction',
        requestBody, {
        headers: {
            'Authorization': `Bearer ${this.token}`
        }
    })
    expect(response.status).to.equal(200)
        // console.log('Response Data:', JSON.stringify(response.data, null, 2))
})