import { When } from '@cucumber/cucumber'

When('open dashboard superapp', async function () {

await browser.url(`https://v3-web-app-micro.staging.superapp.co.id/dashboard`)
await browser.maximizeWindow()

await browser.setCookies([
    {
        name: `zupper_authorization`,
        value: `Bearer ${this.token}`
    },
    {
        name: `warehouse`,
        value: `{"id":${this.warehouse_id}}`
    },
    {
        name: `user`,
        value: JSON.stringify(this.user)
    },
    {
        name: `g_state`,
        value: `{"i_l":0}`
    }
])

await browser.pause(5000)

})


