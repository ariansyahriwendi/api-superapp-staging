import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any
let token: any

When('api user login', async function () {
    
    requestBody = {"idtoken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjVhYWZmNDdjMjFkMDZlMjY2Y2NlMzk1YjIxNDVjN2M2ZDQ3MzBlYTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDAyMDMwODE3MjAxLTIwNWs3OXNjZWFlNTF0c2ZpcGJndjl1ZXNmZWdkYTRuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAwMjAzMDgxNzIwMS0yMDVrNzlzY2VhZTUxdHNmaXBiZ3Y5dWVzZmVnZGE0bi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNjAyNDU1NDQxMzk4Njk3MTk5NiIsImhkIjoibnVzYW50YXJhLnRlY2hub2xvZ3kiLCJlbWFpbCI6Im1hcmlhbnN5YWgucml3ZW5kaUBudXNhbnRhcmEudGVjaG5vbG9neSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MjczNjk4MDMsIm5hbWUiOiJNdWhhbW1hZCBBcmlhbnN5YWggUml3ZW5kaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKNjd0OThNU2VNUl9QaHM0RFpKSG0wT05SMUVxcXk4MmlFR1NFS01vNko0bmVFOFE9czk2LWMiLCJnaXZlbl9uYW1lIjoiTXVoYW1tYWQgQXJpYW5zeWFoIiwiZmFtaWx5X25hbWUiOiJSaXdlbmRpIiwiaWF0IjoxNzI3MzcwMTAzLCJleHAiOjE3MjczNzM3MDMsImp0aSI6IjFjYzljNWIyZDFkNzExMDIyYTNkZWI4ZjQ5OWEzNjA1ZTYwNTYyNzgifQ.WRcFf-IfvaCnxhuR_GHDmWZEUXeS2LBhgTZj0Q3SEjcenZD5jsJitZpW_JlbM8MgWQubrEuydXVcsnW8ke1YCRczMkekKymL44WdB-vt2eAQDdwJ8GpbvHJH_DC07yGwkUU5BucGIf4lsICh-1DK9JtkEMOHux1PAyh3ButbzR-l-fgWjzA2GksEiz9-aYueoUNDliQDTwRgPEvms4oquvC45ZAwQsPGEe1v32lvyNhCSUg2QOrWFd18Us0YTQXHpVwLZVCu918ToL99PBbnxVOc_xR63So8pglWAazWkcoZ-4ZcHA6S9BWYbFvV_sQzCqNzianItZ3O5exNumBKnw"}

    response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/v3/auth/super-sso', requestBody)

    // console.log('Response Data:', JSON.stringify(response.data, null, 2));

    expect(response.status).to.equal(201)
    expect(response.data).to.have.property('access_token')

    token = response.data.access_token
    console.log('Token:', token)

    this.token = token
})


