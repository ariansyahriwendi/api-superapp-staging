import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any

When('api user create setoran', async function () {

    console.log('api user create setoran')

requestBody = {
    "type": "inhouse",
    "warehouse_id": 1,
    "driver_id": 300,
    "orders": [
      {
        "id": this.first_order_id,
        "amount_transfer": 0,
        "amount_cash": this.first_order_grand_total,
        "order_amounts": [
          {
            "amount": this.first_order_grand_total,
            "is_deleted": 0,
            "order_id": this.first_order_id,
            "payment_type": "cash"
          }
        ]
      }
    ]
  }
console.log('Request Body:', JSON.stringify(requestBody, null, 2))

// response = await axios.post(`https://staging-api-dashboard.superapp.co.id/api/accounting/deposit/create`, requestBody, {
//         headers: {
//             "Authorization": `Bearer ${this.token}`,
//         }
// })
//     expect(response.status).to.equal(200)

// try {
    response = await axios.post(`https://staging-api-dashboard.superapp.co.id/api/accounting/deposit/create`, requestBody, {
        headers: {
            "Authorization": `Bearer ${this.token}`,
        }
    })
    // expect(response.status).to.equal(200)
// } catch (error: any) {
//     console.error('Error response:', error.response?.data || error.message)
// }



})