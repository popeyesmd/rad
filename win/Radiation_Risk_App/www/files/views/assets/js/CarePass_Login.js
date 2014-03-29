var Login = {
    
    settings: function() {
        var settings = {
        	"host": CarePass_ServicesSettings["Host"],
    		"clientId":  CarePass_ServicesSettings["CarepassSync"],
    		"scope": CarePass_ServicesSettings["Scope"],
        	"client_secret":  CarePass_ServicesSettings["ClientSecret"],
    		//"redirectUrl": !isMobile.any() ?  'http://appery.io/m/login.seam' : CarePass_ServicesSettings["ProjectURI"]
            "redirectUrl": CarePass_ServicesSettings["ProjectURI"] 
        };
        return settings;
    },
    
    startScreen: function(){
        var isDevice = isMobile.any();
        var access_token = this.getCookie("access_token");
        if(access_token && access_token!=="null"){
            $(".loginHeader h1").text("My Fitness");
        	Tiggzi("loginBlock").hide();
            localStorage.setItem("token", access_token);
            Current_User.execute({});
        } else {
            $(".loginHeader h1").text("Authorization");
            Tiggzi("loginBlock").show();
            Tiggzi("greetingBlock").hide();
            if((isDevice==null && window.location.hostname.indexOf("appery.io")!=-1) || (isDevice && window.location.hostname.indexOf("appery.io")!=-1)){
            	this.parseUrl(null);
            }
        }
    },
    
    parseUrl: function(url){
        if(url==null){
            var query_string = {};
            var query = window.location.search.substring(1);
            var vars = query.split("&");
        } else {
            
            var link = (decodeURIComponent(url));//decodeURIComponent
    		var query_string = {};
  			var query = link.split("?");
  			var vars = query;
        }
  		for (var i=0; i<vars.length; i++) {
    		var pair = vars[i].split("=");
    		if (typeof query_string[pair[0]] === "undefined") {
      			query_string[pair[0]] = pair[1];
    		} else if (typeof query_string[pair[0]] === "string") {
      			var arr = [ query_string[pair[0]], pair[1] ];
      			query_string[pair[0]] = arr;
    		} else {
      			query_string[pair[0]].push(pair[1]);
    		}
  		}
        
        if(url==null && query_string.code){
            Tiggzi("loginBlock").hide();
            localStorage.setItem("code", query_string.code);
            GetAccessToken.execute({});
        } else{
            return query_string.code || undefined;
        };
    },

	getSuccessfull: function(data){
        var CurrentTime = new Date();
		var ExpireTime = new Date(CurrentTime.getTime() + data.expires_in*1000);
		this.setCookie("access_token", data.access_token, ExpireTime);
		$(".loginHeader h1").text("My Fitness");
		Tiggzi("loginBlock").hide();
        Current_User.execute({});
    },
    
    authUrl: function(){
        var isDevice = isMobile.any();
        var settings = this.settings();
		var endUserAuthorizationEndpoint = settings.host + "/authorize?";
		var authUrl = endUserAuthorizationEndpoint + $.param({      
    		response_type: "code",
    		client_id: settings.clientId, 
    		scope: settings.scope,
    		redirect_uri: settings.redirectUrl
		});
        if(isDevice && window.location.hostname.indexOf("appery.io")==-1){
            this.openCB(authUrl);
        } else {
        	window.top.location = authUrl;
        }
    },
    
    openCB: function(authUrl){
    	var settings = this.settings();
    	var _this = this;
    	window.plugins.childBrowser.showWebPage(authUrl, {showLocationBar : false});
    	window.plugins.childBrowser.onLocationChange = function(url){
    		var code = _this.parseUrl(url);
            
    		if(code){
				localStorage.setItem("code", code);
    			window.plugins.childBrowser.close();
    			GetAccessToken.execute({});
    		}
    	}
    },
    
    setCookie: function(name, value, expires, path, domain, secure){
   		document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
	},
    
    getCookie: function(name){
		var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	    return matches ? decodeURIComponent(matches[1]) : undefined;
	},
    
    deleteCookie: function(name) {
        var ExpireTime = new Date(0);
	    this.setCookie(name, null, ExpireTime);
	},
    
    logOut: function(){
        this.deleteCookie("access_token");
        Tiggzi("loginBlock").show();
        Tiggzi("greetingBlock").hide();
        $(".loginHeader h1").text("Authorization");
    }
};

var isMobile = {
    
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    
    any: function() {
        return (this.Android() || this.iOS());
    }
    
};