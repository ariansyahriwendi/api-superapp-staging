import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let date: any

let first_order_invoice: any
let second_order_invoice: any
let first_order_id: any
let second_order_id: any

let first_order_first_product_order_item_id: any
let first_order_second_product_order_item_id: any
let first_order_third_product_order_item_id: any
let first_order_fourth_product_order_item_id: any

let first_order_first_product_quantity: any
let first_order_second_product_quantity: any
let first_order_third_product_quantity: any
let first_order_fourth_product_quantity: any

let second_order_first_product_order_item_id: any
let second_order_second_product_order_item_id: any
let second_order_third_product_order_item_id: any
let second_order_fourth_product_order_item_id: any

let second_order_first_product_quantity: any
let second_order_second_product_quantity: any
let second_order_third_product_quantity: any
let second_order_fourth_product_quantity: any

let first_order_grand_total: any
let second_order_grand_total: any

let global_invoice: any

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
    console.log('date: ', date)

    first_order_invoice = response.data.result.invoice
    console.log('invoice: ', first_order_invoice)

    first_order_id = response.data.result.id
    console.log('order id: ', first_order_id)

    first_order_first_product_order_item_id = response.data.result.detail_items[0].order_item_id
    console.log('order item id: ', first_order_first_product_order_item_id)

    first_order_first_product_quantity = response.data.result.order_items[0].quantity
    console.log('quantity: ', first_order_first_product_quantity)
    
    first_order_grand_total = response.data.result.grand_total
    console.log('grand total: ', first_order_grand_total)

    this.date = date
    this.first_order_invoice = first_order_invoice
    this.first_order_id = first_order_id
    this.first_order_first_product_order_item_id = first_order_first_product_order_item_id
    this.first_order_first_product_quantity = first_order_first_product_quantity
    this.first_order_grand_total = first_order_grand_total
})

When('api user get order detail 4 product', async function () {

    await browser.pause(3000)

    console.log('api user get order detail 4 product')

    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${this.id}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })

    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    date = response.data.result.order_delivery.date

    first_order_invoice = response.data.result.invoice
    console.log('invoice: ', first_order_invoice)

    first_order_id = response.data.result.id
    console.log('order id: ', first_order_id)

    first_order_first_product_order_item_id = response.data.result.detail_items[0].order_item_id
    console.log('first product order item id: ', first_order_first_product_order_item_id)

    first_order_first_product_quantity = response.data.result.order_items[0].quantity
    console.log('first product quantity: ', first_order_first_product_quantity)

    first_order_second_product_order_item_id = response.data.result.detail_items[1].order_item_id
    console.log('second product order item id: ', first_order_second_product_order_item_id)

    first_order_second_product_quantity = response.data.result.order_items[1].quantity
    console.log('second product quantity: ', first_order_second_product_quantity)

    first_order_third_product_order_item_id = response.data.result.detail_items[2].order_item_id
    console.log('third product order item id: ', first_order_third_product_order_item_id)

    first_order_third_product_quantity = response.data.result.order_items[2].quantity
    console.log('third product quantity: ', first_order_third_product_quantity)

    first_order_fourth_product_order_item_id = response.data.result.detail_items[3].order_item_id
    console.log('fourth product order item id: ', first_order_fourth_product_order_item_id)

    first_order_fourth_product_quantity = response.data.result.order_items[3].quantity
    console.log('fourth product quantity: ', first_order_fourth_product_quantity)

    first_order_grand_total = response.data.result.grand_total
    console.log('grand total: ', first_order_grand_total)

    this.date = date
    this.first_order_invoice = first_order_invoice
    this.first_order_id = first_order_id
    this.first_order_first_product_order_item_id = first_order_first_product_order_item_id
    this.first_order_first_product_quantity = first_order_first_product_quantity
    this.first_order_second_product_order_item_id = first_order_second_product_order_item_id
    this.first_order_second_product_quantity = first_order_second_product_quantity
    this.first_order_third_product_order_item_id = first_order_third_product_order_item_id
    this.first_order_third_product_quantity = first_order_third_product_quantity
    this.first_order_fourth_product_order_item_id = first_order_fourth_product_order_item_id
    this.first_order_fourth_product_quantity = first_order_fourth_product_quantity
    this.first_order_grand_total = first_order_grand_total
})

When('api user get first order detail', async function () {

    await browser.pause(3000)

    console.log('api user get first order detail')

    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${this.firstId}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })

    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    date = response.data.result.order_delivery.date

    first_order_invoice = response.data.result.invoice
    console.log('first order invoice: ', first_order_invoice)

    first_order_id = response.data.result.id
    console.log('first order id: ', first_order_id)

    first_order_first_product_order_item_id = response.data.result.detail_items[0].order_item_id
    console.log('first product order item id: ', first_order_first_product_order_item_id)

    first_order_first_product_quantity = response.data.result.order_items[0].quantity
    console.log('first product quantity: ', first_order_first_product_quantity)
    
    first_order_grand_total = response.data.result.grand_total
    console.log('first order grand total: ', first_order_grand_total)

    this.date = date
    this.first_order_invoice = first_order_invoice
    this.first_order_id = first_order_id
    this.first_order_first_product_order_item_id = first_order_first_product_order_item_id
    this.first_order_first_product_quantity = first_order_first_product_quantity
    this.first_order_grand_total = first_order_grand_total
})

When('api user get second order detail', async function () {

    await browser.pause(3000)

    console.log('api user get second order detail')

    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${this.secondId}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })

    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    date = response.data.result.order_delivery.date

    second_order_invoice = response.data.result.invoice
    console.log('second order invoice: ', second_order_invoice)

    second_order_id = response.data.result.id
    console.log('second order id: ', second_order_id)

    second_order_first_product_order_item_id = response.data.result.detail_items[0].order_item_id
    console.log('second order first product order item id: ', second_order_first_product_order_item_id)

    second_order_first_product_quantity = response.data.result.order_items[0].quantity
    console.log('second order first product quantity: ', second_order_first_product_quantity)
    
    second_order_grand_total = response.data.result.grand_total
    console.log('second order grand total: ', second_order_grand_total)

    this.date = date
    this.second_order_invoice = second_order_invoice
    this.second_order_id = second_order_id
    this.second_order_first_product_order_item_id = second_order_first_product_order_item_id
    this.second_order_first_product_quantity = second_order_first_product_quantity
    this.second_order_grand_total = second_order_grand_total
})

When('api user get first order detail 4 product', async function () {

    await browser.pause(3000)

    console.log('api user get first order detail')

    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${this.firstId}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })

    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    date = response.data.result.order_delivery.date

    first_order_invoice = response.data.result.invoice
    console.log('first order invoice: ', first_order_invoice)

    first_order_id = response.data.result.id
    console.log('first order id: ', first_order_id)

    first_order_first_product_order_item_id = response.data.result.detail_items[0].order_item_id
    console.log('first order first product order item id: ', first_order_first_product_order_item_id)

    first_order_first_product_quantity = response.data.result.order_items[0].quantity
    console.log('first order first product quantity: ', first_order_first_product_quantity)

    first_order_second_product_order_item_id = response.data.result.detail_items[1].order_item_id
    console.log('first order second product order item id: ', first_order_second_product_order_item_id)

    first_order_second_product_quantity = response.data.result.order_items[1].quantity
    console.log('first order second product quantity: ', first_order_second_product_quantity)

    first_order_third_product_order_item_id = response.data.result.detail_items[2].order_item_id
    console.log('first order third product order item id: ', first_order_third_product_order_item_id)

    first_order_third_product_quantity = response.data.result.order_items[2].quantity
    console.log('first order third product quantity: ', first_order_third_product_quantity)

    first_order_fourth_product_order_item_id = response.data.result.detail_items[3].order_item_id
    console.log('first order fourth product order item id: ', first_order_fourth_product_order_item_id)

    first_order_fourth_product_quantity = response.data.result.order_items[3].quantity
    console.log('first order fourth product quantity: ', first_order_fourth_product_quantity)

    first_order_grand_total = response.data.result.grand_total
    console.log('first order grand total: ', first_order_grand_total)

    this.date = date
    this.first_order_invoice = first_order_invoice
    this.first_order_id = first_order_id
    this.first_order_first_product_order_item_id = first_order_first_product_order_item_id
    this.first_order_first_product_quantity = first_order_first_product_quantity
    this.first_order_second_product_order_item_id = first_order_second_product_order_item_id
    this.first_order_second_product_quantity = first_order_second_product_quantity
    this.first_order_third_product_order_item_id = first_order_third_product_order_item_id
    this.first_order_third_product_quantity = first_order_third_product_quantity
    this.first_order_fourth_product_order_item_id = first_order_fourth_product_order_item_id
    this.first_order_fourth_product_quantity = first_order_fourth_product_quantity
    this.first_order_grand_total = first_order_grand_total
})

When('api user get second order detail 4 product', async function () {

    await browser.pause(3000)

    console.log('api user get second order detail 4 product')

    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${this.secondId}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })

    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    date = response.data.result.order_delivery.date

    second_order_invoice = response.data.result.invoice
    console.log('second order invoice: ', second_order_invoice)

    second_order_id = response.data.result.id
    console.log('second order id: ', second_order_id)

    second_order_first_product_order_item_id = response.data.result.detail_items[0].order_item_id
    console.log('second order first product order item id: ', second_order_first_product_order_item_id)

    second_order_first_product_quantity = response.data.result.order_items[0].quantity
    console.log('second order first product quantity: ', second_order_first_product_quantity)

    second_order_second_product_order_item_id = response.data.result.detail_items[1].order_item_id
    console.log('second order second product order item id: ', second_order_second_product_order_item_id)

    second_order_second_product_quantity = response.data.result.order_items[1].quantity
    console.log('second order second product quantity: ', second_order_second_product_quantity)

    second_order_third_product_order_item_id = response.data.result.detail_items[2].order_item_id
    console.log('second order third product order item id: ', second_order_third_product_order_item_id)

    second_order_third_product_quantity = response.data.result.order_items[2].quantity
    console.log('second order third product quantity: ', second_order_third_product_quantity)

    second_order_fourth_product_order_item_id = response.data.result.detail_items[3].order_item_id
    console.log('second order fourth product order item id: ', second_order_fourth_product_order_item_id)

    second_order_fourth_product_quantity = response.data.result.order_items[3].quantity
    console.log('second order fourth product quantity: ', second_order_fourth_product_quantity)

    second_order_grand_total = response.data.result.grand_total
    console.log('second order grand total: ', second_order_grand_total)

    this.date = date
    this.second_order_invoice = second_order_invoice
    this.second_order_id = second_order_id
    this.second_order_first_product_order_item_id = second_order_first_product_order_item_id
    this.second_order_first_product_quantity = second_order_first_product_quantity
    this.second_order_second_product_order_item_id = second_order_second_product_order_item_id
    this.second_order_second_product_quantity = second_order_second_product_quantity
    this.second_order_third_product_order_item_id = second_order_third_product_order_item_id
    this.second_order_third_product_quantity = second_order_third_product_quantity
    this.second_order_fourth_product_order_item_id = second_order_fourth_product_order_item_id
    this.second_order_fourth_product_quantity = second_order_fourth_product_quantity
    this.second_order_grand_total = second_order_grand_total
})

When('api user get order detail global invoice', async function () {

    await browser.pause(5000)

    console.log('api user get order detail global invoice')

    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/detail/${this.id}`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
    })

    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    date = response.data.result.order_delivery.date

    global_invoice = response.data.result.invoice_global
    console.log('global invoice: ', global_invoice)

    this.date = date
    this.global_invoice
})