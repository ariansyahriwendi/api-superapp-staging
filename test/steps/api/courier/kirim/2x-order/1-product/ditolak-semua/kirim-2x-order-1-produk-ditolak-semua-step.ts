import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any

When('api courier user kirim 2x order 1 product ditolak semua super', async function () {

    console.log('api courier user kirim 2x order 1 product ditolak semua super')

    requestBody = {
        latitude: -7.257472,
        longitude: 122.7520867,
        goods_photos: ["https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png"],
        orders: [
            {
                is_no_rejected: false,
                order_id: this.first_order_id,
                items: [
                    {
                        order_item_id: this.first_order_first_product_order_item_id,
                        reject_quantity: this.first_order_first_product_quantity,
                        reject_from: 1
                    }
                ]
            },
            {
                is_no_rejected: false,
                order_id: this.second_order_id,
                items: [
                    {
                        order_item_id: this.second_order_first_product_order_item_id,
                        reject_quantity: this.second_order_first_product_quantity,
                        reject_from: 1
                    }
                ]
            }
        ],
        payments: [
            {
                payment_photo: "https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png",
                payment_type: "cash"
            }
        ],
        super_reject_reason: "Barang Terkirim Tidak Sesuai",
        reject_reason_note: "Ditolak semua karena barang terkirim tidak sesuai",
        reject_reason: ""
    }
    response = await axios.post('https://staging-api-courier.superapp.co.id/api/transaction', requestBody, {
        headers: {
            'Authorization': `Bearer ${this.token}`
        }
    })
    expect(response.status).to.equal(200)
        // console.log('Response Data:', JSON.stringify(response.data, null, 2))
})

When('api courier user kirim 2x order 1 product ditolak semua customer', async function () {

    console.log('api courier user kirim 2x order 1 product ditolak semua customer')

    requestBody = {
        latitude: -7.257472,
        longitude: 122.7520867,
        goods_photos: ["https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png"],
        orders: [
            {
                is_no_rejected: false,
                order_id: this.first_order_id,
                items: [
                    {
                        order_item_id: this.first_order_first_product_order_item_id,
                        reject_quantity: this.first_order_first_product_quantity,
                        reject_from: 2
                    }
                ]
            },
            {
                is_no_rejected: false,
                order_id: this.second_order_id,
                items: [
                    {
                        order_item_id: this.second_order_first_product_order_item_id,
                        reject_quantity: this.second_order_first_product_quantity,
                        reject_from: 2
                    }
                ]
            }
        ],
        payments: [
            {
                payment_photo: "https://dressup.s3.ap-southeast-1.amazonaws.com/test/2024/07/18/image-e001ddc7-0b18-45fb-ac4b-de63dfd35115.png",
                payment_type: "cash"
            }
        ],
        customer_reject_reason: "Ingin Mengubah Pesanan",
        reject_reason_note: "Ditolak semua karena ingin mengubah pesanan",
        reject_reason: ""
    }
    response = await axios.post('https://staging-api-courier.superapp.co.id/api/transaction', requestBody, {
        headers: {
            'Authorization': `Bearer ${this.token}`
        }
    })
    expect(response.status).to.equal(200)
        // console.log('Response Data:', JSON.stringify(response.data, null, 2))
})