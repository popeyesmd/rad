/*
 * JS for map2 generated by Appery.io
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

map2_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'input': 'map2_input',
        'mobilebutton_4': 'map2_mobilebutton_4',
        'mobilebutton_5': 'map2_mobilebutton_5',
        'map': 'map2_map',
        'marker_7': 'map2_marker_7'
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

    Appery.CurrentScreen = 'map2';

    /*
     * Nonvisual components
     */
    var datasources = [];

    geolocation2 = new Appery.DataSource(GeolocationService, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("map2");
        },
        'onSuccess': function(data) {
            var map = Appery('map');
            map.options['address'] = '';
            map.refresh();
        },
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['coords', 'latitude'],
            'ID': 'map',
            'ATTR': 'latitude'
        }, {
            'PATH': ['coords', 'longitude'],
            'ID': 'map',
            'ATTR': 'longitude'
        }],
        'requestMapping': [{
            'PATH': ['options', 'maximumAge'],
            'TYPE': 'STRING',
            'ATTR': '3000'
        }, {
            'PATH': ['options', 'timeout'],
            'TYPE': 'STRING',
            'ATTR': '5000'
        }, {
            'PATH': ['options', 'enableHighAccuracy'],
            'TYPE': 'STRING',
            'ATTR': 'true'
        }, {
            'PATH': ['options', 'watchPosition'],
            'TYPE': 'STRING',
            'ATTR': 'false'
        }]
    });

    datasources.push(geolocation2);

    /*
     * Events and handlers
     */

    // Before Show
    map2_beforeshow = function() {
        Appery.CurrentScreen = "map2";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_B2B7_onLoad = map2_onLoad = function() {
        screen_B2B7_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        map2_deviceEvents();
        map2_windowEvents();
        screen_B2B7_elementsEvents();
    }

    // screen window events
    screen_B2B7_windowEvents = map2_windowEvents = function() {

        $('#map2').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    }

    // device events
    map2_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_B2B7_elementsExtraJS = map2_elementsExtraJS = function() {
        // screen (map2) extra code

        /* map */

        $("[name = 'map']").wrap("<div/>");
        $("[name = 'map']").parent().css("margin-left", $("[name = 'map']").css("margin-left"));
        $("[name = 'map']").parent().css("margin-right", $("[name = 'map']").css("margin-right"));
        $("[name = 'map']").css("margin-left", '0');
        $("[name = 'map']").css("margin-right", '0');

        var map_options = {
            markerSourceName: "map_markers",
            latitude: "",
            longitude: "",
            address: "New York, NY",
            zoom: 10,
            showLocationMarker: true
        }

        Appery.__registerComponent('map', new Appery.ApperyMapComponent("map", map_options));
        $("[name='map_markers'] [apperytype='marker']").attr("reRender", "map");
        $("[name='map']").closest("[data-role='page']").bind({
            pageshow: function() {
                if (Appery('map') != undefined) {
                    Appery('map').refresh();
                }
            }
        });

    }

    // screen elements handler
    screen_B2B7_elementsEvents = map2_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#map2_mobilecontainer [name="mobilebutton_4"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    var location = Appery('input').val();
                    if (location == '') {
                        alert('Please enter a location.');
                        return;
                    }
                    var map = Appery('map');
                    map.options['address'] = location;
                    map.refresh();

                }
            },
        });
        $('#map2_mobilecontainer [name="mobilebutton_5"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    try {
                        geolocation2.execute({})
                    } catch (ex) {
                        console.log(ex.name + '  ' + ex.message);
                        hideSpinner();
                    };

                }
            },
        });

    }

    $("#map2").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        map2_beforeshow();
    });

    if (runBeforeShow) {
        map2_beforeshow();
    } else {
        map2_onLoad();
    }

}

$("#map2").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    map2_js();
});