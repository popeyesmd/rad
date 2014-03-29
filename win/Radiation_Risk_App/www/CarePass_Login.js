/*
 * JS for CarePass_Login generated by Appery.io
 *
 */

Appery.getProjectGUID = function() {
    return '76c1243c-7c9f-4fcc-bd10-0ef35c0a1435';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

// Deprecated


function adjustContentHeight() {
    Appery.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Appery.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

Appery.AppPages = [{
    "name": "CarePass_Login",
    "location": "CarePass_Login.html"
}, {
    "name": "body",
    "location": "body.html"
}, {
    "name": "CarePass_Fitness_Activity_All",
    "location": "CarePass_Fitness_Activity_All.html"
}, {
    "name": "Disclaimer",
    "location": "Disclaimer.html"
}, {
    "name": "CarePass_BodyMeasurements",
    "location": "CarePass_BodyMeasurements.html"
}, {
    "name": "CarePass_Fitness_Activity_New",
    "location": "CarePass_Fitness_Activity_New.html"
}, {
    "name": "CarePass_ErrorPopUp",
    "location": "CarePass_ErrorPopUp.html"
}, {
    "name": "CarePass_Fitness_Activity_Filter",
    "location": "CarePass_Fitness_Activity_Filter.html"
}, {
    "name": "CarePass_BodyMeasurements_New",
    "location": "CarePass_BodyMeasurements_New.html"
}, {
    "name": "details",
    "location": "details.html"
}, {
    "name": "map2",
    "location": "map2.html"
}, {
    "name": "CarePass_BodyMeasurementsType_Filter",
    "location": "CarePass_BodyMeasurementsType_Filter.html"
}, {
    "name": "CarePass_Fitness_Activity_TimeLine",
    "location": "CarePass_Fitness_Activity_TimeLine.html"
}, {
    "name": "map",
    "location": "map.html"
}, {
    "name": "CarePass_Chart",
    "location": "CarePass_Chart.html"
}, {
    "name": "CarePass_Fitness_Activity_Single",
    "location": "CarePass_Fitness_Activity_Single.html"
}, {
    "name": "action",
    "location": "action.html"
}, {
    "name": "load",
    "location": "load.html"
}, {
    "name": "cancer",
    "location": "cancer.html"
}, {
    "name": "tests",
    "location": "tests.html"
}, {
    "name": "start",
    "location": "start.html"
}, {
    "name": "CarePass_BodyMeasurements_Single",
    "location": "CarePass_BodyMeasurements_Single.html"
}, {
    "name": "link",
    "location": "link.html"
}];

CarePass_Login_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'loginBlock': 'CarePass_Login_loginBlock',
        'mobilegridcell_4': 'CarePass_Login_mobilegridcell_4',
        'mobilelabel1_2': 'CarePass_Login_mobilelabel1_2',
        'mobilegridcell_8': 'CarePass_Login_mobilegridcell_8',
        'loginBtn': 'CarePass_Login_loginBtn',
        'greetingBlock': 'CarePass_Login_greetingBlock',
        'mobilegrid_32': 'CarePass_Login_mobilegrid_32',
        'mobilegridcell_33': 'CarePass_Login_mobilegridcell_33',
        'mobilelabel1_19': 'CarePass_Login_mobilelabel1_19',
        'mobilegridcell_34': 'CarePass_Login_mobilegridcell_34',
        'firstName': 'CarePass_Login_firstName',
        'mobilegridcell_35': 'CarePass_Login_mobilegridcell_35',
        'mobilelabel1_23': 'CarePass_Login_mobilelabel1_23',
        'mobilegridcell_36': 'CarePass_Login_mobilegridcell_36',
        'lastName': 'CarePass_Login_lastName',
        'mobilegridcell_37': 'CarePass_Login_mobilegridcell_37',
        'mobilelabel1_24': 'CarePass_Login_mobilelabel1_24',
        'mobilegridcell_38': 'CarePass_Login_mobilegridcell_38',
        'email': 'CarePass_Login_email',
        'mobilegrid_39': 'CarePass_Login_mobilegrid_39',
        'mobilegridcell_40': 'CarePass_Login_mobilegridcell_40',
        'greetingText': 'CarePass_Login_greetingText',
        'mobilegridcell_42': 'CarePass_Login_mobilegridcell_42',
        'Continuer': 'CarePass_Login_Continuer',
        'mobilegridcell_44': 'CarePass_Login_mobilegridcell_44',
        'logOut': 'CarePass_Login_logOut'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=page] div[data-role=footer]").css("bottom", "-36px");
    }

    if (Appery.getTargetPlatform == "I") {
        $.each(window.n2id, function(name, id) {
            var elApperyRole = $("#" + id).attr("data-role");
            if (elApperyRole != "appery_label" && elApperyRole != "appery_link") {
                var appleDataSelector = "#" + id + "[x-apple-data-detectors], #" + id + " [x-apple-data-detectors]";
                $(appleDataSelector).attr("x-apple-data-detectors", "false");
            }
        });
    }

    Appery.CurrentScreen = 'CarePass_Login';

    /*
     * Nonvisual components
     */
    var datasources = [];

    Current_User = new Appery.DataSource(CarePass_CurrentUser_GET, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("CarePass_Login");
        },
        'onSuccess': function(data) {
            Tiggzi("greetingBlock").show();
            $("#ajaxBusy").hide();
            setTimeout(function() {
                Tiggzi("greetingText").fadeOut(500);
            }, 5500);
        },
        'onError': function(jqXHR, textStatus, errorThrown) {
            Login.deleteCookie("access_token");
            Tiggzi("loginBlock").show();
            Tiggzi("greetingBlock").hide();
            $(".loginHeader h1").text("Authorization");
        },
        'responseMapping': [{
            'PATH': ['email'],
            'ID': 'email',
            'ATTR': '@'
        }, {
            'PATH': ['firstName'],
            'ID': 'firstName',
            'ATTR': '@'
        }, {
            'PATH': ['lastName'],
            'ID': 'lastName',
            'ATTR': '@'
        }],
        'requestMapping': [{
            'PATH': ['Authorization'],
            'TYPE': 'STRING',
            'HEADER': true,
            'ID': '___local_storage___',
            'ATTR': 'token',
            'TRANSFORMATION': function(value) {
                return "Bearer " + value;
            }
        }, {
            'PATH': ['Accept'],
            'TYPE': 'STRING',
            'HEADER': true,
            'ATTR': 'application/json'
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'https://api.carepass.com/user-directory-api/users/currentUser'
        }, {
            'PATH': ['appery-transformation'],
            'HEADER': true,
            'ATTR': 'checkTunnel'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1396056549064'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2400659'
        }]
    });

    datasources.push(Current_User);

    GetAccessToken = new Appery.DataSource(CarePass_GetAccessToken, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("CarePass_Login");
        },
        'onSuccess': function(data) {
            Login.getSuccessfull(data);
        },
        'onError': function(jqXHR, textStatus, errorThrown) {
            console.log("error");
        },
        'responseMapping': [{
            'PATH': ['access_token'],
            'ID': '___local_storage___',
            'ATTR': 'token'
        }],
        'requestMapping': [{
            'PATH': ['response_type'],
            'TYPE': 'STRING',
            'ATTR': 'code'
        }, {
            'PATH': ['client_id'],
            'TYPE': 'STRING',
            'ATTR': '{CarepassSync}'
        }, {
            'PATH': ['grant_type'],
            'TYPE': 'STRING',
            'ATTR': 'authorization_code'
        }, {
            'PATH': ['code'],
            'TYPE': 'STRING',
            'ID': '___local_storage___',
            'ATTR': 'code'
        }, {
            'PATH': ['client_secret'],
            'TYPE': 'STRING',
            'ATTR': '{ClientSecret}'
        }, {
            'PATH': ['redirect_uri'],
            'TYPE': 'STRING',
            'ATTR': '{ProjectURI}'
        }]
    });

    datasources.push(GetAccessToken);

    /*
     * Events and handlers
     */

    // Before Show
    CarePass_Login_beforeshow = function() {
        Appery.CurrentScreen = "CarePass_Login";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_F0C5_onLoad = CarePass_Login_onLoad = function() {
        screen_F0C5_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        CarePass_Login_deviceEvents();
        CarePass_Login_windowEvents();
        screen_F0C5_elementsEvents();
    }

    // screen window events
    screen_F0C5_windowEvents = CarePass_Login_windowEvents = function() {

        $('#CarePass_Login').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#CarePass_Login').bind({
            pageshow: function() {
                Helper.fixFooterNavbar(this);
                Graphic.getScreenSize();
                Login.startScreen();
            },
        });

    }

    // device events
    CarePass_Login_deviceEvents = function() {

        document.addEventListener("deviceready", function() {
            $(document).unbind('offline ').bind({
                "offline": function() {
                    Appery.navigateTo('CarePass_ErrorPopUp', {
                        transition: 'pop'
                    });
                },
            });

        });
    }

    // screen elements extra js
    screen_F0C5_elementsExtraJS = CarePass_Login_elementsExtraJS = function() {
        // screen (CarePass_Login) extra code

    }

    // screen elements handler
    screen_F0C5_elementsEvents = CarePass_Login_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#CarePass_Login_mobilecontainer1 [name="loginBtn"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Login.authUrl();

                }
            },
        });

        $('#CarePass_Login_mobilecontainer1 [name="Continuer"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('CarePass_Fitness_Activity_All', {
                        reverse: false
                    });

                }
            },
        });

        $('#CarePass_Login_mobilecontainer1 [name="logOut"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Login.logOut();
                    Appery.navigateTo('CarePass_Login', {
                        reverse: false
                    });

                }
            },
        });

    }

    $("#CarePass_Login").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        CarePass_Login_beforeshow();
    });

    if (runBeforeShow) {
        CarePass_Login_beforeshow();
    } else {
        CarePass_Login_onLoad();
    }

}

$("#CarePass_Login").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    CarePass_Login_js();
});