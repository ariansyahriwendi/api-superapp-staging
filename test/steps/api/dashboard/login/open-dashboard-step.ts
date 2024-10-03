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

await browser.setCookies({
    name: `warehouse`,  // Sesuaikan dengan nama cookie yang digunakan oleh aplikasi
    value: `{%22id%22:1}`
})

await browser.setCookies({
    name: `user`,  // Sesuaikan dengan nama cookie yang digunakan oleh aplikasi
    value: `{%22name%22:%22Aiansyah%20Riwendi%22%2C%22id%22:846%2C%22email%22:%22mariansyah.riwendi@nusantara.technology%22%2C%22status%22:1%2C%22warehouse_id%22:1%2C%22role_name%22:%22Product%20Tech%22%2C%22is_testing%22:0}`  // Masukkan token login yang benar
})

await browser.setCookies({
    name: `g_state`,  // Sesuaikan dengan nama cookie yang digunakan oleh aplikasi
    value: `{"i_l":0}`
})

await browser.refresh()

await browser.pause(360000)

})


