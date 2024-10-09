import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'
import FormData = require('form-data')
import fs = require('fs')

let response: any
let filePath: any
let form: any

When('api user upload setoran document', async function () {

    filePath = 'src/documents/setoran.csv'

    form = new FormData()
    form.append('file', fs.createReadStream(filePath))

    response = await axios.post(`https://staging-api-dashboard.superapp.co.id/api/v3/gateway/upload/document`, form, {
        headers: {
            "Authorization": `Bearer ${this.token}`,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'multipart/form-data'
        }
})
    expect(response.status).to.equal(201)
    // console.log('Response Data:', JSON.stringify(response.data, null, 2))
})

