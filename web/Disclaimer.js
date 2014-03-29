/*
 * JS for Disclaimer generated by Appery.io
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

Disclaimer_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_3': 'Disclaimer_mobilelabel_3',
        'mobilelabel1_2': 'Disclaimer_mobilelabel1_2',
        'mobilelabel_4': 'Disclaimer_mobilelabel_4',
        'mobilebutton_5': 'Disclaimer_mobilebutton_5'
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

    Appery.CurrentScreen = 'Disclaimer';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    Disclaimer_beforeshow = function() {
        Appery.CurrentScreen = "Disclaimer";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_B0E2_onLoad = Disclaimer_onLoad = function() {
        screen_B0E2_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        Disclaimer_deviceEvents();
        Disclaimer_windowEvents();
        screen_B0E2_elementsEvents();
    }

    // screen window events
    screen_B0E2_windowEvents = Disclaimer_windowEvents = function() {

        $('#Disclaimer').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#Disclaimer').bind({
            pagehide: function() {
                Appery.navigateTo('tests', {
                    reverse: false
                });
            },
        });

    }

    // device events
    Disclaimer_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_B0E2_elementsExtraJS = Disclaimer_elementsExtraJS = function() {
        // screen (Disclaimer) extra code

    }

    // screen elements handler
    screen_B0E2_elementsEvents = Disclaimer_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#Disclaimer_mobilecontainer [name="mobilebutton_5"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('tests', {
                        reverse: false
                    });

                }
            },
        });

    }

    $("#Disclaimer").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        Disclaimer_beforeshow();
    });

    if (runBeforeShow) {
        Disclaimer_beforeshow();
    } else {
        Disclaimer_onLoad();
    }

}

$("#Disclaimer").die("dialoginit").live("dialoginit", function(event, ui) {
    Appery.processSelectMenu($(this));
    Disclaimer_js();
});

$("#Disclaimer").die("dialogcreate").live("dialogcreate", function(event, ui) {
    //Most components initializations are done on "pagecreate" event. This event must be triggered for dialogs too.
    $(this).trigger("pagecreate");
});