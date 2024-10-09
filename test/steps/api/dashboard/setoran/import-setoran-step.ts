import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any
let orderAmountsId: any
let payment_type:any

When('api user import setoran', async function () {

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

    orderAmountsId = response.data.result.data[0].order_amounts[0].id
    console.log('Order Amounts Id:', orderAmountsId)

    payment_type = response.data.result.data[0].order_amounts[0].payment_type
    console.log('Payment Type:', payment_type)

    this.orderAmountsId = orderAmountsId
    this.payment_type = payment_type



})