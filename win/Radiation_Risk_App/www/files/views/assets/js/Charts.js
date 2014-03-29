var Graphic = {
    
    render: function(){
    	var data = JSON.parse(localStorage.getItem("graphicData")); 
        var canvasHeight = localStorage.getItem("height");
        var canvasWidth = localStorage.getItem("width");
        var Canvas = document.getElementById("canvas");
        if(Canvas.getContext) {
            var cv = Canvas.getContext('2d');
            var _length = data.length;
            var MinMax = this.maxMinFind(data, _length);
            var numX = this.xValuesNum(canvasWidth, _length);
            var stepX = Math.round((canvasWidth-40)/_length);
            var stepY = (canvasHeight-45)/(MinMax[1]-MinMax[0]);
            data = this.sortDataByDate(data, _length);
            cv.clearRect(0, 0, canvasWidth, canvasHeight);
            this.axesDraw(cv, canvasHeight, canvasWidth, stepX, stepY, data, _length, numX, MinMax);
            this.graphicDraw(cv, canvasHeight, stepX, stepY, data, MinMax, _length);
            cv.stroke();
            cv.fill();
        }
    },
    
    axesDraw: function(cv, canvasHeight, canvasWidth, stepX, stepY, data, _length, numX, MinMax){
        cv.beginPath();
        cv.strokeStyle = "#4e8f1b";
        cv.fillStyle = "#4e8f1b";
        cv.lineWidth = 2;
        cv.moveTo(25, 0);
        cv.lineTo(25, canvasHeight-15);
        cv.moveTo(0, canvasHeight-15);
        cv.lineTo(canvasWidth, canvasHeight-15);
        var positionX = 40;
        for (var i = 0; i < _length; i++){
            if(numX!=0){
                if(i%numX==0){
                    var date = (data[i].date).split("-");
                    cv.moveTo(positionX, canvasHeight - 15);
                    cv.lineTo(positionX, canvasHeight - 10);
                    cv.fillText(date[1]+"/"+date[2], positionX -14, canvasHeight - 1);
                }
        	} else{
                var date = (data[i].date).split("-");
                cv.moveTo(positionX, canvasHeight - 15);
                cv.lineTo(positionX, canvasHeight - 10);
                cv.fillText(date[1]+"/"+date[2], positionX -14, canvasHeight - 1);
            }
            positionX += stepX;
        }
        var valuesArray = this.sortDataByValue(data, _length);
        var positionYlow = 0;
        for (var i = 0; i < valuesArray.length; i++){
            var positionY = Math.round((canvasHeight-(valuesArray[i]-MinMax[0])*stepY)-30);
            if(i!=0){
            	if((positionYlow-positionY)>=10){
                	cv.moveTo(25, positionY);
        			cv.lineTo(20, positionY);
       				cv.fillText(valuesArray[i], 0, positionY+3);
                    positionYlow = positionY;
                }
            } else {
            	cv.moveTo(25, positionY);
        		cv.lineTo(20, positionY);
       			cv.fillText(valuesArray[i], 0, positionY+3);
                positionYlow = positionY;
            }
        }
    },
    
    graphicDraw: function(cv, canvasHeight, stepX, stepY, data, MinMax, _length){
        for(var i=0; i<_length; i++){
        	var positionX = 40+i*stepX;
            var positionY = (canvasHeight-(data[i].numericValue-MinMax[0])*stepY)-30;
            if(i==0){
            	cv.moveTo(positionX, positionY);
                cv.arc(positionX, positionY, 2, 0, Math.PI * 2, false);
                cv.moveTo(positionX, positionY);
            } else {
                //cv.moveTo(positionX, positionY);
                cv.lineTo(positionX, positionY);
                cv.arc(positionX, positionY, 2, 0, Math.PI * 2, false);
                cv.moveTo(positionX, positionY);
            }
            
        }
    },
    
    getScreenSize: function(){
        var canvasHeight = $(".mobileContent").height() - 48;
        var canvasWidth = $(".mobileContent").width();
        $(".graphic").css({
            height: canvasHeight,
            width: canvasWidth
        });
        var Canvas = document.getElementById("canvas");
        Canvas.width = canvasWidth;
        Canvas.height = canvasHeight;
        localStorage.setItem("width", canvasWidth);
        localStorage.setItem("height", canvasHeight);
    },
    
    maxMinFind: function(data, _length){
        var _min = 10000000000000;
        var _max = 0;
        for(var i=0; i<_length; i++){
            if(data[i].numericValue > _max){
            	_max = data[i].numericValue;
            }
            if(data[i].numericValue < _min){
                _min = data[i].numericValue;
            }
        }
        return [_min, _max];
    },
    
    xValuesNum: function(canvasWidth, _length){
    	var rNum = (canvasWidth-40)/30;
        if(_length>rNum){
            var rNum = Math.round(_length/rNum);
        }else{
            var rNum = 0;
        }
        return rNum;
    },
    
    sortDataByDate: function(data, _length){
        var flag = true;
        while(flag == true){
            flag = false;
    		for(var i=0; i<_length-1; i++){
                var date1 = new Date(data[i].date);
                var date2 = new Date(data[i+1].date);
                if(date2<date1){
                    flag = true;
                    var temp = data[i];
                    data[i] = data[i+1];
                    data[i+1] = temp;
                }
        	}
        }
        return data;
    },
    
    sortDataByValue: function(data, _length){
    	var valuesArray = new Array;
        for(var i=0; i<_length; i++){
        	valuesArray[i] = data[i].numericValue;
        }
        valuesArray.sort(function(a,b){return a-b;});
        for(var i=0; i<valuesArray.length; i++){
            for(var j=i+1; j<valuesArray.length;){
                if (valuesArray[i] == valuesArray[j]){
                    valuesArray.splice(j, 1);
                } else {
                	j++;
                }
            }
        };
        return valuesArray;
    },
    
    orientationChange: function(){
        var canvasHeight = localStorage.getItem("height");
        var canvasWidth = localStorage.getItem("width");
        if(canvasHeight>canvasWidth){
        	var newCanvasHeight = parseInt(canvasWidth) - 197;
            var newCanvasWidth = parseInt(canvasHeight) + 210;
        } else {
        	var newCanvasHeight = parseInt(canvasWidth) - 210;
            var newCanvasWidth = parseInt(canvasHeight) + 197;
        }
        $(".graphic").css({
            height: newCanvasHeight,
            width: newCanvasWidth
        });
        var Canvas = document.getElementById("canvas");
        Canvas.width = newCanvasWidth;
        Canvas.height = newCanvasHeight;
        localStorage.setItem("width", newCanvasWidth);
        localStorage.setItem("height", newCanvasHeight);
        this.render();
    }
}