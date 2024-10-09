import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any
let complete_order_id: any

When('api user selesaikan pesanan', async function () {

requestBody = {
    warehouse_id: 1,
    period: "today",
    start_date: "",
    end_date: "",
    search: "",
    driver_id: 0,
    vendor_pic_id: 0,
    type: "all",
    image_url: "https://dressup.s3.ap-southeast-1.amazonaws.com/upload-images/2024/10/09/image-4fa5d7fe-2927-454a-aa3a-3f95a8f964a0.jpeg",
    view_deposit_order_ids: [
        this.transfer_document_id
    ]
}

response = await axios.post(`https://staging-api-dashboard.superapp.co.id/api/accounting/deposit/move-bulk-complete`, requestBody, {
        headers: {
            "Authorization": `Bearer ${this.token}`,
        }
})
    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))
    complete_order_id = response.data.result
    console.log('Complete Order Id: ', complete_order_id)

    this.complete_order_id = complete_order_id

})