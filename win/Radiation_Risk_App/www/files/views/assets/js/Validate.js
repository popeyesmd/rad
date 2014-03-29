var Validation = {

    MeasurementsForm: function(){
        var form = {
        	value: $(".addMValue").val(),
            time: $(".addMH").val()+":"+$(".addMM").val()+":"+$(".addMS").val()
        };
        var TimeRegEx = new RegExp("([0-1][0-2]|[0][3-9]):([0-5][0-9]):([0-5][0-9])");
        var ValueRegEx = new RegExp("^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$");
        var errorText = {
        	1: "The field 'Value' must not be empty!",
        	2: "The field 'Value' must be a number!",      
        	3: "Use the following time format: 05:15:30 AM"
    	};
        var errorList = [];
        for(var input in form){
            switch(input) {
                case "value":
                    if(form[input] == ""){
                    	errorList.push(1);
            		}
                    if(!ValueRegEx.test(form[input])){
                    	errorList.push(2);
            		}
                	break;
                    
                case "time":
                    if(!TimeRegEx.test(form[input])){
                    	errorList.push(3);
            		}
                	break;
            }
        }
        if (!errorList.length){
            var time = form.time + " " + Tiggzi("addMAmPm").val();
            localStorage.setItem("time", time);
            NewMeasure.execute({});
            
        } else {
        	var errorMsg = "";
            for (i = 0; i < errorList.length; i++) {
        		errorMsg += errorText[errorList[i]] + "\n";
    		};
            var isDevice = isMobile.any();
            if(isDevice){
                navigator.notification.alert(errorMsg, null, "Through the application approved the following errors", "OK");
            } else {
                alert(errorMsg);
            }
        }
    },
    
    ActivitiesForm: function(){
        var form = {
            startTime: $(".addStartTimeH").val()+":"+$(".addStartTimeM").val()+":"+$(".addStartTimeS").val(),
            duration: $(".durationH").val()+":"+$(".durationM").val()+":"+$(".durationS").val(),
            value: $(".addMeasurementValue").val(),
            calories: $(".addCalories").val(),
            distance: $(".addDistance").val(),
            distanceUnits: Tiggzi("addDistanceUnits").val()
        };
        var TimeRegEx = new RegExp("([0-1][0-2]|[0][3-9]):([0-5][0-9]):([0-5][0-9])");
        var ValueRegEx = new RegExp("^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$");
        var DurationRegEx = new RegExp("([0-9]?[0-9]?[0-9]):([0-5][0-9]):([0-5][0-9])");
        var errorText = {
        	1: "The field 'Measurement value' must not be empty!",
        	2: "The field 'Measurement value' must be a number!",      
        	3: "Use the following time format: 05:15:30 AM!",
            4: "Use the following duration format: 125:15:30!",
            5: "The field 'Calories burned' must be a number!",
            6: "The field 'Distance' must be a number!",
            7: "Select 'Distance units'!"
    	};
        var errorList = [];
        for(var input in form){
            switch(input) {
                case "value":
                    if(form[input] == ""){
                    	errorList.push(1);
            		}
                    if(!ValueRegEx.test(form[input])){
                    	errorList.push(2);
            		}
                	break;
                    
                case "startTime":
                    if(!TimeRegEx.test(form[input])){
                    	errorList.push(3);
            		}
                	break;
                
               	case "duration":
                    console.log(form[input]);
                    if(!DurationRegEx.test(form[input])){
                    	errorList.push(4);
            		}
                	break;
                    
                case "calories":
                    if(form[input] != ""){
                    	if(!ValueRegEx.test(form[input])){
                    		errorList.push(5);
            			}
                    }
                	break;
                    
                case "distance":
                    if(form[input] != ""){
                    	if(!ValueRegEx.test(form[input])){
                    		errorList.push(6);
            			}
                    	if(form.distanceUnits == ""){
                    		errorList.push(7);
            			}
                    }
                	break;
            }
        }
        if (!errorList.length){
            var time = form.startTime + " " + Tiggzi("activityAmPm").val();
            var duration = form.duration;
            localStorage.setItem("time", time);
            localStorage.setItem("duration", duration);
            AddActivity.execute({});
            
        } else {
        	var errorMsg = "";
            for (i = 0; i < errorList.length; i++) {
        		errorMsg += errorText[errorList[i]] + "\n";
    		};
            var isDevice = isMobile.any();
            if(isDevice){
                navigator.notification.alert(errorMsg, null, "Through the application approved the following errors", "OK");
            } else {
                alert(errorMsg);
            }
        }
    }
}