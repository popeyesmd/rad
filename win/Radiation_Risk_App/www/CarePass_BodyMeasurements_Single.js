/*
 * JS for CarePass_BodyMeasurements_Single generated by Appery.io
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

CarePass_BodyMeasurements_Single_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilenavbar2_10': 'CarePass_BodyMeasurements_Single_mobilenavbar2_10',
        'mobilenavbaritem4_11': 'CarePass_BodyMeasurements_Single_mobilenavbaritem4_11',
        'mobilenavbaritem4_12': 'CarePass_BodyMeasurements_Single_mobilenavbaritem4_12',
        'mobilenavbaritem4_13': 'CarePass_BodyMeasurements_Single_mobilenavbaritem4_13',
        'measurementTitle': 'CarePass_BodyMeasurements_Single_measurementTitle',
        'singleMeasurement': 'CarePass_BodyMeasurements_Single_singleMeasurement',
        'mobilegridcell_16': 'CarePass_BodyMeasurements_Single_mobilegridcell_16',
        'mobilelabel1_28': 'CarePass_BodyMeasurements_Single_mobilelabel1_28',
        'mobilegridcell_17': 'CarePass_BodyMeasurements_Single_mobilegridcell_17',
        'amType': 'CarePass_BodyMeasurements_Single_amType',
        'mobilegridcell_18': 'CarePass_BodyMeasurements_Single_mobilegridcell_18',
        'mobilelabel1_29': 'CarePass_BodyMeasurements_Single_mobilelabel1_29',
        'mobilegridcell_19': 'CarePass_BodyMeasurements_Single_mobilegridcell_19',
        'amValue': 'CarePass_BodyMeasurements_Single_amValue',
        'mobilegridcell_20': 'CarePass_BodyMeasurements_Single_mobilegridcell_20',
        'mobilelabel1_30': 'CarePass_BodyMeasurements_Single_mobilelabel1_30',
        'mobilegridcell_21': 'CarePass_BodyMeasurements_Single_mobilegridcell_21',
        'amUnits': 'CarePass_BodyMeasurements_Single_amUnits',
        'mobilegridcell_22': 'CarePass_BodyMeasurements_Single_mobilegridcell_22',
        'mobilelabel1_31': 'CarePass_BodyMeasurements_Single_mobilelabel1_31',
        'mobilegridcell_23': 'CarePass_BodyMeasurements_Single_mobilegridcell_23',
        'amDate': 'CarePass_BodyMeasurements_Single_amDate',
        'mobilegridcell_24': 'CarePass_BodyMeasurements_Single_mobilegridcell_24',
        'mobilelabel1_32': 'CarePass_BodyMeasurements_Single_mobilelabel1_32',
        'mobilegridcell_25': 'CarePass_BodyMeasurements_Single_mobilegridcell_25',
        'amTime': 'CarePass_BodyMeasurements_Single_amTime',
        'mobilegridcell_26': 'CarePass_BodyMeasurements_Single_mobilegridcell_26',
        'mobilelabel1_33': 'CarePass_BodyMeasurements_Single_mobilelabel1_33',
        'mobilegridcell_27': 'CarePass_BodyMeasurements_Single_mobilegridcell_27',
        'amNotes': 'CarePass_BodyMeasurements_Single_amNotes',
        'mobilegridcell_36': 'CarePass_BodyMeasurements_Single_mobilegridcell_36',
        'mobilebutton1_34': 'CarePass_BodyMeasurements_Single_mobilebutton1_34',
        'mobilegridcell_37': 'CarePass_BodyMeasurements_Single_mobilegridcell_37',
        'mobilebutton1_35': 'CarePass_BodyMeasurements_Single_mobilebutton1_35',
        'mobilenavbar2_6': 'CarePass_BodyMeasurements_Single_mobilenavbar2_6',
        'mobilenavbaritem4_7': 'CarePass_BodyMeasurements_Single_mobilenavbaritem4_7',
        'mobilenavbaritem4_8': 'CarePass_BodyMeasurements_Single_mobilenavbaritem4_8',
        'mobilenavbaritem4_9': 'CarePass_BodyMeasurements_Single_mobilenavbaritem4_9'
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

    Appery.CurrentScreen = 'CarePass_BodyMeasurements_Single';

    /*
     * Nonvisual components
     */
    var datasources = [];

    MeasurementByID = new Appery.DataSource(CarePass_BodyMeasurements_Id_GET, {
        'onComplete': function(jqXHR, textStatus) {
            Helper.hideOverview();

            $t.refreshScreenFormElements("CarePass_BodyMeasurements_Single");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['measurementType'],
            'ID': 'amType',
            'ATTR': '@'
        }, {
            'PATH': ['numericValue'],
            'ID': 'amValue',
            'ATTR': '@'
        }, {
            'PATH': ['valueUnit'],
            'ID': 'amUnits',
            'ATTR': '@'
        }, {
            'PATH': ['date'],
            'ID': 'amDate',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                return Helper.parseDate(value);
            }
        }, {
            'PATH': ['time'],
            'ID': 'amTime',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                return value == "" ? "-" : Helper.parseTime(value);
            }
        }, {
            'PATH': ['notes'],
            'ID': 'amNotes',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                return value || "-";
            }
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
            'PATH': ['Content-Type'],
            'TYPE': 'STRING',
            'HEADER': true,
            'ATTR': 'application/json'
        }, {
            'PATH': ['id'],
            'TYPE': 'STRING',
            'ID': '___local_storage___',
            'ATTR': 'measurementID'
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'https://api.carepass.com/user-directory-api/users/currentUser/health/body/measurements/{id}'
        }, {
            'PATH': ['appery-transformation'],
            'HEADER': true,
            'ATTR': 'checkTunnel'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1396056550485'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2400682'
        }]
    });

    datasources.push(MeasurementByID);

    /*
     * Events and handlers
     */

    // Before Show
    CarePass_BodyMeasurements_Single_beforeshow = function() {
        Appery.CurrentScreen = "CarePass_BodyMeasurements_Single";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_6467_onLoad = CarePass_BodyMeasurements_Single_onLoad = function() {
        screen_6467_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        CarePass_BodyMeasurements_Single_deviceEvents();
        CarePass_BodyMeasurements_Single_windowEvents();
        screen_6467_elementsEvents();
    }

    // screen window events
    screen_6467_windowEvents = CarePass_BodyMeasurements_Single_windowEvents = function() {

        $('#CarePass_BodyMeasurements_Single').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#CarePass_BodyMeasurements_Single').bind({
            pageshow: function() {
                Helper.showOverview();
                Helper.fixFooterNavbar(this);
                $(".ui-grid-d a").removeClass("ui-btn-active");
                setText('CarePass_BodyMeasurements_Single_measurementTitle', localStorage.getItem('message'));
                try {
                    MeasurementByID.execute({})
                } catch (ex) {
                    console.log(ex.name + '  ' + ex.message);
                    hideSpinner();
                };
            },
        });

    }

    // device events
    CarePass_BodyMeasurements_Single_deviceEvents = function() {

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
    screen_6467_elementsExtraJS = CarePass_BodyMeasurements_Single_elementsExtraJS = function() {
        // screen (CarePass_BodyMeasurements_Single) extra code

    }

    // screen elements handler
    screen_6467_elementsEvents = CarePass_BodyMeasurements_Single_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#CarePass_BodyMeasurements_Single_mobileheader [name="mobilenavbaritem4_11"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('CarePass_BodyMeasurements', {
                        reverse: false
                    });

                }
            },
        });
        $('#CarePass_BodyMeasurements_Single_mobileheader [name="mobilenavbaritem4_12"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('CarePass_BodyMeasurements_New', {
                        reverse: false
                    });

                }
            },
        });
        $('#CarePass_BodyMeasurements_Single_mobileheader [name="mobilenavbaritem4_13"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('CarePass_Fitness_Activity_TimeLine', {
                        reverse: false
                    });

                }
            },
        });

        $('#CarePass_BodyMeasurements_Single_mobilefooter1 [name="mobilenavbaritem4_7"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('CarePass_Fitness_Activity_All', {
                        reverse: false
                    });

                }
            },
        });
        $('#CarePass_BodyMeasurements_Single_mobilefooter1 [name="mobilenavbaritem4_8"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('CarePass_Fitness_Activity_New', {
                        reverse: false
                    });

                }
            },
        });
        $('#CarePass_BodyMeasurements_Single_mobilefooter1 [name="mobilenavbaritem4_9"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('CarePass_Fitness_Activity_Filter', {
                        reverse: false
                    });

                }
            },
        });

    }

    $("#CarePass_BodyMeasurements_Single").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        CarePass_BodyMeasurements_Single_beforeshow();
    });

    if (runBeforeShow) {
        CarePass_BodyMeasurements_Single_beforeshow();
    } else {
        CarePass_BodyMeasurements_Single_onLoad();
    }

}

$("#CarePass_BodyMeasurements_Single").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    CarePass_BodyMeasurements_Single_js();
});