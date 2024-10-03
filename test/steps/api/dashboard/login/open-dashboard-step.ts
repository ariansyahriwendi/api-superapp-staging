import { When } from '@cucumber/cucumber'
// import axios from 'axios'
// import { expect } from 'chai'

// let response: any
// let requestBody: any
// let token: any

When('open dashboard', async function () {

await browser.url(`https://v3-web-app-micro.staging.superapp.co.id/dashboard`)
await browser.maximizeWindow()

await browser.setCookies({
    name: `zupper_authorization`,  // Sesuaikan dengan nama cookie yang digunakan oleh aplikasi
    value: `Bearer ${this.token}`  // Masukkan token login yang benar
})

await browser.pause(360000)

})


