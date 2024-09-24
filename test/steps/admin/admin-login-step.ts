import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any
let token: any

When('I login as admin', async function () {
    
    requestBody = {"idtoken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjVhYWZmNDdjMjFkMDZlMjY2Y2NlMzk1YjIxNDVjN2M2ZDQ3MzBlYTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDAyMDMwODE3MjAxLTIwNWs3OXNjZWFlNTF0c2ZpcGJndjl1ZXNmZWdkYTRuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAwMjAzMDgxNzIwMS0yMDVrNzlzY2VhZTUxdHNmaXBiZ3Y5dWVzZmVnZGE0bi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNjAyNDU1NDQxMzk4Njk3MTk5NiIsImhkIjoibnVzYW50YXJhLnRlY2hub2xvZ3kiLCJlbWFpbCI6Im1hcmlhbnN5YWgucml3ZW5kaUBudXNhbnRhcmEudGVjaG5vbG9neSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MjcxNjYzMDQsIm5hbWUiOiJNdWhhbW1hZCBBcmlhbnN5YWggUml3ZW5kaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKNjd0OThNU2VNUl9QaHM0RFpKSG0wT05SMUVxcXk4MmlFR1NFS01vNko0bmVFOFE9czk2LWMiLCJnaXZlbl9uYW1lIjoiTXVoYW1tYWQgQXJpYW5zeWFoIiwiZmFtaWx5X25hbWUiOiJSaXdlbmRpIiwiaWF0IjoxNzI3MTY2NjA0LCJleHAiOjE3MjcxNzAyMDQsImp0aSI6IjViMjdjZTVmNTA4ZWRlZGMxYTJlMzFhNzM0Y2YxOTFlNDRhYTg4ZDMifQ.MRmUAu6TxwWzsTKsJXgbcUHsexQNBlBNvpbUrs-x5KND62vgoWcAEnLp_RULvDKTwPWjnsAIIYI1Nsxu6QhdOB7RoDTPi2v6bhnnkGXo_aTV_Tn_PNLO9bXf28g9FZM8H7ZalOund-RWEeR3s3fxrXdZaHjbhw5pYYDVJ5-eMVOvYSsp-ewHEql0ZdMoUWMq2mTtjfP_jVK7YHVs6SevUrIzULr2DoecIX5me_3ecExJk2BsK7t9_wT08gIshoaAQ8gGMTGTYXKXttdnghILOuoeXpeg8jRtbCur_IwEdJo7Y0ZvGlDjHA9iAptiYjqBkSyQ7xSGdi41XVyqFYEPeg"}

    response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/v3/auth/super-sso', requestBody)

    // console.log('Response Data:', JSON.stringify(response.data, null, 2));

    expect(response.status).to.equal(201)
    expect(response.data).to.have.property('access_token')

    token = response.data.access_token;
    console.log('Token:', token);

    this.token = token
})

// export { token }


