import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any

When('I login as courier', async function () {
    
    requestBody = {
        "username": "nafifurqon",
        "password": "123456",
        "device_id": "TE1A.220922.029",
        "phone_model": "google, emu64a, sdk_gphone64_arm64"
    }

    response = await axios.post('https://staging-api-courier.superapp.co.id/api/auth/login', requestBody)

    console.log('Response Data:', JSON.stringify(response.data, null, 2));

    expect(response.status).to.equal(200)

    expect(response.data).to.have.property('message')
    expect(response.data.message).to.equal('Success')

    expect(response.data).to.have.property('result')
    expect(response.data.result).to.have.property('id')
    expect(response.data.result).to.have.property('driver_id')
    expect(response.data.result).to.have.property('courier_type')
    expect(response.data.result).to.have.property('is_internal')
    expect(response.data.result).to.have.property('name')
    expect(response.data.result).to.have.property('phone')
    expect(response.data.result).to.have.property('token')
    expect(response.data.result).to.have.property('vendor_id')
    expect(response.data.result).to.have.property('is_testing')

    const token = response.data.result.token;
    console.log('Token:', token);

    this.token = token
})