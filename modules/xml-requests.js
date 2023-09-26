const getResidentLedgerRequest = (reqData) => `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:getresidentledger>
         <tem:auth>
            <tem:pmcid>${reqData.auth.PMC_ID}</tem:pmcid>
            <tem:siteid>${reqData.auth.SITE_ID}</tem:siteid>
            <tem:licensekey>${reqData.auth.LICENCE_KEY}</tem:licensekey>
         </tem:auth>
         <tem:getresidentledger>
            <tem:reshid>${reqData.body.RESH_ID}</tem:reshid>
            <tem:startdate>${reqData.body.START_DATE}</tem:startdate>
            <tem:enddate>${reqData.body.END_DATE}</tem:enddate>
            <tem:allopen>${reqData.body.ALL_OPEN}</tem:allopen>
            <tem:ExtensionData/>
         </tem:getresidentledger>
      </tem:getresidentledger>
   </soapenv:Body>
</soapenv:Envelope>
`;

module.exports = {
    getResidentLedgerRequest,
}