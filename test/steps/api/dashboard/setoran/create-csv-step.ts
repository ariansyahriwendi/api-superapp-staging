import { When } from "@wdio/cucumber-framework"
import { createObjectCsvWriter } from 'csv-writer'

let createDynamicCSV: any
let csvWriter: any
let dynamicData: any

When('api user create csv setoran', async function () {

    console.log('api user create csv setoran')

    createDynamicCSV = async (data: any[]) => {
        csvWriter = createObjectCsvWriter({
            path: 'src/documents/setoran.csv',
            header: [
                { id: 'field1', title: 'tanggal kirim' },
                { id: 'field2', title: 'invoice' },
                { id: 'field3', title: 'cash'},
                { id: 'field4', title: 'transfer'},
                { id: 'field5', title: 'checklist'}
            ],
        })
        await csvWriter.writeRecords(data)
    }
    dynamicData = [
        { field1: `${this.date}`, field2: `${this.invoice}`, field3: `${this.grandTotal}`, field4: 0, field5: 'v' },
    ]
    await createDynamicCSV(dynamicData)
})