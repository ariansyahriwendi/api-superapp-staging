import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let invoice: any
let orderId: any
let orderItemId: any

When('api user get order list', async function () {

    // await browser.pause(3000)
    
    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/list`, {
        headers: {
            // "Authorization": `Bearer ${this.token}`
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg0NiwiaWF0IjoxNzI3ODQxNDA5LCJleHAiOjE3Mjc5Mjc4MDl9.Bu6uinYpTeifykitpgSq4x2mDkjCGLlQMEWsI2Zz-ig`
            //  "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmEuamF5YWRpQG51c2FudGFyYS50ZWNobm9sb2d5IiwiaWF0IjoxNjg4NzE2MDA3LCJleHAiOjE2ODkzMjA4MDd9.4bPa_tlSFjqOZ5GBgzuOj80fh2FbnmcaGyI9ZA_ORYo`

        },
        params: {
            status: -5,
            group_type: 'all',
            is_from: 'all',
            payment_status: -1,
            payment_type: 'all',
            frauds: -1,
            order_type: 'all',
            periode: 'this_day',
            warehouse_id: 1,
            search: '',
            limit: 10,
            page: 1,
            sort_by: 'created_at',
            sort_type: 'desc'
        }
    })

    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    invoice = "T241002-110"

    orderId = response.data.result.data.find(item => item.invoice === invoice)?.id
    console.log("Order Id:", orderId)

    // invoice = response.data.result.invoice
    // console.log('Invoice:', invoice)

    // orderId = response.data.result.id
    // console.log('Order ID:', orderId)

    // orderItemId = response.data.result.detail_items[0].order_item_id
    // console.log('Order Item ID:', orderItemId)

    // this.invoice = invoice
    // this.orderId = orderId
    // this.orderItemId = orderItemId
})

// export { invoice, orderId, orderItemId }