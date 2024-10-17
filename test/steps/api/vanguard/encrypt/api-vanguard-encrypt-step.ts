import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any

When('api vanguard user encrypt', async function () {

    console.log('api vanguard user encrypt')

    response = await axios.get('https://staging-superapp-api.superapp.co.id/api/v5/app/auth/encrypt?term=081806442929')

    expect(response.status).to.equal(200)
    console.log('Response Data:', JSON.stringify(response.data, null, 2))
})