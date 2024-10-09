import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any
let token: any

When('api user courier login', async function () {

    console.log('api user courier login')
    
    requestBody = {
        "username": "nafifurqon",
        "password": "123456",
        "device_id": "TE1A.220922.029",
        "phone_model": "google, emu64a, sdk_gphone64_arm64"
    }

    response = await axios.post('https://staging-api-courier.superapp.co.id/api/auth/login', requestBody)

    // console.log('Response Data:', JSON.stringify(response.data, null, 2));

    expect(response.status).to.equal(200)

    token = response.data.result.token;
    // console.log('Token:', token);

    this.token = token
})