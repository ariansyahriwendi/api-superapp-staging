import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let transfer_document_id: any

When('api user get transfer document id', async function () {

    console.log('api user get transfer document id')

response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/accounting/deposit/list-recap-invoice?page=1&limit=10&sort_by=id&sort_type=DESC&warehouse_id=1&type=all&period=today&vendor_pic_id=0&driver_id=0`, {
        headers: {
            "Authorization": `Bearer ${this.token}`,
        }
})
    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    transfer_document_id = response.data.result.data.find((item: { first_order_invoice: any }) => item.first_order_invoice === this.first_order_invoice).id
    console.log('transfer document id:', transfer_document_id)

    this.transfer_document_id = transfer_document_id

})

When('api user get transfer document id global invoice', async function () {

    console.log('api user get transfer document id global invoice')

response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/accounting/deposit/list-recap-invoice?page=1&limit=10&sort_by=id&sort_type=DESC&warehouse_id=1&type=all&period=today&vendor_pic_id=0&driver_id=0`, {
        headers: {
            "Authorization": `Bearer ${this.token}`,
        }
})
    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    transfer_document_id = response.data.result.data.find((item: { global_invoice: any }) => item.global_invoice === this.global_invoice).id
    console.log('transfer document id:', transfer_document_id)

    this.transfer_document_id = transfer_document_id

})

