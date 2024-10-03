import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let invoice: any
let id: any

When('api user get order id', async function () {

    await browser.pause(3000)
    
    response = await axios.get(`https://staging-api-dashboard.superapp.co.id/api/order/list`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
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

    invoice = this.invoice

    id = response.data.result.data.find(item => item.invoice === invoice)?.id
    // console.log("Id:", id)

    this.id = id

})

// export { invoice, orderId, orderItemId }