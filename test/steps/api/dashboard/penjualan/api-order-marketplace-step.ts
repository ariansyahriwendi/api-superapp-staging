import { When } from '@cucumber/cucumber'
import { expect } from 'chai'
import axios from 'axios'

let response: any
let requestBody: any
let id: any
let getTodayDate: any | string
let today: Date
let year: number
let month: string
let day: string

When('api user create a new order', async function () {

    getTodayDate = (): string => {
        today = new Date()
        year = today.getFullYear()
        month = String(today.getMonth() + 1).padStart(2, '0')
        day = String(today.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    requestBody = {
        customer_id: 195945,
        superagent_id: 195520,
        customer_level: "SA",
        customer_address_id: 166855,
        payment_type: "COD",
        note: "",
        delivery_date: getTodayDate(),
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
    // expect(response.data.result).to.have.property('id')
    
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))

    id = response.data.result.id
    console.log('Id:', id)

    this.id = id

    // console.log('Id:', Id)
})

When('api user create a new order 4 product', async function () {

    getTodayDate = (): string => {
        today = new Date()
        year = today.getFullYear()
        month = String(today.getMonth() + 1).padStart(2, '0')
        day = String(today.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    requestBody = {
        customer_id: 195945,
        superagent_id: 195520,
        customer_level: "SA",
        customer_address_id: 166855,
        payment_type: "COD",
        note: "",
        delivery_date: getTodayDate(),
        group_type: "grosir",
        promos: [],
        promo_type: "",
        use_point: true,
        grand_total: 2320000,
        sub_total: 2320000,
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
            },
            {
                sub_total: 160000,
                promos: [],
                id: "null",
                item_id: "null",
                product_detail_id: 22603,
                product_attribute_id: 11523,
                product_id: 7446,
                product_name: "Rokok Putih",
                product_sku: "",
                selling_price: 40000,
                discount: 0,
                selling_price_now: 0,
                conversion_points: 0,
                deduction_points: 0,
                unit: "Box",
                content: "",
                dimension_length: "",
                dimension_height: "",
                dimension_width: "",
                weight: "0",
                delete: 0,
                quantity: 4,
                type: "regular"
            },
            {
                id: "null",
                item_id: "null",
                product_attribute_id: 11742,
                product_detail_id: 198,
                product_id: 7566,
                product_name: "Vendor IPK",
                unit: "Karton",
                quantity: 4,
                selling_price: "110000.000",
                content: "",
                conversion_points: 0,
                deduction_points: "",
                delete: 0,
                dimension_height: 0,
                dimension_length: 0,
                dimension_width: 0,
                weight: 0,
                type: "bundle"
            },
            {
                id: "null",
                item_id: "null",
                product_attribute_id: 11743,
                product_detail_id: 198,
                product_id: 7567,
                product_name: "Vendor IPK 2",
                unit: "Pouch",
                quantity: 4,
                selling_price: "110000.000",
                content: "",
                conversion_points: 0,
                deduction_points: "",
                delete: 0,
                dimension_height: 0,
                dimension_length: 0,
                dimension_width: 0,
                weight: 0,
                type: "bundle"
            },
            {
                id: "null",
                item_id: "null",
                product_attribute_id: 11742,
                product_detail_id: 203,
                product_id: 7566,
                product_name: "Vendor IPK",
                unit: "Karton",
                quantity: 4,
                selling_price: "110000.000",
                content: "",
                conversion_points: 0,
                deduction_points: "",
                delete: 0,
                dimension_height: 0,
                dimension_length: 0,
                dimension_width: 0,
                weight: 0,
                type: "bundle"
            },
            {
                id: "null",
                item_id: "null",
                product_attribute_id: 11743,
                product_detail_id: 203,
                product_id: 7567,
                product_name: "Vendor IPK 2",
                unit: "Pouch",
                quantity: 4,
                selling_price: "120000.000",
                content: "",
                conversion_points: 0,
                deduction_points: "",
                delete: 0,
                dimension_height: 0,
                dimension_length: 0,
                dimension_width: 0,
                weight: 0,
                type: "bundle"
            }
        ],
        superagent_discount: 0,
        warehouse_company_id: "0",
        discount_percent: 0,
        page_id: "dummy page id",
        token: "uaNaC1nHZqfx6-EuC4Ed",
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
    console.log('Id:', id)

    this.id = id
})

When('api user create a new order with voucher', async function () {

    getTodayDate = (): string => {
        today = new Date()
        year = today.getFullYear()
        month = String(today.getMonth() + 1).padStart(2, '0')
        day = String(today.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    requestBody = {
        customer_id: 195945,
        superagent_id: 195520,
        customer_level: "SA",
        customer_address_id: 166855,
        payment_type: "COD",
        note: "",
        delivery_date: getTodayDate(),
        group_type: "grosir",
        promos: [
            {
                "id": 133305,
                "deduction": 10000
            }
        ],
        promo_type: "",
        use_point: true,
        grand_total: 350000,
        sub_total: 360000,
        discount: 10000,
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
    this.id = id

})

When('api user create a new order 4 product with voucher', async function () {

    getTodayDate = (): string => {
        today = new Date()
        year = today.getFullYear()
        month = String(today.getMonth() + 1).padStart(2, '0')
        day = String(today.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    requestBody = {
        customer_id: 195945,
        superagent_id: 195520,
        customer_level: "SA",
        customer_address_id: 166855,
        payment_type: "COD",
        note: "",
        delivery_date: getTodayDate(),
        group_type: "grosir",
        promos: [
            {
                "id": 133305,
                "deduction": 10000
            }
        ],
        promo_type: "",
        use_point: true,
        grand_total: 2310000,
        sub_total: 2320000,
        discount: 10000,
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
            },
            {
                sub_total: 160000,
                promos: [],
                id: "null",
                item_id: "null",
                product_detail_id: 22603,
                product_attribute_id: 11523,
                product_id: 7446,
                product_name: "Rokok Putih",
                product_sku: "",
                selling_price: 40000,
                discount: 0,
                selling_price_now: 0,
                conversion_points: 0,
                deduction_points: 0,
                unit: "Box",
                content: "",
                dimension_length: "",
                dimension_height: "",
                dimension_width: "",
                weight: "0",
                delete: 0,
                quantity: 4,
                type: "regular"
            },
            {
                id: "null",
                item_id: "null",
                product_attribute_id: 11742,
                product_detail_id: 198,
                product_id: 7566,
                product_name: "Vendor IPK",
                unit: "Karton",
                quantity: 4,
                selling_price: "110000.000",
                content: "",
                conversion_points: 0,
                deduction_points: "",
                delete: 0,
                dimension_height: 0,
                dimension_length: 0,
                dimension_width: 0,
                weight: 0,
                type: "bundle"
            },
            {
                id: "null",
                item_id: "null",
                product_attribute_id: 11743,
                product_detail_id: 198,
                product_id: 7567,
                product_name: "Vendor IPK 2",
                unit: "Pouch",
                quantity: 4,
                selling_price: "110000.000",
                content: "",
                conversion_points: 0,
                deduction_points: "",
                delete: 0,
                dimension_height: 0,
                dimension_length: 0,
                dimension_width: 0,
                weight: 0,
                type: "bundle"
            },
            {
                id: "null",
                item_id: "null",
                product_attribute_id: 11742,
                product_detail_id: 203,
                product_id: 7566,
                product_name: "Vendor IPK",
                unit: "Karton",
                quantity: 4,
                selling_price: "110000.000",
                content: "",
                conversion_points: 0,
                deduction_points: "",
                delete: 0,
                dimension_height: 0,
                dimension_length: 0,
                dimension_width: 0,
                weight: 0,
                type: "bundle"
            },
            {
                id: "null",
                item_id: "null",
                product_attribute_id: 11743,
                product_detail_id: 203,
                product_id: 7567,
                product_name: "Vendor IPK 2",
                unit: "Pouch",
                quantity: 4,
                selling_price: "120000.000",
                content: "",
                conversion_points: 0,
                deduction_points: "",
                delete: 0,
                dimension_height: 0,
                dimension_length: 0,
                dimension_width: 0,
                weight: 0,
                type: "bundle"
            }
        ],
        superagent_discount: 0,
        warehouse_company_id: "0",
        discount_percent: 0,
        page_id: "dummy page id",
        token: "uaNaC1nHZqfx6-EuC4Ed",
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
    this.id = id

})

// export {id}


