import { When } from '@cucumber/cucumber'
import { expect } from 'chai'
import axios from 'axios'

let response: any
let requestBody: any
let id: any
let getTodayDate: any
let today: Date
let year: number
let month: string
let day: string
let first_id: any
let second_id: any

getTodayDate = (): string => {
    today = new Date()
    year = today.getFullYear()
    month = String(today.getMonth() + 1).padStart(2, '0')
    day = String(today.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
}

When('api vanguard user order 1 product', async function () {

    console.log('api vanguard user order 1 product')

    try {

    requestBody = {
     "unique_id": "3b616448-5797-5839-948a-1f4ae443de63",
     "customer_id": 19615071,
     "address_id": 175556,
     "voucher_id": null,
     "voucher_type": null,
     "delivery_date": getTodayDate(),
     "discount": 0,
     "estimation_time": "07:00 - 9:00",
     "grand_total": 540000,
     "coin_used": 0,
     "items": [
         {
             "cart_id": 895511,
             "city": "kota-surabaya",
             "product_id": 7504,
             "product_detail_id": 22647,
             "product_attribute_id": 11622,
             "quantity": 6,
             "selling_price": 90000,
             "discount": 0,
             "final_price": 540000
         }
     ],
     "method": "COD",
     "note": "",
     "payment_type": "COD",
     "sub_total": 540000,
     "is_jawara": false,
     "potential_cashback": 0
 }
        response = await axios.post('https://staging-superapp-api.superapp.co.id/api/v5/app/shopping/order',
          requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
})
     expect(response.status).to.equal(201)
     // console.log('Response Data:', JSON.stringify(response.data, null, 2))
}

catch (error) {

     requestBody = {
          "unique_id": "3b616448-5797-5839-948a-1f4ae443de63",
          "customer_id": 19615071,
          "address_id": 175556,
          "voucher_id": null,
          "voucher_type": null,
          "delivery_date": getTodayDate(),
          "discount": 0,
          "estimation_time": "07:00 - 9:00",
          "grand_total": 540000,
          "coin_used": 0,
          "items": [
              {
                  "cart_id": 895512,
                  "city": "kota-surabaya",
                  "product_id": 7504,
                  "product_detail_id": 22647,
                  "product_attribute_id": 11622,
                  "quantity": 6,
                  "selling_price": 90000,
                  "discount": 0,
                  "final_price": 540000
              }
          ],
          "method": "COD",
          "note": "",
          "payment_type": "COD",
          "sub_total": 540000,
          "is_jawara": false,
          "potential_cashback": 0
      }

     response = await axios.post('https://staging-superapp-api.superapp.co.id/api/v5/app/shopping/order',
          requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
})
     expect(response.status).to.equal(201)
     // console.log('Response Data:', JSON.stringify(response.data, null, 2))
}

     id = response.data.result.id
     this.id = id
 
     console.log('order id:', id)
})

When('api vanguard user order 1 product with superkoin', async function () {

    console.log('api vanguard user order with superkoin')

    try {

    requestBody = {
     "unique_id": "3b616448-5797-5839-948a-1f4ae443de63",
     "customer_id": 19615071,
     "address_id": 175556,
     "voucher_id": null,
     "voucher_type": null,
     "delivery_date": getTodayDate(),
     "discount": 0,
     "estimation_time": "07:00 - 9:00",
     "grand_total": 0,
     "coin_used": 540000,
     "items": [
         {
             "cart_id": 895511,
             "city": "kota-surabaya",
             "product_id": 7504,
             "product_detail_id": 22647,
             "product_attribute_id": 11622,
             "quantity": 6,
             "selling_price": 90000,
             "discount": 0,
             "final_price": 540000
         }
     ],
     "method": "COD",
     "note": "",
     "payment_type": "COD",
     "sub_total": 540000,
     "is_jawara": false,
     "potential_cashback": 0
 }
        response = await axios.post('https://staging-superapp-api.superapp.co.id/api/v5/app/shopping/order',
          requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
})
     expect(response.status).to.equal(201)
     // console.log('Response Data:', JSON.stringify(response.data, null, 2))
}

catch (error) {

     requestBody = {
          "unique_id": "3b616448-5797-5839-948a-1f4ae443de63",
          "customer_id": 19615071,
          "address_id": 175556,
          "voucher_id": null,
          "voucher_type": null,
          "delivery_date": getTodayDate(),
          "discount": 0,
          "estimation_time": "07:00 - 9:00",
          "grand_total": 0,
          "coin_used": 540000,
          "items": [
              {
                  "cart_id": 895512,
                  "city": "kota-surabaya",
                  "product_id": 7504,
                  "product_detail_id": 22647,
                  "product_attribute_id": 11622,
                  "quantity": 6,
                  "selling_price": 90000,
                  "discount": 0,
                  "final_price": 540000
              }
          ],
          "method": "COD",
          "note": "",
          "payment_type": "COD",
          "sub_total": 540000,
          "is_jawara": false,
          "potential_cashback": 0
      }

     response = await axios.post('https://staging-superapp-api.superapp.co.id/api/v5/app/shopping/order',
          requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
})
     expect(response.status).to.equal(201)
     // console.log('Response Data:', JSON.stringify(response.data, null, 2))
}

     id = response.data.result.id
     this.id = id
 
     console.log('order id:', id)
})

When('api vanguard user order 1 product first order', async function () {

    console.log('api vanguard user order 1 product first order')

    try {

    requestBody = {
     "unique_id": "3b616448-5797-5839-948a-1f4ae443de63",
     "customer_id": 19615071,
     "address_id": 175556,
     "voucher_id": null,
     "voucher_type": null,
     "delivery_date": getTodayDate(),
     "discount": 0,
     "estimation_time": "07:00 - 9:00",
     "grand_total": 540000,
     "coin_used": 0,
     "items": [
         {
             "cart_id": 895511,
             "city": "kota-surabaya",
             "product_id": 7504,
             "product_detail_id": 22647,
             "product_attribute_id": 11622,
             "quantity": 6,
             "selling_price": 90000,
             "discount": 0,
             "final_price": 540000
         }
     ],
     "method": "COD",
     "note": "",
     "payment_type": "COD",
     "sub_total": 540000,
     "is_jawara": false,
     "potential_cashback": 0
 }
        response = await axios.post('https://staging-superapp-api.superapp.co.id/api/v5/app/shopping/order',
          requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
})
     expect(response.status).to.equal(201)
     // console.log('Response Data:', JSON.stringify(response.data, null, 2))
}

catch (error) {

     requestBody = {
          "unique_id": "3b616448-5797-5839-948a-1f4ae443de63",
          "customer_id": 19615071,
          "address_id": 175556,
          "voucher_id": null,
          "voucher_type": null,
          "delivery_date": getTodayDate(),
          "discount": 0,
          "estimation_time": "07:00 - 9:00",
          "grand_total": 540000,
          "coin_used": 0,
          "items": [
              {
                  "cart_id": 895512,
                  "city": "kota-surabaya",
                  "product_id": 7504,
                  "product_detail_id": 22647,
                  "product_attribute_id": 11622,
                  "quantity": 6,
                  "selling_price": 90000,
                  "discount": 0,
                  "final_price": 540000
              }
          ],
          "method": "COD",
          "note": "",
          "payment_type": "COD",
          "sub_total": 540000,
          "is_jawara": false,
          "potential_cashback": 0
      }

     response = await axios.post('https://staging-superapp-api.superapp.co.id/api/v5/app/shopping/order',
          requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
})
     expect(response.status).to.equal(201)
     // console.log('Response Data:', JSON.stringify(response.data, null, 2))
}

    first_id = response.data.result.id
    id = response.data.result.id

    this.first_id = first_id
    this.id = id 
})

When('api vanguard user order 1 product second order', async function () {

    console.log('api vanguard user order 1 product second order')

    try {

    requestBody = {
     "unique_id": "3b616448-5797-5839-948a-1f4ae443de63",
     "customer_id": 19615071,
     "address_id": 175556,
     "voucher_id": null,
     "voucher_type": null,
     "delivery_date": getTodayDate(),
     "discount": 0,
     "estimation_time": "07:00 - 9:00",
     "grand_total": 540000,
     "coin_used": 0,
     "items": [
         {
             "cart_id": 895511,
             "city": "kota-surabaya",
             "product_id": 7504,
             "product_detail_id": 22647,
             "product_attribute_id": 11622,
             "quantity": 6,
             "selling_price": 90000,
             "discount": 0,
             "final_price": 540000
         }
     ],
     "method": "COD",
     "note": "",
     "payment_type": "COD",
     "sub_total": 540000,
     "is_jawara": false,
     "potential_cashback": 0
 }
        response = await axios.post('https://staging-superapp-api.superapp.co.id/api/v5/app/shopping/order',
          requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
})
     expect(response.status).to.equal(201)
     // console.log('Response Data:', JSON.stringify(response.data, null, 2))
}

catch (error) {

     requestBody = {
          "unique_id": "3b616448-5797-5839-948a-1f4ae443de63",
          "customer_id": 19615071,
          "address_id": 175556,
          "voucher_id": null,
          "voucher_type": null,
          "delivery_date": getTodayDate(),
          "discount": 0,
          "estimation_time": "07:00 - 9:00",
          "grand_total": 540000,
          "coin_used": 0,
          "items": [
              {
                  "cart_id": 895512,
                  "city": "kota-surabaya",
                  "product_id": 7504,
                  "product_detail_id": 22647,
                  "product_attribute_id": 11622,
                  "quantity": 6,
                  "selling_price": 90000,
                  "discount": 0,
                  "final_price": 540000
              }
          ],
          "method": "COD",
          "note": "",
          "payment_type": "COD",
          "sub_total": 540000,
          "is_jawara": false,
          "potential_cashback": 0
      }

     response = await axios.post('https://staging-superapp-api.superapp.co.id/api/v5/app/shopping/order',
          requestBody, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
})
     expect(response.status).to.equal(201)
     // console.log('Response Data:', JSON.stringify(response.data, null, 2))
}

    second_id = response.data.result.id
    id = response.data.result.id

    this.second_id = second_id
    this.id = id 

})