import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'
import { id } from './api-order-marketplace-step'

let response: any
let invoice: any
let orderId: any
let orderItemId: any

When('api user get order detail', async function () {
    
    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${id}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })

    // response = await axios.get('https://staging-api-dashboard.superapp.co.id/api/order/detail/1435419666', {
    //     headers: {
    //         "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg0NiwiaWF0IjoxNzI2NzQwODI0LCJleHAiOjE3MjY4MjcyMjR9.uSvWC43sSjRk6nI6QbXYO_-N6dVyl09fe4InqS4k34g`
    //     }
    // })

    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    expect(response.status).to.equal(200)

    invoice = response.data.result.invoice
    console.log('Invoice:', invoice)

    orderId = response.data.result.id
    console.log('Order ID:', orderId)

    orderItemId = response.data.result.detail_items[0].order_item_id
    console.log('Order Item ID:', orderItemId)

})

export { invoice, orderId, orderItemId }