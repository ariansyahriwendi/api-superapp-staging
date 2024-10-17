import { When } from '@cucumber/cucumber'
import { expect } from 'chai'
import axios from 'axios'

let response: any
let requestBody: any
let token: any

When('api vanguard user login', async function () {

    console.log('api vanguard user login')

    requestBody = {
     phone: "U2FsdGVkX1/56wvklIRoNflDkE6h7DuOt3kEcXwCxsA=",
     pin: "U2FsdGVkX18VaXWYJGsKtyG+N+a8ta6Q7um0a2rH7tc=",
     app_version: "5.34.00"
 }

        response = await axios.post('https://staging-superapp-api.superapp.co.id/api/v5/app/auth/login',
          requestBody, {
})

    expect(response.status).to.equal(202)    
//     console.log('Response Data:', JSON.stringify(response.data, null, 2))

    token = response.data.result.token
    this.token = token

//     console.log('token:', token)
})
