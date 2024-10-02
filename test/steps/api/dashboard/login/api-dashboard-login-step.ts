import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any
let token: any

When('api user login', async function () {

    requestBody = {"idtoken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmEuamF5YWRpQG51c2FudGFyYS50ZWNobm9sb2d5IiwiaWF0IjoxNjg4NzE2MDA3LCJleHAiOjE2ODkzMjA4MDd9.4bPa_tlSFjqOZ5GBgzuOj80fh2FbnmcaGyI9ZA_ORYo"}

    
    // requestBody = {"idtoken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjI4YTQyMWNhZmJlM2RkODg5MjcxZGY5MDBmNGJiZjE2ZGI1YzI0ZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDAyMDMwODE3MjAxLTIwNWs3OXNjZWFlNTF0c2ZpcGJndjl1ZXNmZWdkYTRuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAwMjAzMDgxNzIwMS0yMDVrNzlzY2VhZTUxdHNmaXBiZ3Y5dWVzZmVnZGE0bi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNjAyNDU1NDQxMzk4Njk3MTk5NiIsImhkIjoibnVzYW50YXJhLnRlY2hub2xvZ3kiLCJlbWFpbCI6Im1hcmlhbnN5YWgucml3ZW5kaUBudXNhbnRhcmEudGVjaG5vbG9neSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3Mjc4NDY0MzgsIm5hbWUiOiJNdWhhbW1hZCBBcmlhbnN5YWggUml3ZW5kaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKNjd0OThNU2VNUl9QaHM0RFpKSG0wT05SMUVxcXk4MmlFR1NFS01vNko0bmVFOFE9czk2LWMiLCJnaXZlbl9uYW1lIjoiTXVoYW1tYWQgQXJpYW5zeWFoIiwiZmFtaWx5X25hbWUiOiJSaXdlbmRpIiwiaWF0IjoxNzI3ODQ2NzM4LCJleHAiOjE3Mjc4NTAzMzgsImp0aSI6ImZjYTUyNWY2MWUyODAyN2M3MmRkZDE4YWViMzhjMDgxYTM5Y2U0M2IifQ.arGAilp8XGcOdt2VSGzS2MmbCamLjuV3V3TuXg2GcqnRp2GX7E6N19e4rXTxEMag-NdHDa1QnpHlF1v0lyk4U2rIh-XKlI5CIHVmuAcAmt87P2SuEZZP-IauYHXW6DVgAjXrZMLbX57Ailnaj87hrfb4O5yGYPmGpcDkr-eAxVIrnXXtxRgyu5iJE09ZmwrqfeXsfNm_ohYdxjPLKhi6cDs7skX1ZrRBGu1pZ2xVyDVZUQPmctv5MsTw--4gerv-T5K2Zlics2A7FPeFa7OjBIjegqGAuSWdw_H58O-FyNRwlZjBPJoR8oOkZV6SBzRgGnq1gZQOUPiIr-mIjtj6VQ"}

    response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/v3/auth/super-sso', requestBody)

    // console.log('Response Data:', JSON.stringify(response.data, null, 2));

    expect(response.status).to.equal(201)
    expect(response.data).to.have.property('access_token')

    token = response.data.access_token
    console.log('Token:', token)

    this.token = token
})


