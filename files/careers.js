var loadend=true;
var retrieveend=true;

var common_tempFrame='tempframe';
var common_continue_open=false;
var common_continue_open_time=300000;	// continue(잠시만기다려주십시오 Timeout 시간)
var common_continue_alertTimerId = 0;

var common_time_TimerId = null;
var common_time=600;				// 현재남은시간
var common_msg_time=60;				// 경고뜨는시간
var common_max_time=600;			// 최대시간(초기화시간)
var common_interval_time=1000;		// 체크주기 1000 (1초)

function BoxLoader()
{
	document.write("<div id='common_BaseDiv'><a href='javascript:hidePopupDiv()' tabindex='-1'><div style='width:100%;height:100%'></div></a></div>");
	document.write("<div id='common_PopupDiv' title='팝업용 div'></div>");
	document.write("<iframe name='tempframe' id='tempframe' src='about:blank' frameborder='0' width='0' height='0' title='내용 없음'></iframe>");
	document.write("<div name='toTempframe' id='toTempframe' style='position: absolute; left: 0px; top: 0px; width:0px; height:0px;'></div>");
	document.write("<div id='common_Continue' title='잠시만 기다려 주시기 바랍니다.'><div id='common_Continue_bg'></div><div id='common_Continue_img'><img id='common_ContinueFlash' src='/recweb/images/common/page-loader.gif' alt='잠시만 기다려 주시기 바랍니다.'></div></div>");
	
}

function startLogoutTime()
{
	if (common_time_TimerId==null)
	{
		common_time_TimerId = setInterval("countdown()",common_interval_time);
		//console.log("timeStart");
	}
}

function stopLogoutTime()
{
	clearTimeout(common_time_TimerId);
	common_time_TimerId=null;
}

function countdown()
{
	//console.log("time Tick : " +common_time );
	common_time -= 1;
	
	if (common_msg_time >= common_time){
		openTimeout();
	}
	
	if (common_time<=0)
	{
		stopLogoutTime();
		tempframe.location.href="/rec/apply/ComResumeServlet?cmd=comLogout";
		return;
	}
}

function extentionTime()
{
	common_time = common_max_time;
}

function comLogout()
{
	if (!confirm("로그아웃 하시겠습니까?"))
	{
		return;
	}
	continueOpen('W');
	tempframe.location.href="/rec/apply/ComResumeServlet?cmd=comLogout";
}


function openTimeout(){

	if ($('#timeout').hasClass('blind')){
		
		$('#timeout').slideUp().removeClass('blind').slideDown({
		'duration':'slow',
		'easing':'expoEaseOut',
		'done': function(){

			hidePopupDiv(1);

			sCur_name="TimeOut";
			if ( $("#common_BaseDiv").css("display")=='none' )	{ 
				$("#common_BaseDiv").hide().css("height",$(document).height() + 'px').fadeIn("slow");
			}
			$("#extendTime").focus();
		}
		});
	} else {
		$("#extendTime").focus();
	}
	$("#timecnt").html(common_time); 
}


function closeTimeout(){
	$('#timeout').slideUp({
		'duration':'slow',
		'easing':'expoEaseOut',
		'done': function(){
			common_time = common_max_time;
			$('#timeout').addClass('blind');
		}
	});
}

//변수받기 함수
function fc_querystring(ars_name)
{
   var lo_result    = new Array;
   var ls_url_query = location.search; // url에서 ? 부터의 문자열
   var lo_array1    = new Array; // & 로 분리시킨 값이 들어갈배열
   var lo_array2    = new Array; // = 로 분리시킨 값이 들어갈배열

   ls_url_query = ls_url_query.slice(1);      // 첫문자 ?는 자르고
   lo_array1    = ls_url_query.split("&");    // & 배열로 나눈다.

   for(i=0; i< lo_array1.length; i++)
   {
      lo_array2 = lo_array1[i].split("=");    // = 배열나누기
      lo_result[lo_array2[0]] = ""+lo_array2[1]; // 결과를 lo_result에 저장
   }  

   if(lo_result[ars_name] != null)
   {     
      return ""+lo_result[ars_name];     
   }
   else
   {     
      return "";
   }
}	
//변수받기 함수
var Dep1 = ""+ fc_querystring("Dep1")
var Dep2 = ""+ fc_querystring("Dep2")
var Dep3 = ""+ fc_querystring("Dep3")


//화면 사이즈 변경시 호출
$(window).resize(function() {

});

	
function right(e) {   
    if (navigator.appName == 'Netscape' && (e.which == 3 || e.which == 2))  {
        return false;   
    }
    else if (navigator.appName == 'Microsoft Internet Explorer' && (event.button == 2 || event.button == 3)) {   
        alert("오른쪽 마우스버튼을 사용할 수 없습니다.");
        return false;   
    }   
    return true;  
}

function GetCookie(sName) {
 var aCookie = document.cookie.split("; ");
 for (var i=0; i < aCookie.length; i++) {
  var aCrumb = aCookie[i].split("=");
  if (sName == aCrumb[0]) 
   return unescape(aCrumb[1]);
 }
 return null;
}


function setCookie(name, value, expiredays)
{
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + ";path=/;expires=" + todayDate.toGMTString() + ";"
}

function nonePopup(id)
{
	setCookie("pop"+id, "N", 1);
	closeWin(id);
}
function closeWin(id)
{
	pop_close[id].dialog( "close" ); 
}

function continueOpen(type,timeout) {

	var obj = window.document.getElementById("common_Continue");
	var objbg = window.document.getElementById("common_Continue_bg");
	var fls = window.document.getElementById("common_ContinueFlash");
	if ( obj == null ) obj = document.getElementById("common_Continue");
	if ( fls == null ) fls = document.getElementById("common_ContinueFlash");
	if ( obj == null ) return;

	var flsrc='';
	switch (type) {
	  case "L":  // 화면로딩시에 사용함
		flsrc = '/recweb/images/common/page-loader.gif';
		var loadend=false;
	  break;
	  case "W":  // Wait 기다림 표시
		flsrc = '/recweb/images/common/page-loader.gif';
		retrieveend = false;
	  break;
	  case "R":  // 데이터 조회시
		flsrc = '/recweb/images/common/page-loader.gif';
		retrieveend = false;
	  break;
	  case "C":  // 페이지 이동시 
		flsrc = '/recweb/images/common/page-loader.gif';
		retrieveend = false;
	  break;
	  case "S":  // 저장시
		flsrc = '/recweb/images/common/save-loader.gif';
		retrieveend = false;
	  break;
	}
	if (fls.src != flsrc) fls.src=flsrc;
	objbg.style.height=$(document).height() + 'px';
	
	//console.log("continueOpen('"+type+"');loadend="+loadend +";retrieveend="+retrieveend);

	$("#common_Continue").show()

	if (timeout!=null&&timeout==true)
	{
		countWait();
	}	
}

function continueClose(type) {

	if (type=='L') { 
		loadend=true;  // 화면자체 로딩 종료
	} else {
		retrieveend=true;  // 데이터 조회 및 대기표시 종료
	}

	//console.log("continueClose('"+type+"');loadend="+loadend +";retrieveend="+retrieveend);
	
	if (loadend && retrieveend) {
		$("#common_Continue").fadeOut('slow', function() {
		  $("#common_Continue").hide()
		});
	}
	clearWait();
}

function countWait()
{
	if (!common_continue_open)
	{
		common_continue_open = true;
		common_continue_alertTimerId = setTimeout("noResponse()",common_continue_open_time);
	}
}

function clearWait()
{
	if (common_continue_open)
	{
		common_continue_open = false;
		clearTimeout ( common_continue_alertTimerId );
	}
}

function noResponse()
{
	common_continue_open = false;
	clearTimeout ( common_continue_alertTimerId );
	alert("알수 없는 원인으로 서버와 데이터 전송을 할 수 없습니다.\n네트워크 환경을 확인하신 뒤\n잠시 후에 다시 시도하여 주시기 바랍니다.");	
	continueClose();
}


function showContent(duration){

	$('header').slideDown('slow', function() {});
	$('#cont').slideDown(duration, function() {
	// 브라우져 체크
	
	var cd = fc_querystring("cmd");
	if (cd!='queFaq') {
		browserCheck();
	}
	//로그인 정보 가져오기
	var today = new Date();
	var jqxhr = $.getJSON( '/rec/apply/ComResumeServlet?cmd=comGetInfo&callback=?', function(json) {
	//console.log( "jqxhr.success" );    
		   if(json!=null&&json[0]!=null&&json[0].login_email){ //로그인 된다면
				json  = json[0]
				$("#logout").hide();
				$("#logout").empty();
				$("#logout").append('<a href="javascript:comLogout();" class="bt_log"><img src="/images/tx_logout.gif" alt="로그아웃" /></a>');
				$("#logout").show('slow');
				startLogoutTime();	  
			}else{
				$("#logout").empty();
			}
	})
	.fail(function() {
	 //console.log( "jqxhr.fail" );    
	 });
	 	continueClose('L');  //로딩완료
	 	
		loadend=true;
		try
		{
			afterLoad();
			loadend=true;
		}
		catch(e)
		{
			loadend=true;
		}
	 	
	 	
	});
}

// InternetVersion
function getInternetVersion(ver) {
	var rv = -1; // Return value assumes failure.
	var ua = navigator.userAgent;
	var re = null;

	if(ver == "MSIE"){
		re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	}else{
		re = new RegExp(ver+"/([0-9]{1,}[\.0-9]{0,})");
	}
	if (re.exec(ua) != null){
  		rv = parseFloat(RegExp.$1);
 	}
 	return rv;
}

// Check the Browser Type and Version

function browserCheck(){
	var ver = 0; // Browser Version
	if(navigator.appName.charAt(0)  == "N"){
		if(navigator.userAgent.indexOf("Chrome") != -1){
			ver = getInternetVersion("Chrome");
			//alert("Chrome : "+ver);
		}else if(navigator.userAgent.indexOf("Firefox") != -1){
			ver = getInternetVersion("Firefox");
			//alert("Firefox : "+ver);
	
		}else if(navigator.userAgent.indexOf("Safari") != -1){
			ver = getInternetVersion("Safari");
			//alert("Safari : "+ver);
		}
	}else if(navigator.appName.charAt(0)  == "M"){
		ver = getInternetVersion("MSIE");
		//alert("MSIE : "+ver);
		if (ver < "8"){
			if(confirm("본 사이트는\n\nIE 8.0 이상, Chrome 24.0 이상, Firefox 3.6 이상, Opera 11 이상에\n최적화되어 있습니다.\n\n현재 브라우져 사용 버전으로는\n지원서 작성에 제한을 받을 수 있습니다.\n\n* 인식된 현재 사용 버전 : IE "+ver+'\n\n브라우져 관련안내 FAQ를 확인하시겠습니까?')){
				document.location.href='/rec/apply/ComResumeServlet?cmd=queFaq&keyword=Chrome';
			};
		}
	}
}