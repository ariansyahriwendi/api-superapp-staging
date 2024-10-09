import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any

When('api user complete order', async function () {

requestBody = {
    image: "https://dressup.s3.ap-southeast-1.amazonaws.com/upload-images/2024/10/09/image-a753a185-97f2-497a-a82f-f739d39d7202.jpeg",
    bulk_complete_id: this.complete_order_id
}

response = await axios.put(`https://staging-api-dashboard.superapp.co.id/api/accounting/bulk-complete/bulk-complete-order`, requestBody, {
        headers: {
            "Authorization": `Bearer ${this.token}`,
        }
})
    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))
})