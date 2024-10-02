import { When } from '@cucumber/cucumber'
import { expect } from 'chai'
import axios from 'axios'


let response: any
let requestBody: any
let getTodayDate: any | string
let today: Date
let year: number
let month: string
let day: string


When('api user create mission', async function () {

    getTodayDate = (): string => {
        today = new Date()
        year = today.getFullYear()
        month = String(today.getMonth() + 1).padStart(2, '0')
        day = String(today.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    requestBody = {
        name: "Misi Automation",
        user_type: "all user",
        user_level: "customer",
        segment_id: 0,
        area: "aceh,aceh-barat,aceh123,aceh2,aceh3,asdasd,asdfas3,banda-aceh,boyolali,dango-aji,demak,dumai,gunungsitoli,hulu-sungai-utara,kabupaten-badung,kabupaten-bandung,kabupaten-bandung-barat,kabupaten-bangkalan,kabupaten-bangli,kabupaten-banyuwangi,kabupaten-bekasi,kabupaten-blitar,kabupaten-bogor,kabupaten-bojonegoro,kabupaten-bondowoso,kabupaten-buleleng,kabupaten-ciamis,kabupaten-cianjur,kabupaten-cirebon,kabupaten-demak,kabupaten-garut,kabupaten-gianyar,kabupaten-gowa,kabupaten-gresik,kabupaten-indramayu,kabupaten-jember,kabupaten-jembrana,kabupaten-jepara,kabupaten-jombang,kabupaten-karangasem,kabupaten-karawang,kabupaten-kediri,kabupaten-klungkung,kabupaten-lamongan,kabupaten-lumajang,kabupaten-madiun,kabupaten-malang,kabupaten-maros,kabupaten-mojokerto,kabupaten-nganjuk,kabupaten-ngawi,kabupaten-pamekasan,kabupaten-ponorogo,kabupaten-probolinggo,kabupaten-purwakarta,kabupaten-sampang,kabupaten-semarang,kabupaten-sidoarjo,kabupaten-situbondo,kabupaten-sukabumi,kabupaten-sukoharjo,kabupaten-sumenep,kabupaten-tabanan,kabupaten-tangerang,kabupaten-tasikmalaya,kabupaten-trenggalek,kabupaten-tuban,kabupaten-tulungagung,kabupaten-wajo,kapuas-hulu,kediri,kota tangerang selatan,kota-bandung,kota-banjarmasin,kota-batu,kota-bekasi,kota-bima,kota-blitar,kota-bogor,kota-cimahi,kota-cirebon,kota-denpasar,kota-depok,kota-gorontalo,kota-jakarta-barat,kota-jakarta-pusat,kota-jakarta-selatan,kota-jakarta-timur,kota-jakarta-utara,kota-kediri,kota-kendari,kota-kupang,kota-madiun,kota-madura,kota-makassar,kota-malang,kota-mojokerto,kota-pasuruan,kota-pontianak,kota-probolinggo,kota-semarang,kota-solok,kota-sorong,kota-sukabumi,kota-surabaya,kota-tangerang,kota-tangerang-selatan,kota-tasikmalaya,kota-tuban,kubu-raya,kudus,lebong,magetan,malang,manokwari,manokwari-selatan,mojokerto,musi-rawas-utara,padang-sidempuan,pasuruan,pekanbaru,penrang,probolinggo,sabang,samarinda,semarang,sleman,sungai-raya,supiori,surakarta,tapanuli-selatan,tapanuli-tengah,tasikmalaya,test,testing,testing-qa,tujuh-belas",
        target_type: "gmv",
        term_condition: "<p style=\"font-size: 14px; line-height: 22px;\">Syarat dan Ketentuan</p>",
        condition: "all product",
        exclude_bundle: 0,
        exclude_flashsale: 0,
        mission_products: [],
        items: [],
        start_date: getTodayDate(),
        end_date: getTodayDate(),
        expiration_period: "fixed",
        duration: 0,
        reward_type: "supercoin",
        mission_tierings: [
            {
                target_amount: 150000,
                reward_amount: 10000
            }
        ],
        target_minimum: 0,
        is_leaderboard: 1,
        leaderboard_threshold: 150000,
        leaderboard_limit: 1
    }

    response = await axios.post(
        'https://staging-api-dashboard.superapp.co.id/api/mission/create', 
        requestBody, 
        {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        expect(response.status).to.equal(200)
})


