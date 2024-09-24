import { When } from '@cucumber/cucumber'
import { expect } from 'chai'
import axios from 'axios'

let response: any
let requestBody: any
let id: any

When('I create a new order', async function () {

    requestBody = {
        customer_id: 195945,
        superagent_id: 195520,
        customer_level: "SA",
        customer_address_id: 166855,
        payment_type: "COD",
        note: "",
        delivery_date: "2024-09-23",
        group_type: "grosir",
        promos: [],
        promo_type: "",
        use_point: true,
        grand_total: 360000,
        sub_total: 360000,
        discount: 0,
        items: [
            {
                sub_total: 360000,
                promos: [],
                id: "null",
                item_id: "null",
                product_detail_id: 22647,
                product_attribute_id: 11622,
                product_id: 7504,
                product_name: "Automated Stock | ra",
                product_sku: "",
                selling_price: 90000,
                discount: 0,
                selling_price_now: 0,
                conversion_points: 0,
                deduction_points: 0,
                unit: "Bag",
                content: "",
                dimension_length: "",
                dimension_height: "",
                dimension_width: "",
                weight: "0",
                delete: 0,
                quantity: 4,
                type: "regular"
            }
        ],
        superagent_discount: 0,
        warehouse_company_id: "0",
        discount_percent: 0,
        page_id: "dummy page id",
        token: "08lwaIqD9o8Qwl8rCt3B",
        profit: 0,
        cash_received: 0,
        deduction_points: 0
    }

        response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/order/create', requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
})

    expect(response.status).to.equal(200)
    expect(response.data.result).to.have.property('id')
    
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    id = response.data.result.id
    // console.log('Id:', Id)

    await browser.pause(5000)

})

export {id}


