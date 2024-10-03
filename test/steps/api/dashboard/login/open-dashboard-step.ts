import { When } from '@cucumber/cucumber'

When('open dashboard', async function () {

await browser.url(`https://v3-web-app-micro.staging.superapp.co.id/dashboard`)
await browser.maximizeWindow()

await browser.setCookies([
    {
        name: `zupper_authorization`,
        value: `Bearer ${this.token}`
    },
    {
        name: `warehouse`,
        value: `{%22id%22:1}`
    },
    {
        name: `user`,
        value: `{%22name%22:%22Aiansyah%20Riwendi%22%2C%22id%22:846%2C%22email%22:%22mariansyah.riwendi@nusantara.technology%22%2C%22status%22:1%2C%22warehouse_id%22:1%2C%22role_name%22:%22Product%20Tech%22%2C%22is_testing%22:0}`
    },
    {
        name: `g_state`,
        value: `{"i_l":0}`
    }
])

await browser.pause(3000)

})


