$.mobile.defaultPageTransition = 'none';

$(window).bind("orientationchange", function (event) {
    Graphic.orientationChange();
});


$(document).bind("mobileinit", function(event) {
    $.extend($.mobile.zoom, {locked:true,enabled:false});

   
});

$(document).bind("pageshow", function() {
    if($("#overview").length == 0) {
        var overview = $('<div></div>').attr('id', 'overview').css({
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'z-index': 1000,
            'width':'100%',
            'height':'100%',
            'display': 'none'
        });
        $('body').append(overview);
    }
});
$(".ExternalMeasurements li, .InternalMeasurements li").live("click", function(){
	var measurement = $("h3", this).text();
    localStorage.setItem("measurement", measurement);
});

function custom_data_processing(settings) {
    var data = settings.data;
    var measurements = [data.root.measurements];
    data.root.measurements = measurements;
    var array = [data.root];
    settings.data = array;
};

var Helper = {
    
	parseDate: function(value) {
        var date = new Date(value);
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[date.getMonth()] + " " + date.getDate() + ", " + (date.getYear()+1900);
    },
    
    showOverview: function() {
    	$("#overview").show();
    },
    
    hideOverview: function() {
    	$("#overview").hide();
    },
    
    parseTime: function(value) {
        var timeTemp1 = value.split("T");
        var timeTemp2 = timeTemp1[1].split("-");
        var time = timeTemp2[0].split(":");
        var hours = time[0];
      	var minutes = time[1];
        var seconds = time[2];
      	var ampm = hours >= 12 ? "PM" : "AM";
      	hours = hours % 12;
      	hours = hours ? hours : 12;
      	return hours + ':' + minutes + ":" + seconds + " " + ampm;;
    },
    
    fixFooterNavbar: function(value){
    	$(value).off('vclick');
		$(value).unbind('click');
        var navbar = $("[data-role='navbar']:visible");
		if($('.tg-state-persist', navbar).length == 0) {
			$(".ui-btn-active", navbar).addClass('tg-state-persist');
		} else {
			$(".ui-btn-active", navbar).removeClass('ui-btn-active');
			$(".tg-state-persist", navbar).addClass('ui-btn-active');
		}
    },
    
    showActivity: function(toValue, maxValue){
        for(var i=1; i<=toValue; i++){
        	$(".allActivities .simpleActivity:eq(" + i + ")").show();
        }
        if(toValue>=maxValue){
        	Tiggzi("showMoreBtn").hide();
        }
    },
    
    pad: function(number, length){
    	var str = "" + number;
    	while (str.length < length) {
        	str = '0'+str;
    	}
    	return str;
    },
    
    convert12To24: function(timeStr){
    	var date = timeStr.split(" ");
        var meridian = date[1];
        date = date[0].split(":");
        var hours = date[0];
        var minutes = date[1];
        var seconds = date[2];
        if (meridian=="PM"){
            if (hours!=12){
                hours=hours*1+12;
            }
            else{
                hours = (minutes!="00") ? "0" : "24";
            }
        }
        return hours + ":" + minutes + ":" + seconds;
    },
    
    correctTimeFormat: function(value){
    	var time = this.convert12To24(value);
   		return "T" + time + "-0400";
	},
    
    setCurrentDate: function(name){
        var currentDate = new Date();
        var date = (currentDate.getMonth()+1) + "/" + currentDate.getDate() + "/" + (currentDate.getYear()+1900);
    	Tiggzi(name).datepicker_dataPickerOptions.defaultDate = date;
		Tiggzi(name).initializeDataPicker();
    },
    
    setCurrentDateBefore: function(name){
        var currentDate = new Date();
        var date = (currentDate.getMonth()) + "/" + currentDate.getDate() + "/" + (currentDate.getYear()+1900);
    	Tiggzi(name).datepicker_dataPickerOptions.defaultDate = date;
		Tiggzi(name).initializeDataPicker();
    },
    
    timeFocus: function(name){
		$(name).attr("value", "");
    },
    
    alertError: function(data){
    	var response = JSON.parse(data);
        var isDevice = isMobile.any();
        $("#ajaxBusy").css("display", "none");
        if(isDevice){
            navigator.notification.alert(response.error.message, null, "Through the application approved the following errors", "OK");
        } else {
            alert(response.error.message);
        }
    }
    
}