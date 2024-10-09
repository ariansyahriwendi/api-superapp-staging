import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let invoice: any
let orderId: any
let orderItemId: any
let grandTotal: any
let quantity: any
let firstInvoice: any
let secondInvoice: any
let firstOrderId: any
let secondOrderId: any
let date: any

When('api user get order detail', async function () {

    await browser.pause(3000)

    console.log('api user get order detail')

    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${this.id}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })

    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    date = response.data.result.order_delivery.date

    invoice = response.data.result.invoice
    console.log('invoice:', invoice)

    orderId = response.data.result.id
    console.log('order id:', orderId)

    orderItemId = response.data.result.detail_items[0].order_item_id
    console.log('order item iD:', orderItemId)

    grandTotal = response.data.result.grand_total
    console.log('grand total:', grandTotal)

    quantity = response.data.result.order_items[0].quantity
    console.log('quantity:', quantity)

    this.date = date
    this.invoice = invoice
    this.orderId = orderId
    this.orderItemId = orderItemId
    this.grandTotal = grandTotal
    this.quantity = quantity
})

When('api user get order detail invoice global', async function () {

    await browser.pause(5000)

    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${this.id}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })

    // response = await axios.get('https://staging-api-dashboard.superapp.co.id/api/order/detail/1435420407', {
    // headers: {
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg0NiwiaWF0IjoxNzI3ODQxNDA5LCJleHAiOjE3Mjc5Mjc4MDl9.Bu6uinYpTeifykitpgSq4x2mDkjCGLlQMEWsI2Zz-ig',
    // }
    // })

    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))
    invoice = response.data.result.invoice_global
    console.log('Global Invoice:', invoice)

    orderId = response.data.result.id
    console.log('Order ID:', orderId)

    orderItemId = response.data.result.detail_items[0].order_item_id
    console.log('Order Item ID:', orderItemId)

    grandTotal = response.data.result.grand_total
    console.log('Grand Total:', grandTotal)

    // quantity = response.data.result.order_items[0].quantity
    // console.log('Quantity:', quantity)

    this.invoice = invoice
    this.orderId = orderId
    this.orderItemId = orderItemId
    this.grandTotal = grandTotal
    // this.quantity = quantity
})

When('api user get first order detail', async function () {

    await browser.pause(3000)

    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${this.firstId}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })

    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))
    firstInvoice = response.data.result.invoice
    invoice = response.data.result.invoice
    console.log('First Invoice:', invoice)

    firstOrderId = response.data.result.id
    orderId = response.data.result.id
    console.log('First Order ID:', orderId)

    orderItemId = response.data.result.detail_items[0].order_item_id
    console.log('Order Item ID:', orderItemId)

    grandTotal = response.data.result.grand_total
    console.log('Grand Total:', grandTotal)

    quantity = response.data.result.order_items[0].quantity
    console.log('Quantity:', quantity)

    this.firstInvoice = firstInvoice
    this.firstOrderId = firstOrderId
    this.invoice = invoice
    this.orderId = orderId
    this.orderItemId = orderItemId
    this.grandTotal = grandTotal
    this.quantity = quantity
})

When('api user get second order detail', async function () {

    await browser.pause(3000)

    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${this.secondId}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })

    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))
    secondInvoice = response.data.result.invoice
    invoice = response.data.result.invoice
    console.log('Second Invoice:', invoice)

    secondOrderId = response.data.result.id
    orderId = response.data.result.id
    console.log('Second Order ID:', orderId)

    orderItemId = response.data.result.detail_items[0].order_item_id
    console.log('Order Item ID:', orderItemId)

    grandTotal = response.data.result.grand_total
    console.log('Grand Total:', grandTotal)

    quantity = response.data.result.order_items[0].quantity
    console.log('Quantity:', quantity)

    this.secondInvoice = secondInvoice
    this.secondOrderId = secondOrderId
    this.invoice = invoice
    this.orderId = orderId
    this.orderItemId = orderItemId
    this.grandTotal = grandTotal
    this.quantity = quantity
})