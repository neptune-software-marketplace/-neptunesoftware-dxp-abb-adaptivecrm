
// Custom Init - Happens only once
sap.ui.getCore().attachInit(function (startParams) {
    setTimeout(function () {
        powerbi.reset(document.getElementById('container'));        
        renderReport(oSelect.getSelectedKey());
    }, 500);

});


function renderReport(repURL) {
    
    var txtAccessToken = "mockValue";
    
    var txtEmbedUrl = repURL;
 
    var txtEmbedReportId = "mockValue";
    

    // Read embed type from radio
    var tokenType = '1'

    // Get models. models contains enums that can be used.
    var models = window['powerbi-client'].models;

    // We give All permissions to demonstrate switching between View and Edit mode and saving report.
    var permissions = models.Permissions.All;

    // Embed configuration used to describe the what and how to embed.
    // This object is used when calling powerbi.embed.
    // This also includes settings and options such as filters.
    // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
    var config = {
        type: 'report',
        tokenType: tokenType == '0' ? models.TokenType.Aad : models.TokenType.Embed,
        accessToken: txtAccessToken,
        embedUrl: txtEmbedUrl,
        id: txtEmbedReportId,
        permissions: permissions,
        settings: {
            panes: {
                filters: {
                    visible: true
                },
                pageNavigation: {
                    visible: true
                }
            }
        }
    };

    // Get a reference to the embedded report HTML element
    var embedContainer = document.getElementById('container');
    // Embed the report and display it within the div container.
    var report = powerbi.embed(embedContainer, config);
}