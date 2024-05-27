// setTimeout(function () {
//     embedContainer.setContent('<div id="container" style="width:100%; height:1000px;"></div>')
// }, 500);

//const repURL = "https://www.powerbi.com/view?r=eyJrIjoiMGY5OTg2MTMtZDNlNS00OWY0LWE2YTktZmY0MzFkM2ViMzBjIiwidCI6IjhmZGI1MWRhLWU0NWQtNDIzZi1hZTMzLWNmOTIxMThkNTMxMSIsImMiOjh9";
//const repURL = "https://www.powerbi.com/view?r=eyJrIjoiM2Y3ZWVkY2UtNjExOC00ZmU4LTkxNWYtNjFjODcwZTQ3OTU2IiwidCI6IjhmZGI1MWRhLWU0NWQtNDIzZi1hZTMzLWNmOTIxMThkNTMxMSIsImMiOjh9";
//const repURL = "https://www.powerbi.com/view?r=eyJrIjoiMDA2MzEzOTktOGJlYy00ODE4LWIxNTQtODA3ZmNmNGUyZDI2IiwidCI6IjhmZGI1MWRhLWU0NWQtNDIzZi1hZTMzLWNmOTIxMThkNTMxMSIsImMiOjh9";
//const repURL = "https://www.powerbi.com/view?r=eyJrIjoiYTRkYTBhZTAtMTM1Ny00YWUyLTkwZTUtYjE3OTBiYWYyZWRhIiwidCI6IjhmZGI1MWRhLWU0NWQtNDIzZi1hZTMzLWNmOTIxMThkNTMxMSIsImMiOjh9";

// Custom Init - Happens only once
sap.ui.getCore().attachInit(function (startParams) {
    setTimeout(function () {
        powerbi.reset(document.getElementById('container'));        
        renderReport(oSelect.getSelectedKey());
    }, 500);

});


function renderReport(repURL) {
    // Read embed application token from textbox
    //var txtAccessToken = powerBiConfig[0].EmbedToken;
    var txtAccessToken = "mockValue";
    //var txtAccessToken = 'H4sIAAAAAAAEACVWNQ7sCBa8y089kplGmsDM7DZlZmZo26u9-_Zo80pevaL__LHTZ5jT4s_ffz63KmyK5E1tn4UyifbTuRGAdzisRzPluM2B7qvewmEqGSU2XC79i8thrSIejW6blzxI59tCosUl8MbE7Pq1PsR5ogoJGBog1pOcXnlhBPFSx1gfL-CfMum6FXZn_lthyknO10zqqVqiKJFQGCD6gC_6HRhBzf3dqpH3LUy4gX5buW9v90JfpDxEiISG0RrQZr0ZkIKcmvsQJIpbg_MKL1pQdkIfX6GCWN77sc3DIJ_6idKZqTSOLSzG7BIqV7ZKvVTrpM2GYVABLl5arJT1btK2usGUZoKjjJjKesph9_UPoXI5z1m3WtYppPmRWElgv2UiabmyJN2FhrYEolhemn_rHqkYxNNDa67am-fR5gVKIu9OwkfeAtI6_k5kse1Q2xnWVeXc--P0Z7T4-zVks99a4AEOodsxLiE-QK66eaD55JQgkvPUwdQfCg_7KSE7oaRGRWxeI5K3NJ4UUxIrzUx1d2c-Pfe5oLM-wtG5YoELyap8q0nhGxsaJuDz6TEbf7G9NQIZLvHfr6UHVI6JdLmYmAx6OtymmnpAAjgE78VLkG8P1SyjDTtXH0teYQGfJnvtnGyONPYgeRbjxVNF7a9RzReBskF0NJiqFW6S99auj-_gVbCnbGsATEesWYk2AbZV-Y7UjJGkODiVt69kPC5hmIE9YYJRVEHyPHXkNbzzpNta28_ayssbbuKj3nnBjipVEMQ39ZbFoJsvt49F_v10SNTv0MglCM-1JudfJ5yf6VV4iJIXX75Zh7GHRgRB5I_FpXy1JQ9DpCZrGGG91D1uXvy9fkoaEieR62kPcLClOQrwdkd5-z42YvFIjmbX6cqxLD1Bqdl4xOc7hxu7v9Jiz1ocHWjswCJjQdPO3X1QVXKpqV7VSLIxEMSEnbtsF1Ef4rFbh1YbhrqU852RDAxpswulGY67h6VmQmIttRIhGp6PIt5ctZjdOqq-vcWZ6u25Vay44F7PBPVUmZ1oxi0RjVJp01TOblwzy6pBhAyxGl2TCkPPvWsOJf0wh4iwMRIWMC7UjFPLXPIlqndBbyTvRP0LvEXpwwJU968b8J-2OeKEp-2Phs7y4VeWi6vMg5rE6lT9F0WD9MuLtaiDTxxuokDhnnJDO7ba_DCoQw9JynbBNcdyReRsjNXLKuR_x_HVjjKRz_BnRNmSuVmFb7KyJ8duc-ls1NVUNU0SsGX6VId2Cfv1iwoFdbkDyQtFvpBQUl6SKh-36iaVH5OdIzn1JPtckMWRxdl2eIWwWj-8N5tWugxgJpqOetWkD0iE-u4T5d5OSX-XSyFbY9VN6olVDiy2dc2ObbaSEdtMTIDVQSizFu0tbX5JsVscEuA7MP_ZEbbAnpftS1Et9fudjiSiJMfFWdh5K4VU41z92pIBtRmH7K5TpgcjIGWX60HANFCk5cVPsG6KIkBdZSOHC-EmC9xRqqSgxZEkuOfZLx_h1o0wt3Cum4EaC1TNLzM1kCkWEFuaUhZ02QqCQdC008ZMIjkxwQ3knJfvylgAxBvVCxBUUC3Vuao76k1GMDTSlt29NIROUcrBFOE2ZdY15Ig8FOC0l32mEXDAFPfjev8phqe9U5Y9ipzEDPI46YmWxPLH2RXoX1yAUNI8o8Mf3ScJGg7MovQH09ONhU_KWiRSqtOkF-4TVWWx0-oZaNTa1B54rY_s1XudqxiKR8QcpY68bmUOIzeNJlWT7FgyAs35wckbr9gcAb6A6y5czTcIlOL9mrOeaVVPBrafNA6KRVEAAe5d4eypuT1DzxsctVSZ_O3ziQ-Kx6Ivf5H2NkwOAhBKYej14-tkodskwAzXdzOwWmdsb9cHQII7ZjBMKfRKv3znsYky-cE-IHKoh-et3SL-Vklgl2M80Sebo_ugVMNs7fQMM_fdph_Fm755F0EvG5Tl1pex_aSP5cwQ6huxSLldkSi5c5I5Cjd089MTgXugYAg8C4J62H2fiSIEFVKhGNmyXaQ0bNm-cZArfHKP0rhuVhej53P5UXiBam5n4lo8P4Zz3JYgehnvJIuoqXg2U_SYvBSEj27igZ5j1D3IQj6-ox4Qg-G9Tv7xC0IlpqRMZmzB5qxL9ruPnqV2g5VeCEF01TmcxedK1_X2o7SS-cBdJuw3ClgQezpoyXumeWJ2zlDGEs0eczEzlh0LLVNevq6RR5CrNNYYM9Bs8k5FYj8z6zZsRURBWdwGAnhMI9bwr58F8buUPFua8l1eQuge33cAFSycx5_eJ9p3fk6BRRqeVrmJ8VKJ3KnjRJhxSzxuXTycl5IUPXqqmm5FK1JMxxdSKDFuRYIsVvf1pqJzq2aWN9-FgOv4mTPVN5Rd5QipXtfI_DA90fjINMLPPXh15-v5fITkVMFcbvTv9agqldQ47uCo0Pp__vrDbc9yzFr5_OaUu2ZTqQS-jQGrvor89W1jX0TrT9eG_EZRBC1YuEkb2xexz8SoB-Wyyhc7rZP5_FJYexP2V_1Se8dATWncLaHu7ObagYSKjpKwhptBrHfcMhnGzTIR4yhggUdZn2mhCKkgOMOAkbN32xAUZ7WcLbkNT4Kh5XROAFpL1wlfBZ4RqLbc31mVZ3okOjR4vcp6e0lUOiG8DrYLidqSzMP8oNKyTh5ZMKfaK0J5Lo11P5oO5Q6ulPctkEdV0-DuU55x6wFw5H8XK4ds3m_31_xoDJZy6xzRCuvgeh2SpsE5dEQRAVpjZ1JtSC2Hoy8gTsqmPg-xlGDNKulGdD9ZafMrnAjzb575559_aX6WptyU4Mdy5gQEKmnENwRMgkQ_uisT-v9RXltP6XFu5Q9WjD7vqnL7LU645m-HEgovfuhg7dL3StL944lUQb9BqNyj8_4aNKUrI5JLdZMypbGePeWY7U29yN8jW6_HuC4f_W6eiq8svdR2Y7A50SuVc_LdMyt3V83OGtYV1lL6LrU-8NCdmmLljrFitoUlVrxctbffvCT93MtYUDa0HKPpsG_TgYqQtWM7v8d7GNFkOHv-Ficlo-N37yX3E6U8c0TDtGtveUA-1Y0hLG9aapSL9inqid8xq_FaXKJvnYGLaNrldPoovETUIJtl0c3PEXAMhVKT8fdmZUfWXUS7T39mdzkxjm6qpOEXjJ3eDGQN_kYYdCrnrNJ9M91q3yqbpWaCQrT_0vzf_wFGdo9NQgwAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19'

    // Read embed URL from textbox
    //var txtEmbedUrl = powerBiConfig[0].EmbedURL;
    var txtEmbedUrl = repURL;
    //var txtEmbedUrl = 'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlfX0%3d'

    // Read report Id from textbox
    //var txtEmbedReportId = powerBiConfig[0].ReportID;
    var txtEmbedReportId = "mockValue";
    //var txtEmbedReportId = 'f6bfd646-b718-44dc-a378-b73e6b528204'

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