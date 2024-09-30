import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any
let token: any

When('api user login', async function () {
    
    requestBody = {"idtoken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjVhYWZmNDdjMjFkMDZlMjY2Y2NlMzk1YjIxNDVjN2M2ZDQ3MzBlYTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDAyMDMwODE3MjAxLTIwNWs3OXNjZWFlNTF0c2ZpcGJndjl1ZXNmZWdkYTRuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAwMjAzMDgxNzIwMS0yMDVrNzlzY2VhZTUxdHNmaXBiZ3Y5dWVzZmVnZGE0bi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNjAyNDU1NDQxMzk4Njk3MTk5NiIsImhkIjoibnVzYW50YXJhLnRlY2hub2xvZ3kiLCJlbWFpbCI6Im1hcmlhbnN5YWgucml3ZW5kaUBudXNhbnRhcmEudGVjaG5vbG9neSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3Mjc2ODQyMzIsIm5hbWUiOiJNdWhhbW1hZCBBcmlhbnN5YWggUml3ZW5kaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKNjd0OThNU2VNUl9QaHM0RFpKSG0wT05SMUVxcXk4MmlFR1NFS01vNko0bmVFOFE9czk2LWMiLCJnaXZlbl9uYW1lIjoiTXVoYW1tYWQgQXJpYW5zeWFoIiwiZmFtaWx5X25hbWUiOiJSaXdlbmRpIiwiaWF0IjoxNzI3Njg0NTMyLCJleHAiOjE3Mjc2ODgxMzIsImp0aSI6ImNjOGE0YjQzZDVhNDFhMGU2NDFjYWJiM2E0ZjcxMzRmMmQ2NmE0MzkifQ.TlMzvnRErVVJSEL9eoIjCkjG1dbbz14Sr7Wh357wt9Sy_BWc0MdjMXgqevclunE1kTKBwb-VdN_6UU2rdtL18brfFge-8zfX-HIypWMs9H4SO-N-lUjLofk87t5Xh_JNBOV0_A1OXmgsS8JTlR8uztkRbeT4ptcR1TGeA7Pv1jHXtbNWAKp_405VKRMU-2frtafxPPrlmEa2V31egf_vAfAmvKqvktKXs_r6JOMajjdqs0aMa3urphzEQHP4yYLVTScO-4vRbQtdPs8Jy8r85CXGj2dZOwx2PLf4wyBOdLFiulctfy9SQQi6LWAn4MmwNOSffk-Wm1ojnk3U4Ut0rg"}

    response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/v3/auth/super-sso', requestBody)

    // console.log('Response Data:', JSON.stringify(response.data, null, 2));

    expect(response.status).to.equal(201)
    expect(response.data).to.have.property('access_token')

    token = response.data.access_token
    console.log('Token:', token)

    this.token = token
})


