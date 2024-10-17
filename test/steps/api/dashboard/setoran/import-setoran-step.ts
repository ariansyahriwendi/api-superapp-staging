import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any
let order_amounts_id: any
let payment_type:any

When('api user import setoran', async function () {

    console.log('api user import setoran')

requestBody = {
    type: 'inhouse',
    warehouse_id: 1,
    driver_id: 300,
    vendor_pic_id: null,
    file: 'https://dressup.s3.ap-southeast-1.amazonaws.com/upload-document/2024/10/08/file-f2fe9e10-0c80-49e9-af99-a40c928e52e7.csv'
  }

response = await axios.post(`https://staging-api-dashboard.superapp.co.id/api/accounting/deposit/import-check`, requestBody, {
        headers: {
            "Authorization": `Bearer ${this.token}`,
        }
})
    expect(response.status).to.equal(200)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    order_amounts_id = response.data.result.data[0].order_amounts[0].id
    console.log('order amounts id:', order_amounts_id)

    payment_type = response.data.result.data[0].order_amounts[0].payment_type
    console.log('payment type:', payment_type)

    this.order_amounts_id = order_amounts_id
    this.payment_type = payment_type

})