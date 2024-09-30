import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let invoice: any
let orderId: any
let orderItemId: any

When('api user get order detail', async function () {

    await browser.pause(3000)
    
    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${this.id}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })

    expect(response.status).to.equal(200)

    invoice = response.data.result.invoice
    console.log('Invoice:', invoice)

    orderId = response.data.result.id
    console.log('Order ID:', orderId)

    orderItemId = response.data.result.detail_items[0].order_item_id
    console.log('Order Item ID:', orderItemId)

    this.invoice = invoice
    this.orderId = orderId
    this.orderItemId = orderItemId

    await browser.pause(3000)

})

// export { invoice, orderId, orderItemId }