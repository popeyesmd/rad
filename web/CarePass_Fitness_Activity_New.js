/*
 * JS for CarePass_Fitness_Activity_New generated by Appery.io
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

CarePass_Fitness_Activity_New_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilenavbar2_6': 'CarePass_Fitness_Activity_New_mobilenavbar2_6',
        'mobilenavbaritem4_7': 'CarePass_Fitness_Activity_New_mobilenavbaritem4_7',
        'mobilenavbaritem4_8': 'CarePass_Fitness_Activity_New_mobilenavbaritem4_8',
        'mobilenavbaritem4_9': 'CarePass_Fitness_Activity_New_mobilenavbaritem4_9',
        'mobilelabel1_21': 'CarePass_Fitness_Activity_New_mobilelabel1_21',
        'addDescription': 'CarePass_Fitness_Activity_New_addDescription',
        'mobilelabel1_92': 'CarePass_Fitness_Activity_New_mobilelabel1_92',
        'addNotes': 'CarePass_Fitness_Activity_New_addNotes',
        'mobilelabel1_22': 'CarePass_Fitness_Activity_New_mobilelabel1_22',
        'addType': 'CarePass_Fitness_Activity_New_addType',
        'mobileselectmenuitem1': 'CarePass_Fitness_Activity_New_mobileselectmenuitem1',
        'mobilelabel1_26': 'CarePass_Fitness_Activity_New_mobilelabel1_26',
        'addExtra': 'CarePass_Fitness_Activity_New_addExtra',
        'mobilelabel1_28': 'CarePass_Fitness_Activity_New_mobilelabel1_28',
        'addDate': 'CarePass_Fitness_Activity_New_addDate',
        'mobilelabel1_61': 'CarePass_Fitness_Activity_New_mobilelabel1_61',
        'mobilegrid_62': 'CarePass_Fitness_Activity_New_mobilegrid_62',
        'mobilegridcell_63': 'CarePass_Fitness_Activity_New_mobilegridcell_63',
        'addStartTimeH': 'CarePass_Fitness_Activity_New_addStartTimeH',
        'mobilelabel1_76': 'CarePass_Fitness_Activity_New_mobilelabel1_76',
        'mobilegridcell_64': 'CarePass_Fitness_Activity_New_mobilegridcell_64',
        'addStartTimeM': 'CarePass_Fitness_Activity_New_addStartTimeM',
        'mobilelabel1_77': 'CarePass_Fitness_Activity_New_mobilelabel1_77',
        'mobilegridcell_67': 'CarePass_Fitness_Activity_New_mobilegridcell_67',
        'addStartTimeS': 'CarePass_Fitness_Activity_New_addStartTimeS',
        'mobilegridcell_68': 'CarePass_Fitness_Activity_New_mobilegridcell_68',
        'activityAmPm': 'CarePass_Fitness_Activity_New_activityAmPm',
        'mobileselectmenuitem1': 'CarePass_Fitness_Activity_New_mobileselectmenuitem1',
        'mobilelabel1_30': 'CarePass_Fitness_Activity_New_mobilelabel1_30',
        'addStartCity': 'CarePass_Fitness_Activity_New_addStartCity',
        'mobilelabel1_32': 'CarePass_Fitness_Activity_New_mobilelabel1_32',
        'addStartState': 'CarePass_Fitness_Activity_New_addStartState',
        'mobilelabel1_35': 'CarePass_Fitness_Activity_New_mobilelabel1_35',
        'addStartCountry': 'CarePass_Fitness_Activity_New_addStartCountry',
        'mobilelabel1_37': 'CarePass_Fitness_Activity_New_mobilelabel1_37',
        'addEndCountry': 'CarePass_Fitness_Activity_New_addEndCountry',
        'mobilelabel1_39': 'CarePass_Fitness_Activity_New_mobilelabel1_39',
        'addEndState': 'CarePass_Fitness_Activity_New_addEndState',
        'mobilelabel1_41': 'CarePass_Fitness_Activity_New_mobilelabel1_41',
        'addEndCount': 'CarePass_Fitness_Activity_New_addEndCount',
        'mobilelabel1_43': 'CarePass_Fitness_Activity_New_mobilelabel1_43',
        'addCalories': 'CarePass_Fitness_Activity_New_addCalories',
        'mobilelabel1_45': 'CarePass_Fitness_Activity_New_mobilelabel1_45',
        'addDistance': 'CarePass_Fitness_Activity_New_addDistance',
        'mobilelabel1_47': 'CarePass_Fitness_Activity_New_mobilelabel1_47',
        'addDistanceUnits': 'CarePass_Fitness_Activity_New_addDistanceUnits',
        'mobileselectmenuitem1': 'CarePass_Fitness_Activity_New_mobileselectmenuitem1',
        'mobilelabel1_51': 'CarePass_Fitness_Activity_New_mobilelabel1_51',
        'mobilegrid_79': 'CarePass_Fitness_Activity_New_mobilegrid_79',
        'mobilegridcell_80': 'CarePass_Fitness_Activity_New_mobilegridcell_80',
        'durationH': 'CarePass_Fitness_Activity_New_durationH',
        'mobilelabel1_88': 'CarePass_Fitness_Activity_New_mobilelabel1_88',
        'mobilegridcell_81': 'CarePass_Fitness_Activity_New_mobilegridcell_81',
        'durationM': 'CarePass_Fitness_Activity_New_durationM',
        'mobilelabel1_89': 'CarePass_Fitness_Activity_New_mobilelabel1_89',
        'mobilegridcell_84': 'CarePass_Fitness_Activity_New_mobilegridcell_84',
        'durationS': 'CarePass_Fitness_Activity_New_durationS',
        'mobilelabel1_53': 'CarePass_Fitness_Activity_New_mobilelabel1_53',
        'addMeasurementType': 'CarePass_Fitness_Activity_New_addMeasurementType',
        'mobileselectmenuitem1': 'CarePass_Fitness_Activity_New_mobileselectmenuitem1',
        'mobilelabel1_56': 'CarePass_Fitness_Activity_New_mobilelabel1_56',
        'addMeasurementValue': 'CarePass_Fitness_Activity_New_addMeasurementValue',
        'mobilelabel1_58': 'CarePass_Fitness_Activity_New_mobilelabel1_58',
        'addMeasurementUnit': 'CarePass_Fitness_Activity_New_addMeasurementUnit',
        'mobileselectmenuitem1': 'CarePass_Fitness_Activity_New_mobileselectmenuitem1',
        'mobilelabel1_91': 'CarePass_Fitness_Activity_New_mobilelabel1_91',
        'mobilebutton1_90': 'CarePass_Fitness_Activity_New_mobilebutton1_90',
        'mobilenavbar2_2': 'CarePass_Fitness_Activity_New_mobilenavbar2_2',
        'mobilenavbaritem4_3': 'CarePass_Fitness_Activity_New_mobilenavbaritem4_3',
        'mobilenavbaritem4_4': 'CarePass_Fitness_Activity_New_mobilenavbaritem4_4',
        'mobilenavbaritem4_5': 'CarePass_Fitness_Activity_New_mobilenavbaritem4_5'
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

    Appery.CurrentScreen = 'CarePass_Fitness_Activity_New';

    /*
     * Nonvisual components
     */
    var datasources = [];

    AddActivity = new Appery.DataSource(CarePass_Fitness_Activity_POST, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("CarePass_Fitness_Activity_New");
        },
        'onSuccess': function(data) {
            localStorage.setItem('message', 'New activity was added successfully!');
            localStorage.setItem("activityID", data[0].id);
            Appery.navigateTo('CarePass_Fitness_Activity_Single', {
                reverse: false
            });
        },
        'onError': function(jqXHR, textStatus, errorThrown) {
            Helper.alertError(jqXHR.responseText);
        },
        'responseMapping': [],
        'requestMapping': [{
            'PATH': ['root', 'measurements', 'measurementType'],
            'TYPE': 'STRING',
            'ID': 'addMeasurementType',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'measurements', 'value'],
            'TYPE': 'STRING',
            'ID': 'addMeasurementValue',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'measurements', 'unit'],
            'TYPE': 'STRING',
            'ID': 'addMeasurementUnit',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'sourceType'],
            'TYPE': 'STRING',
            'ATTR': 'Device'
        }, {
            'PATH': ['root', 'description'],
            'TYPE': 'STRING',
            'ID': 'addDescription',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'notes'],
            'TYPE': 'STRING',
            'ID': 'addNotes',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'type'],
            'TYPE': 'STRING',
            'ID': 'addType',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'typeExtra'],
            'TYPE': 'STRING',
            'ID': 'addExtra',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'date'],
            'TYPE': 'STRING',
            'ID': 'addDate',
            'ATTR': 'defaultDateValue'
        }, {
            'PATH': ['root', 'startTime'],
            'TYPE': 'STRING',
            'ID': 'addDate',
            'ATTR': 'defaultDateValue',
            'TRANSFORMATION': function(value) {
                var time = Helper.correctTimeFormat(localStorage.getItem("time"));
                return value + time;
            }
        }, {
            'PATH': ['root', 'startCity'],
            'TYPE': 'STRING',
            'ID': 'addStartCity',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'startState'],
            'TYPE': 'STRING',
            'ID': 'addStartState',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'startCountry'],
            'TYPE': 'STRING',
            'ID': 'addStartCountry',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'endCity'],
            'TYPE': 'STRING',
            'ID': 'addEndCountry',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'endState'],
            'TYPE': 'STRING',
            'ID': 'addEndState',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'endCountry'],
            'TYPE': 'STRING',
            'ID': 'addEndCount',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'caloriesBurned'],
            'TYPE': 'STRING',
            'ID': 'addCalories',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'distance'],
            'TYPE': 'STRING',
            'ID': 'addDistance',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'distanceUnit'],
            'TYPE': 'STRING',
            'ID': 'addDistanceUnits',
            'ATTR': 'value'
        }, {
            'PATH': ['root', 'duration'],
            'TYPE': 'STRING',
            'ID': '___local_storage___',
            'ATTR': 'duration'
        }, {
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
            'PATH': ['root', 'sourceType'],
            'TYPE': 'STRING',
            'ATTR': 'Device'
        }, {
            'PATH': ['Authorization'],
            'TYPE': 'STRING',
            'HEADER': true,
            'ATTR': 'Bearer 2744xrbjues7kd5gtrpvp874'
        }, {
            'PATH': ['Accept'],
            'TYPE': 'STRING',
            'HEADER': true,
            'ATTR': 'application/json'
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'https://api.carepass.com/user-directory-api/users/currentUser/fitness/activities'
        }, {
            'PATH': ['appery-transformation'],
            'HEADER': true,
            'ATTR': 'checkTunnel'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1396056549509'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2400660'
        }]
    });

    datasources.push(AddActivity);

    /*
     * Events and handlers
     */

    // Before Show
    CarePass_Fitness_Activity_New_beforeshow = function() {
        Appery.CurrentScreen = "CarePass_Fitness_Activity_New";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_7C46_onLoad = CarePass_Fitness_Activity_New_onLoad = function() {
        screen_7C46_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        CarePass_Fitness_Activity_New_deviceEvents();
        CarePass_Fitness_Activity_New_windowEvents();
        screen_7C46_elementsEvents();
    }

    // screen window events
    screen_7C46_windowEvents = CarePass_Fitness_Activity_New_windowEvents = function() {

        $('#CarePass_Fitness_Activity_New').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#CarePass_Fitness_Activity_New').bind({
            pageshow: function() {
                Helper.fixFooterNavbar(this);
                Helper.setCurrentDate("addDate");

                AddActivity.execute = function(settings) {
                    settings = this.__buildRequestSettings(settings);
                    custom_data_processing(settings);
                    this.service.process(settings);
                };

                $(".addStartTimeH, .addStartTimeM, .addStartTimeS, .durationM, .durationS").attr("maxlength", 2);
                $(".durationH").attr("maxlength", 3);
            },
        });

    }

    // device events
    CarePass_Fitness_Activity_New_deviceEvents = function() {

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
    screen_7C46_elementsExtraJS = CarePass_Fitness_Activity_New_elementsExtraJS = function() {
        // screen (CarePass_Fitness_Activity_New) extra code

        /* addType */

        $("#CarePass_Fitness_Activity_New_addType").parent().find("a.ui-btn").attr("tabindex", "2");

        /* addDate */

        CarePass_Fitness_Activity_New_addDate_selector = "#CarePass_Fitness_Activity_New_addDate";
        CarePass_Fitness_Activity_New_addDate_dataPickerOptions = {
            dateFormat: "yy-mm-dd",
            firstDay: 0,

            maxDate: new Date(""),

            minDate: new Date(""),

            dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            showOtherMonths: true
        };

        CarePass_Fitness_Activity_New_addDate_dataPickerOptions.defaultDate = new Date("02/22/2013");

        Appery.__registerComponent('addDate', new Appery.ApperyMobileDatePickerComponent("CarePass_Fitness_Activity_New_addDate", CarePass_Fitness_Activity_New_addDate_dataPickerOptions));

        /* activityAmPm */

        $("#CarePass_Fitness_Activity_New_activityAmPm").parent().find("a.ui-btn").attr("tabindex", "20");

        /* addDistanceUnits */

        $("#CarePass_Fitness_Activity_New_addDistanceUnits").parent().find("a.ui-btn").attr("tabindex", "13");

        /* addMeasurementType */

        $("#CarePass_Fitness_Activity_New_addMeasurementType").parent().find("a.ui-btn").attr("tabindex", "14");

        /* addMeasurementUnit */

        $("#CarePass_Fitness_Activity_New_addMeasurementUnit").parent().find("a.ui-btn").attr("tabindex", "16");

    }

    // screen elements handler
    screen_7C46_elementsEvents = CarePass_Fitness_Activity_New_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#CarePass_Fitness_Activity_New_mobileheader [name="mobilenavbaritem4_7"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('CarePass_BodyMeasurements', {
                        reverse: false
                    });

                }
            },
        });
        $('#CarePass_Fitness_Activity_New_mobileheader [name="mobilenavbaritem4_8"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('CarePass_BodyMeasurements_New', {
                        reverse: false
                    });

                }
            },
        });
        $('#CarePass_Fitness_Activity_New_mobileheader [name="mobilenavbaritem4_9"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('CarePass_Fitness_Activity_TimeLine', {
                        reverse: false
                    });

                }
            },
        });

        $('#CarePass_Fitness_Activity_New_mobilecontainer [name="addStartTimeH"]').die().live({
            focus: function() {
                setText('CarePass_Fitness_Activity_New_addStartTimeH', '');
            },
        });

        $('#CarePass_Fitness_Activity_New_mobilecontainer [name="addStartTimeM"]').die().live({
            focus: function() {
                setText('CarePass_Fitness_Activity_New_addStartTimeM', '');
            },
        });

        $('#CarePass_Fitness_Activity_New_mobilecontainer [name="addStartTimeS"]').die().live({
            focus: function() {
                setText('CarePass_Fitness_Activity_New_addStartTimeS', '');
            },
        });

        $('#CarePass_Fitness_Activity_New_mobilecontainer [name="durationH"]').die().live({
            focus: function() {
                setText('CarePass_Fitness_Activity_New_durationH', '');
            },
        });

        $('#CarePass_Fitness_Activity_New_mobilecontainer [name="durationM"]').die().live({
            focus: function() {
                setText('CarePass_Fitness_Activity_New_durationM', '');
            },
        });

        $('#CarePass_Fitness_Activity_New_mobilecontainer [name="durationS"]').die().live({
            focus: function() {
                setText('CarePass_Fitness_Activity_New_durationS', '');
            },
        });

        $('#CarePass_Fitness_Activity_New_mobilecontainer [name="mobilebutton1_90"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Validation.ActivitiesForm();

                }
            },
        });

        $('#CarePass_Fitness_Activity_New_mobilefooter1 [name="mobilenavbaritem4_3"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('CarePass_Fitness_Activity_All', {
                        reverse: false
                    });

                }
            },
        });

        $('#CarePass_Fitness_Activity_New_mobilefooter1 [name="mobilenavbaritem4_5"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('CarePass_Fitness_Activity_Filter', {
                        reverse: false
                    });

                }
            },
        });

    }

    $("#CarePass_Fitness_Activity_New").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        CarePass_Fitness_Activity_New_beforeshow();
    });

    if (runBeforeShow) {
        CarePass_Fitness_Activity_New_beforeshow();
    } else {
        CarePass_Fitness_Activity_New_onLoad();
    }

}

$("#CarePass_Fitness_Activity_New").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    CarePass_Fitness_Activity_New_js();
});