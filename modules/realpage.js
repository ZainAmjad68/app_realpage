const {sendRequest} = require("./request");
const {getResidentLedgerRequest} = require("./xml-requests");
const config = require("../config");

const url = `${config.get("realpage").baseUrl}/${config.get("realpage").ledgerUrl}`;

async function getResidentLedger(reqData) {
    let ledgerXMLBody = getResidentLedgerRequest(reqData);
    console.log('***ledgerXMLBody*** ', ledgerXMLBody);
    let remoteResponse = await sendRequest({
        method: "POST",
        url: url,
        data: ledgerXMLBody,
        SOAPaction: "http://realpage.com/webservices/GetResidentLedger",
    });
    
    console.log('remoteResponse', remoteResponse);
}

(async () => {
    try {
        let reqData = {
            auth: {
                PMC_ID: 5239797,
                SITE_ID: 5239798,
                LICENCE_KEY: config.get("realpage").apiKey,
            },
            body: {
                RESH_ID: 192566098,
                START_DATE: "2015-01-01",
                END_DATE: "2023-09-09",
                ALL_OPEN: true,
            }
        }
        await getResidentLedger(reqData);
    } catch (e) {
        console.error('failed due to -> ', e);
        process.exit(1);
    } finally {
        process.exit(0);
    }
})();