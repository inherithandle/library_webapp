/************************************************************************************************
 *
 * COMMON-UI-MANAGER
 *
 ************************************************************************************************/
var CommonUIManager=function(){
	this._header=null;
	this._header_mobile=null;
	this._footer=null;
	this._footer_mobile=null;
	this._location=null;
	this._location_mobile=null;
	this._sns=null;

	this._width=-1;
	this._height=-1;

	this.init.apply(this, arguments);
};


CommonUIManager.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this.init_body();
		//this.init_sns();
		this.init_clipboard();

		// admin 제외
		if(typeof(_infos_menu)!='undefined'){
			this.init_header();
			//this.init_header_mobile();
			this.init_footer();
			//this.init_footer_mobile();
			this.init_footer_links();
			this.init_location();
			//this.init_location_mobile();
		}

		this.reinit();
	},


	reinit:function(){
		this.init_alink();
		//this.init_table();
		//this.init_input();
		//this.init_select();
		//this.init_calendar();
		//this.init_tip();
		//this.init_slider();
		//this.init_video(); // -> common.js - onYouTubeIframeAPIReady()
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:BODY
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_body:function(){
		var type=ValidationUtil.get_browser_type();

		$('body').addClass(type); if(String(type).indexOf('msie')!=-1) $('body').addClass('msie');
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:A-LINK
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_alink:function(){
		if(AccessibilityUI!=null) AccessibilityUI.init_alink();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:TABLE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_table:function(){
		if(AccessibilityUI!=null) AccessibilityUI.init_table();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:INPUT
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_input:function(){
		// input-number
		$('input[data-role=common-input-number]').each(function(a){
			if(ValidationUtil.is_null($(this).data('manager'))){
				$(this).data('manager', new InputNumber($(this)));
			}
		});

		// input-pure-number
		$('input[data-role=common-input-pure-number]').each(function(a){
			if(ValidationUtil.is_null($(this).data('manager'))){
				$(this).data('manager', new InputPureNumber($(this)));
			}
		});

		// input-string-number
		$('input[data-role=common-input-string-number]').each(function(a){
			if(ValidationUtil.is_null($(this).data('manager'))){
				$(this).data('manager', new InputStringNumber($(this)));
			}
		});

		// input-eng
		$('input[data-role=common-input-eng]').each(function(a){
			if(ValidationUtil.is_null($(this).data('manager'))){
				$(this).data('manager', new InputENG($(this)));
			}
		});

		// input-date
		$('input[data-role=common-input-date]').each(function(a){
			if(ValidationUtil.is_null($(this).data('manager'))){
				$(this).data('manager', new InputDate($(this), '.'));
			}
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:SELECT
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_select:function(){
		$('*[data-role=common-mobile-select]').each(function(a){
			if(ValidationUtil.is_null($(this).data('manager'))){
				$(this).data('manager', new CommonMobileSelect($(this)));
			}
		});
	},


	reset_select:function(mode){
		$('*[data-role=common-mobile-select]').each(function(a){
			if(!ValidationUtil.is_null($(this).data('manager'))){
				$(this).data('manager').reset(mode);
			}
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:CALENDAR
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_calendar:function(){
		$('div[data-role=common-calendar]').each(function(a){
			if(ValidationUtil.is_null($(this).data('manager'))){
				$(this).data('manager', new CommonCalendar($(this), a));
			}
		});
	},


	resize_calendar:function(){
		$('div[data-role=common-calendar]').each(function(a){
			if(!ValidationUtil.is_null($(this).data('manager'))){
				$(this).data('manager').close();
			}
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:TIP
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_tip:function(){
		// 1. case-div
		$('div[data-role=common-tip]').each(function(a){
			if(ValidationUtil.is_null($(this).data('manager'))){
				$(this)
				.data('manager', true)
				.data('istoggle', false)
				.bind({
					'click':function(e){
						var bool=!$(this).data('istoggle'); $(this).data('istoggle', bool);

						if(bool){
							$(this).find('>span').show();
							$(this).find('>div').show();
						}else{
							$(this).find('>span').hide();
							$(this).find('>div').hide();
						}
					}
				});
			}
		});

		// 2 case-span
		$('span[data-role=common-tip]').each(function(b){
			if(ValidationUtil.is_null($(this).data('manager'))){
				$(this)
				.data('manager', true)
				.data('istoggle', false)
				.bind({
					'click':function(e){
						var bool=!$(this).data('istoggle'); $(this).data('istoggle', bool);

						if(bool){
							$(this).find('>span').css('display', 'block');
						}else{
							$(this).find('>span').css('display', 'none');
						}
					}
				});
			}
		});
	},


	resize_tip:function(){
		$('*[data-role=common-tip]').each(function(a){
			if(!ValidationUtil.is_null($(this).data('manager'))){
				$(this).data('istoggle', true).trigger('click');
			}
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:SLIDER
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_slider:function(){
		$('div[data-role=common-slider]').each(function(a){
			if(ValidationUtil.is_null($(this).data('manager'))){
				$(this).data('manager', new CommonSlider($(this), a));
			}
		});
	},

	reset_slider:function(mode){
		$('*[data-role=common-slider]').each(function(a){
			if(!ValidationUtil.is_null($(this).data('manager'))){
				$(this).data('manager').reset(mode);
			}
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:VIDEO
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_video:function(){
		$('div[data-role=common-video-player]').each(function(a){
			if(ValidationUtil.is_null($(this).data('manager'))){
				var aid=$(this).attr('id');
				var avid=$(this).attr('data-video-id');

				_common.build_video(aid, avid, '100%', '100%');
			}
		});
	},


	resize_video:function(){
		$('*[data-role=common-video-player]').each(function(a){
			if(!ValidationUtil.is_null($(this).data('manager'))){
				var cmode=_common.get_mode();
				var tmode=String($(this).attr('data-video-resize-mode')).toUpperCase() || '';

				if(tmode.indexOf(cmode)!=-1){
					var w=$(this).width();
					var h=(9/16)*w;
					$(this).attr('height', h+'px');
				}else{
					$(this).attr('height', '100%');
				}
			}
		});
	},


	reset_video:function(){
		this.resize_video();
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:CLIP-BOARD
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_clipboard:function(){
		try{
			$('*[data-role=common-clipboard]').each(function(a){
				// MSIE
				if(String(ValidationUtil.get_browser_type()).indexOf('msie')!=-1){
					$(this).bind('click', function(){
						var msg=$('#'+$(this).attr('data-clipboard-target')).val() || $('#'+$(this).attr('data-clipboard-target')).text();

						window.clipboardData.setData("Text", msg); alert(msg);
					});
				}else{
					var zcb=new ZeroClipboard($(this), {
						moviePath:'/swf/ZeroClipboard.swf'
					});

					zcb.on('load', function(client){
						//_common.trace('load-movie');
					});

					zcb.on('complete', function(client, args){
						alert(args.text);
					});
				}
			});
		}catch(e){
			console.log(e);
		}
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:HEADER
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_header:function(){
		var owner=this;
		var scope=$('header[data-role=common-header]');
		var header=new CommonHeader(scope); this._header=header;
		header._open_mobile=Delegate.create(owner, owner.open_header_mobile);
	},


	reset_header:function(mode){
		if(!ValidationUtil.is_null(this._header)) this._header.reset(mode);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:HEADER-MOBILE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_header_mobile:function(){
		var scope=$('div[data-role=common-mobile-header]');
		var header=new CommonMobileHeader(scope); this._header_mobile=header;
	},


	reset_header_mobile:function(mode){
		if(!ValidationUtil.is_null(this._header_mobile)) this._header_mobile.reset(mode);
	},


	open_header_mobile:function(){
		this._header_mobile.open();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:FOOTER
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_footer:function(){
		var owner=this;
		var scope=$('footer[data-role=common-footer]');
		var footer=new CommonFooter(scope); this._footer=footer;
		footer._open_mobile=Delegate.create(owner, owner.open_footer_mobile);
	},


	reset_footer:function(mode){
		if(!ValidationUtil.is_null(this._footer)) this._footer.reset(mode);
	},


	resize_footer:function(){
		if(!ValidationUtil.is_null(this._footer)) this._footer.resize();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:FOOTER-MOBILE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_footer_mobile:function(){
		var scope=$('div[data-role=common-mobile-footer]');
		var footer=new CommonMobileFooter(scope); this._footer_mobile=footer;
	},


	reset_footer_mobile:function(mode){
		if(!ValidationUtil.is_null(this._footer_mobile)) this._footer_mobile.reset(mode);
	},


	open_footer_mobile:function(){
		if(!ValidationUtil.is_null(this._footer_mobile)) this._footer_mobile.open();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:FOOTER-LINKS
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_footer_links:function(){
		new CommonFooterLinks($('ul[data-role=common-footer-links]'));
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:LOCATION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_location:function(){
		var scope=$('div[data-role=common-location]');
		var location=new CommonLocation(scope); this._location=location;
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:LOCATION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_location_mobile:function(){
		var scope=$('div[data-role=common-mobile-location]');
		var location=new CommonMobileLocation(scope); this._location_mobile=location;
	},


	reset_location_mobile:function(mode){
		if(!ValidationUtil.is_null(this._location_mobile)) this._location_mobile.reset(mode);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:SNS
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init_sns:function(){
		var scope=$('div[data-role=common-sns]');
		var sns=new CommonSNS(scope); this._sns=sns;
	},


	resize_sns:function(){
		if(this._sns!=null) this._sns.position();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	reset:function(mode){
		var owner=this;

		setTimeout(function(){
			// admin 제외
			if(typeof(_infos_menu)!='undefined'){
				owner.reset_header(mode);
				owner.reset_header_mobile(mode);
				owner.reset_footer(mode);
				owner.reset_footer_mobile(mode);
				owner.reset_location_mobile(mode);
			}
			owner.reset_select(mode);
			owner.reset_slider(mode);
			owner.reset_video();
		}, 0);
	},


	resize:function(){
		var owner=this;

		setTimeout(function(){
			// admin 제외
			if(typeof(_infos_menu)!='undefined'){
				owner.resize_footer();
			}
			owner.resize_sns();
			owner.resize_calendar();
			owner.resize_tip();
			owner.resize_video();
		}, 0);
	},


	scroll:function(){
		this.resize_sns();
	}
};










/************************************************************************************************
 *
 * COMMON-UI-MOBILE-SELECT
 *
 * @param {DOM} scope
 *
 ************************************************************************************************/
var CommonMobileSelect=function(scope){
	this._scope=scope;

	this._mode=null;

	this.init.apply(this, arguments);
};


CommonMobileSelect.prototype={
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		var owner=this;

		$(this._scope).find('li:eq(0)').bind('click', function(e){
			owner.toggle();
		});
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	reset:function(mode){
		if(mode=='MOBILE'){
			if(this._mode!=mode){
				this._mode=mode;
				this.show(false);
			}
		}else{
			this._mode=mode;
			this.show(true);
		}
	},


	toggle:function(){
		if(this._mode=='MOBILE'){
			this.show(($(this._scope).css('height')=='35px')?true:false);
		}
	},


	show:function(bool){
		if(bool) $(this._scope).css('height', 'auto'); else $(this._scope).css('height', '35px');
	}
};










/************************************************************************************************
 *
 * COMMON-UI-CALENDAR
 *
 * @param {DOM} target
 *
 ************************************************************************************************/
var CommonCalendar=function(target, index){
	this._core=null;
	this._target=target;
	this._scope=null;
	this._top=null;
	this._bottom=null;

	this._index=index; // accessibility-prefix-number
	this._isopen=false;

	this.init.apply(this, arguments);
};


CommonCalendar.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this.build();
		this.close();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:BULD
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		this.build_core();
		this.build_scope();
		this.build_top();
		this.build_bottom();
		this.build_event();
	},


	rebuild:function(y, m){
		this.rebuild_top(y, m);
		this.rebuild_bottom(y, m);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:CORE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_core:function(){
		this._core=new CalendarUI();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:SCOPE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_scope:function(){
		var scope=document.createElement('div'); this._scope=scope;

		var shtml='';
		shtml+='<div class="top" data-role="common-calendar-scope">\n';
		shtml+='	<div class="bottom">\n';
		shtml+='		<div class="inner">\n';
		shtml+='			<div class="header" data-role="common-calendar-top">\n';
		shtml+='			</div>\n';
		shtml+='			<table class="calendar">\n';
		shtml+='				<caption>-</caption>\n';
		shtml+='				<thead>\n';
		shtml+='					<tr>\n';
		shtml+='						<th class="holiday">일</th>\n';
		shtml+='						<th>월</th>\n';
		shtml+='						<th>화</th>\n';
		shtml+='						<th>수</th>\n';
		shtml+='						<th>목</th>\n';
		shtml+='						<th>금</th>\n';
		shtml+='						<th>토</th>\n';
		shtml+='					</tr>\n';
		shtml+='				</thead>\n';
		shtml+='				<tbody data-role="common-calendar-bottom">\n';
		shtml+='				</tbody>\n';
		shtml+='			</table>\n';
		shtml+='		</div>\n';
		shtml+='	</div>\n';
		shtml+='</div>\n';

		$(scope)
		.addClass('wrap_calendar')
		.html(shtml)
		.appendTo(this._target);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:TOP
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_top:function(){
		var owner=this;
		var top=$(this._scope).find('div[data-role=common-calendar-top]'); this._top=top;

		// 1. build-ui
		var shtml='';
		shtml+='<p data-role="common-calendar-current">-<span class="blind">년</span><em>-<span class="blind">월</span></em></p>\n';
		shtml+='<a href="javascript:_common.nothing();" class="prev" data-role="common-calendar-prev"><img src="/images/admin/bt_prev3.gif" alt="이전 월 보기"></a>\n';
		shtml+='<a href="javascript:_common.nothing();" class="next" data-role="common-calendar-next"><img src="/images/admin/bt_next3.gif" alt="다음 월 보기"></a>\n';
		$(top).html(shtml);

		// 2. build-event-navigator
		$(top).find('a[data-role=common-calendar-prev]').bind('click', function(e){owner.navigate(-1)});
		$(top).find('a[data-role=common-calendar-next]').bind('click', function(e){owner.navigate(1)});

		// 3. build-event-navigator-(shift+tab)
		$(top).find('a[data-role=common-calendar-prev]').bind('keydown', function(e){
			if(e.shiftKey &&e.keyCode==9){
				$(owner._target).find('a[data-role=common-calendar-btn]').focus();
				owner.close();
			}
		});
	},


	rebuild_top:function(y, m){
		// 1. change-title
		$(this._top).find('p[data-role=common-calendar-current]')
		.html(y+'<span class="blind">년</span><em>'+StringUtil.add_zero(Number(m)+1, 2)+'<span class="blind">월</span></em>');

		// 2. change-caption
		$(this._scope).find('caption')
		.html(y+'년 '+Number(Number(m)+1)+'월 달력');
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:BOTTOM
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_bottom:function(){
		var bottom=$(this._scope).find('tbody[data-role=common-calendar-bottom]'); this._bottom=bottom;
	},


	rebuild_bottom:function(y, m){
		$(this._bottom).empty();

		var owner=this;
		var infos=this._core.get_cells(y, m);
		var atotal=Math.ceil(infos.length/7);

		// 1. build-table
		for(var a=0; a<atotal; a++){
			var atr=document.createElement('tr');
			$(atr).appendTo(this._bottom);

			for(var b=a*7,  btotal=a*7+7; b<btotal; b++){
				var binfo=infos[b];
				var btd=document.createElement('td');
				var bhtml=(binfo.state==='none')?binfo.msg:'<a href="javascript:_common.nothing();">'+binfo.msg+'</a>';

				$(btd)
				.html(bhtml)
				.appendTo($(atr));

				$(btd).find('a')
				.data('n', binfo.msg)
				.bind('click', function(e){
					owner.select($(this).data('n'));
				});

				if(binfo.state==='sunday') $(btd).addClass('holiday');
				if(binfo.focusday) $(btd).find('a').addClass('on');
			}
		}

		// 2. build-event
		$(this._bottom).find('a:last').bind('keydown', function(e){
			if(e.keyCode===9) owner.close();
		});

		// 3. build-web-accessibility
		var table=$(this._scope).find('table');
		// delete-attribute-summary
		$(table).removeAttr('summary');
		// execute-create-summary
		AccessibilityTableUI.create_summary($(table), false);
		// execute-create-mapping
		AccessibilityTableUI.create_map($(table), 'calendar-tth-'+this._index);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:EVENT
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_event:function(){
		var owner=this;
		$(this._target).find('a[data-role=common-calendar-btn]').bind({
			'click keydown':function(e){
				switch(String(e.type).toLowerCase()){
					case 'keydown':
						if(e.keyCode===13) owner.open(false);
						break;

					case 'click':
						owner.open(true);
						break;
				}
			}
		});

		$(document).bind({
			'mousedown':function(e){
				if(owner._isopen){
					var pos={'left':e.pageX, 'top':e.pageY};
					if(!CommonUI.is_collision($(owner._scope), pos)){
						owner.close();
					}
				}
			}
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	navigate:function(dir){
		var y=this._core._year.current;
		var m=this._core._month.current;
		var dates=DateUtil.get_changed_month(y, m, dir);

		this._core._year.current=dates.year;
		this._core._month.current=dates.month;
		this.rebuild(dates.year, dates.month);
	},


	select:function(date){
		var info={'year':this._core._year.current, 'month':Number(this._core._month.current)+1, 'date':date};
		var tname=$(this._target).attr('data-target');
		$('input[data-name='+tname+']').val(StringUtil.to_date(info, '.'));

		$(this._target).find('a[data-role=common-calendar-btn]').focus();

		this.close();
	},


	open:function(ismouse){
		if(!this._isopen){
			this._isopen=true;

			var tname=$(this._target).attr('data-target');
			var tvalue=$('input[data-name='+tname+']').val();
			var tdate=DateUtil.get_date(tvalue);

			this._core.set_times('focus', tdate.getFullYear(), tdate.getMonth(), tdate.getDate());
			this._core.set_times('current', tdate.getFullYear(), tdate.getMonth(), tdate.getDate());

			this.rebuild(tdate.getFullYear(),  tdate.getMonth());
			this.show(true);

			if(!ismouse) $(this._top).find('a[data-role=common-calendar-prev]').focus();
		}
	},


	close:function(){
		this._isopen=false;

		this.show(false);
	},


	show:function(bool){
		if(bool) $(this._scope).show(); else $(this._scope).hide();
	}
};










/************************************************************************************************
 *
 *  COMMON-HEADER
 *
 * 	- GNB
 * 	- UTIL
 * 	- SEARCH
 *
 ************************************************************************************************/
var CommonHeader=function(scope){
	this._scope=scope;
	this._gnb=null;
	this._mobile_gnb=null;
	this._util=null;
	this._search=null;

	this._open_mobile;

	this.init.apply(this, arguments);
};


CommonHeader.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this.build();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		this.build_gnb();
		this.build_util();
		this.build_search();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:GNB
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_gnb:function(){
		var owner=this;
		var scope=$(this._scope).find('ul[data-role=common-header-gnb]');
		var gnb=new CommonGNB(scope); this._gnb=gnb;
		gnb._open_mobile=Delegate.create(owner, function(){owner._open_mobile();});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UTIL
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_util:function(){
		var owner=this;
		var scope=$(this._scope).find('ul[data-role=common-util]');
		var btn=$(this._scope).find('div[data-role=common-util-btn]');

		var util=new CommonUtil(scope, btn); this._util=util;
		util._toggle_search=Delegate.create(owner, owner.toggle_search);
	},


	reset_util:function(mode){
		this._util.reset(mode);
	},

	focus_util_open:function(){
		this._util.focus_open();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:SEARCH
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_search:function(){
		var owner=this;
		var scope=$(this._scope).find('div[data-role=common-search]');
		var search=new CommonSearch(scope); this._search=search;
		search._cb_focus_open=Delegate.create(owner, owner.focus_util_open)

		$(search).on({
			openarea: function(e) {
				$(owner._scope).find('a.global-search').addClass('on');
			},
			closearea: function(e) {
				$(owner._scope).find('a.global-search').removeClass('on');
			}
		})
	},


	toggle_search:function(){
		this._search.toggle();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	reset:function(mode){
		this.reset_util(mode);
	}
};









/************************************************************************************************
 *
 * COMMON-GNB
 *
 ************************************************************************************************/
var CommonGNB=function(scope){
	this._scope=scope;
	this._dummy=null;
	this._containers=new Array();

	this._focus={'current':-1, 'prev':-1, 'n':-1};
	this._isopen=false;

	this._open_mobile;

	this.init.apply(this, arguments);
};


CommonGNB.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this._focus.current=this.get_focus_current();

		this.build();
		this.focus(this._focus.current, false);

		$('div[data-role=dummy-header]').remove();
		$('header[data-role=common-header]').show();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:PARAM
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	get_focus_current:function(){
		var n=-1;

		if(String(_LOCATION_TYPE).toUpperCase()==='GNB'){
			if(!ValidationUtil.is_null(_LOCATION_CODE)){
				var codes=String(_LOCATION_CODE).split('_');

				for(var a=0, atotal=_infos_menu.GNB.length; a<atotal; a++){
					var ainfo=_infos_menu.GNB[a];

					if(String(ainfo.id)===String(codes[0])){
						n=a; break;
					}
				}
			}
		}
		return n;
	},

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		this.build_scope();
		this.build_category();
		this.build_menus();
		this.build_event();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:SCOPE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_scope:function(){
		this._containers=new Array();

		$(this._scope).empty();

		var owner=this;
		var infos=_infos_menu.GNB;
		//var bgs=['about', 'with', 'career'];

		for(var a=0, atotal=infos.length; a<atotal; a++){
			var ainfo=infos[a];

			var acategory=$(document.createElement('li'))
			.attr('data-role', 'category')
			.appendTo($(this._scope));

			var atitle=$(document.createElement('a'))
			.attr('href', 'javascript:_common.nothing();')
			.data('n', a)
			.data('link', ainfo.link)
			.bind({
				'click':function(e){
					// PC 버전에서만 페이지 이동
					if(!ValidationUtil.is_mobile()){
						window.location.href=$(this).data('link');
					}else{
						if(
							owner._isopen &&
							Number($(this).data('n'))==owner._focus.n
						){
							window.location.href=$(this).data('link');
						}
					}
				}
			})
			.html('<img src="'+ainfo.image+'" alt="'+ainfo.name+'" />')
			.appendTo($(acategory));

			var acontainer=$(document.createElement('div'))
			.attr('class', 'gnb_open')
			.css({'overflow':'hidden', 'background':'none', 'height':'0px'})
			.appendTo($(acategory));

			var abg=$(document.createElement('div'))
			//.css({'background-color':'#ff6600', 'height':'200px'})
			.attr('class', 'submenu_area')// bg_'+bgs[a])//+' blind')
			.attr('data-role', 'common-header-gnb-bg')
			.appendTo($(acontainer));

			this.build_child($(abg), ainfo, 1, a);

			var ament=$(document.createElement('div'))
			//.css({'background-color':'#ffff00'})
			.attr('class', 'menu_info')
			.attr('data-role', 'common-header-gnb-ment')
			.html('<p class="ment"><span class="tit">'+(ainfo.ment.title || '')+'</span><span class="sub">'+(ainfo.ment.des || '')+'</span></p>')
			.append((!ValidationUtil.is_null(ainfo.ment.link))?'<a href="'+ainfo.ment.link+'" class="gnb_detailview" style="float:left" target="_blank""><span>자세히 보기</span></a>':'')
			.appendTo($(abg));

			// save-container-information
			this._containers[a]={
				'scope':acontainer,
				'menus':$(acontainer).find('ul[data-depth=1]'),
				'ment':ament,
				'bg':abg
			}
		}

		this._dummy=$('header div[data-role=common-header-dummy]');
		$(this._dummy).find('div.gnb_contarea').height(0);
	},


	build_child:function(target, info, depth, arrange){
		if(!ValidationUtil.is_null(info.child) && info.child.length>0){
			var n=Math.ceil(info.child.length/4);
			var isdouble=(depth==2 && n>1)?true:false; //var isdouble=(depth==2 && n>1 && arrange!=0)?true:false; (?)
			var wrap;

			if(isdouble){
				$(target).addClass('w290');
				wrap=$(document.createElement('div')).attr('class', 'clear'); $(target).append($(wrap));
			}

			for(var d=0, dtotal=(isdouble)?n:1; d<dtotal; d++){
				var container=$(document.createElement('ul'))
				//.css({'border':'1px solid #ff0000'})
				.attr('data-depth', depth)
				.attr('class', 'sub_menu'+((depth==1)?'':depth)+''+((depth==3)?' blind':'')+''+((isdouble)?' fl':''))
				.appendTo((isdouble)?$(wrap):$(target));

				if(depth==3){
					var cs=22;
					var cn=Number(info.child.length);
					var ch=Number(cn*cs);
					var cy=Number(ch/2)*-1+cs+2;

					$(container)
					.css({
						'overflow':'hidden',
						'width':'200px',
						'top':cy+'px'
					});
				}

				for(var a=d*4, atotal=(isdouble)?d*4+4:info.child.length; a<atotal; a++){
					try{
						var ainfo=info.child[a];
						var ahaschild=(!ValidationUtil.is_null(ainfo.child) && ainfo.child.length>0)?true:false;
						var ali=$(document.createElement('li'))
						//.css({'border':'1px solid #ff6600'})
						.attr('data-depth', depth)
						.html('<a href="'+ainfo.link+'" '+((ahaschild)?'class="sub"':'')+((ainfo.isout)?'target="_blank"':'')+'>'+ainfo.name+((ainfo.isout)?'<img src="/images/bl_gnblink.gif" class="out_link" alt="사이트로 이동" />':'')+'</a>')
						.appendTo($(container));

						if(depth==2){//} && String(ValidationUtil.get_browser_type()).indexOf('msie')!=-1){
							$(ali)
							.bind({
								'mouseover':function(){
									$(this).css({'z-index':'1'});
								},

								'mouseleave':function(e){
									$(this).css({'z-index':'0'});
								}
							});
						}else if(depth==3){
							$(ali).css({'width':'200px'});
						}

						// marking-focus
						if(_LOCATION_TYPE=='GNB' && !ValidationUtil.is_null(_LOCATION_CODE)){
							if(String(_LOCATION_CODE).toUpperCase().indexOf(String(ainfo.id).toUpperCase())==0){
								$(ali).attr('data-focus', 'Y');
							}
						}

						this.build_child($(ali), ainfo, depth+1, arrange);
					}catch(e){}
				}
			}
		}
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:EVENT
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_event:function(){
		var owner=this;

		// 1. event-mouse-area
		$(this._scope).bind({
			'mouseleave':function(e){
				owner.focus(owner._focus.current, false);
			}
		});

		// 2. event-focus-out
		$(this._scope).find('a:first').bind({
			'keydown':function(e){
				if(e.shiftKey && e.keyCode===9){
					setTimeout(function(){
						owner.focus(owner._focus.current, false);
					}, 0);
				}
			}
		});

		$(this._scope).find('a:last').bind({
			'keydown':function(e){
				if(e.keyCode===9){
					setTimeout(function(){
						owner.focus(owner._focus.current, false);
					}, 0);
				}
			}
		});

		// 3. event-open-mobile
		$('a[data-role=common-mobile-header-btn]').bind({
			'click':function(){
				owner._open_mobile();
			}
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:CATEGORY
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_category:function(){
		var owner=this;

		$(this._scope).find('>li').each(function(a){
			$(this).find('>a:first')
			.data('n', a)
			.bind({
				'mouseover focusin':function(e){
					owner.focus($(this).data('n'), true);
				}
			});
		});
	},


	focus_category:function(n){
		$(this._scope).find('>li[data-role=category]').each(function(a){
			if(n===a){
				$(this).addClass('on');
				CommonUI.toggle_img_url($(this).find('img:first'), '_off.', '_on.');
			}else{
				$(this).removeClass('on');
				CommonUI.toggle_img_url($(this).find('img:first'), '_on.', '_off.');
			}
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:BG
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	transition:function(n){
		var owner=this;
		var bool=(n==-1)?false:true;

		if(this._isopen!=bool){
			this._isopen=bool;

			var rs=400/(220-8);
			var h=$(this._dummy).height();
			var th=(!bool)?0:(220-8);
			var time=Math.floor(Math.abs(h-th)*rs)+10;

			$(this._dummy).stop()
			.animate({
				'height':th+'px'
			},
			{
				'duration':time,
				'easing':'quadEaseOut',
				'step':function(){
					owner.render_bg($(this).height());
					owner.render_bg($(this).height());
				},
				'complete':function(){
					owner.render_bg($(this).height());
				}
			});
		}
	},

	render_bg:function(h){
		var th=h-10; th=(th<=0)?0:th;
		for(var a in this._containers){
			$(this._containers[a].scope).css({
				'height':th+'px'
			});
		}
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:MENU
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_menus:function(){
		var owner=this;

		$('div[data-role=common-header-gnb-bg]').each(function(a){
			var container=$(this).find('>ul');
			var depth=-1;

			owner.build_menus_list(null, container, depth);
		});
	},


	build_menus_list:function(parent, container, depth){
		var owner=this;
		var depth=depth+1;

		$(container).find('>li').each(function(a){
			// 1. event
			$(this)
			.data('depth', depth)
			.data('parent', (depth<=0)?null:parent)
			.bind({
				'mouseover focusin':function(e){
					$(this).addClass('on');

					if($(this).data('depth')==1 && $(this).find('>ul').length>0){
						owner.resize_menu($(this).data('parent'), 290+150);
						$(this).find('>ul').removeClass('blind');
					}
				},

				'mouseleave focusout':function(e){
					$(this).removeClass('on');

					if($(this).data('depth')==1 && $(this).find('>ul').length>0){
						owner.resize_menu($(this).data('parent'), 290);
						$(this).find('>ul').addClass('blind');
					}
				}
			});

			// 2. loop
			owner.build_menus_list((depth==0)?$(this):parent, $(this).find('>div>ul'), depth);
		});
	},


	resize_menu:function(scope, w){
		$(scope).stop().animate(
			{'width':w+'px'},
			{
				'duration':'slow',
				'step':function(){
					var r=($(this).width()-290)/150;
					var w=200*r+2;
					$(scope).find('.sub_menu3').css({
						'width':w+'px',
						'height':'auto'
					});
				},
				'complete':function(){

				}
			}
		);
	},

	/*
	focus_menus:function(){
		$(this._scope).find('li').each(function(a){
			var depth= $(this).attr('data-depth');

			if(!ValidationUtil.is_null($(this).attr('data-focus')) && $(this).attr('data-focus')=='Y'){
				$(this).addClass('on');//.trigger('mouseover');
			}
		});
	},*/

	focus_menu:function(n){
		var bgs=['about', 'with', 'career'];
		$(this._dummy).find('div.gnb_contarea').attr('class', 'gnb_contarea '+bgs[n]).css('height', n==-1?'0':'');

		for(var b=0, btotal=3; b<btotal; b++){
			var bool=(b==n)?true:false;
			$(this._containers[b].bg)
			.css({
				'z-index':(bool)?'10':'0',
				'display':(bool)?'block':'none'
			});

			$(this._containers[b].scope)
			.css({
				'display':(bool)?'block':'none'
			});
		}
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	focus:function(n, isevent){
		this.focus_category(n);
		this.focus_menu((isevent)?n:-1);
		this.transition((isevent)?n:-1); //this.focus_bg((isevent)?n:-1);
		this._focus.n=(isevent)?n:-1;
	}
};










/************************************************************************************************
 *
 * COMMON-UTIL
 *
 ************************************************************************************************/
var CommonUtil=function(scope, btn){
	this._scope=scope;
	this._btn=btn;

	this._ismode=null;
	this._isopen=null;

	this._toggle_util;
	this._toggle_search;

	this.init.apply(this, arguments);
};


CommonUtil.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this.build();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		this.build_scope();
		this.build_btn();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:SCOPE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_scope:function(){
		$(this._scope).find('a').each(function(a){
			var ainfo=_infos_menu.UTIL[a];
			$(this).attr('href', ainfo.link);
		})
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:BUTTON
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_btn:function(){
		var owner=this;

		$(this._btn).find('a').each(function(a){
			$(this)
			.data('type', (a===0)?'util':'search')
			.bind('click', function(e){
				owner.execute($(this).data('type'));
			});
		});
	},

	focus_open:function(){
		$(this._btn).find('a:eq(1)').focus();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	reset:function(mode){
		this._ismode=mode;

		switch(mode){
			case 'MOBILE':
				this._isopen=false;
				this.show(false);
				break;

			case 'TABLET':
				this._isopen=false;
				this.show(false);
				break;

			case 'PC':
				this._isopen=true;
				this.show(true);
				break;
		}
	},


	execute:function(type){
		switch(type){
			case 'util':
				this.toggle();
				break;

			case 'search':
				this._toggle_search();
				break;
		}
	},


	toggle:function(){
		if(this._ismode=='TABLET'){
			this._isopen=!this._isopen;
			this.show(this._isopen);
		}
	},


	show:function(bool){
		if(bool) $(this._scope).parent().removeClass('blind'); else $(this._scope).parent().addClass('blind');
	}
};









/************************************************************************************************
 *
 * COMMON-SEARCH
 *
 ************************************************************************************************/
var CommonSearch=function(scope){
	this._scope=scope;

	this._isopen=false;
	this._cb_focus_open;

	this.init.apply(this, arguments);
};


CommonSearch.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this.build();
		this.close(0);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		var owner=this;

		// 1. input
		$(this._scope).find('input[data-role=common-search-input]').bind({
			'focusin':function(e){
				$(this).addClass('nword');
			},

			'focusout':function(e){
				if(String($(this).val()).length<=0){
					$(this).removeClass('nword');
				}
			}
		});

		// 2. button-close
		$(this._scope).find('a[data-role=common-search-close]').bind({
			'click':function(e){
				owner.close('slow');
			},

			'keydown':function(e){
				if(e.keyCode==13){
					owner.close('slow');
					setTimeout(function(){
						owner._cb_focus_open();
					}, 0);
				}
			}
		});

		$(this._scope).removeClass('blind');
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:TRANSFORM
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	transition:function(isopen, time){
		$(this._scope).stop();

		var properties={
			'duration':time,
			'easing':'expoEaseOut'
		}

		if(isopen) $(this._scope).slideDown(properties); else $(this._scope).slideUp(properties);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	toggle:function(){
		if(!this._isopen) this.open(); else this.close();
	},


	open:function(){
		if(!this._isopen){
			this._isopen=true;

			this.transition(true, 'slow');
		}
		$(this).trigger('openarea');
	},


	close:function(time){
		this._isopen=false;

		this.transition(false, time);
		$(this).trigger('closearea');
	}
};










/************************************************************************************************
 *
 *  COMMON-MOBILE-HEADER
 *
 ************************************************************************************************/
var CommonMobileHeader=function(scope){
	this._scope=scope;
	this._gnb=null;
	this._util=null;

	this._isopen=false;

	this.init.apply(this, arguments);
};


CommonMobileHeader.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this.build();
		this.close();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		this.build_gnb();
		this.build_util();
		this.build_event();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:GNB
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_gnb:function(){
		var scope=$(this._scope).find('ul[data-role=common-mobile-header-gnb]');
		var gnb=new CommonMobileGNB(scope); this._gnb=gnb;
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UTIL
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_util:function(){
		var scope=$('div[data-role=common-mobile-header-util]');
		var util=new CommonMobileUtil(scope); this._util=util;
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:EVENT
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_event:function(){
		var owner=this;
		$(this._scope).find('a[data-role=common-mobile-header-close]')
		.bind('click', function(){
			owner.close();
		})
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:TRANSITION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	transition:function(isopen, time){
		var owner=this;

		if(!isopen) _common.showContent(true); else this.show(true);

		var tx=(isopen)?0:$(window).width();
		/*
		$(this._scope).stop().animate({'left':tx+'px'}, time, function(){
			if(isopen) _common.showContent(false); else owner.show(false);
		});*/

		var properties={
			'duration':time,
			'easing':'expoEaseOut',
			'complete':function(){
				if(isopen) _common.showContent(false); else owner.show(false);
			}
		};

		$(this._scope).stop().animate({'left':tx+'px'}, properties);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	reset:function(mode){
		if(mode!='MOBILE') this.close();
	},


	open:function(){
		if(!this._isopen){
			this._isopen=true; this.transition(true, 'slow');
		}
	},


	close:function(){
		if(this._isopen){
			this._isopen=false; this.transition(false, 'slow');
		}else{
			this.transition(false, 0);
		}
	},


	show:function(bool){
		if(bool) $(this._scope).show(); else $(this._scope).hide();
	}
};









/************************************************************************************************
 *
 * COMMON-MOBILE-GNB
 *
 ************************************************************************************************/
var CommonMobileGNB=function(scope){
	this._scope=scope;

	this.init.apply(this, arguments);
};


CommonMobileGNB.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		var n=this.get_focus_current(); n=(n==-1)?0:n;


		this.build();
		this.focus(n);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:PARAM
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	get_focus_current:function(){
		var n=-1;

		if(String(_LOCATION_TYPE).toUpperCase()==='GNB'){
			if(!ValidationUtil.is_null(_LOCATION_CODE)){
				var codes=String(_LOCATION_CODE).split('_');

				for(var a=0, atotal=_infos_menu.GNB.length; a<atotal; a++){
					var ainfo=_infos_menu.GNB[a];

					if(String(ainfo.id)===String(codes[0])){
						n=a; break;
					}
				}
			}
		}
		return n;
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		this.build_category();
		this.build_event();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:CATEGORY
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_category:function(){
		$(this._scope).empty();

		var owner=this;
		var infos=_infos_menu.GNB;

		for(var a=0, atotal=infos.length; a<atotal; a++){
			var ainfo=infos[a];
			var ali=$(document.createElement('li'))
			.data('link', ainfo.link)
			.html('<a href="javascript:_common.nothing();">'+ainfo.name+'</a>')
			.appendTo($(this._scope));

			this.build_menu($(ali), ainfo, 0);
		}
	},

	focus_category:function(n){
		$(this._scope).find('>li').each(function(a){
			if($(this).data('n')==n){
				$(this).addClass('on');
				$(this).find('>ul').removeClass('blind');
			}else{
				$(this).removeClass('on');
				$(this).find('>ul').addClass('blind');
			}
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:MENU
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_menu:function(container, infos, depth){
		if(!ValidationUtil.is_null(infos.child)){
			// 1. build-ul
			var css=['m_subgnb', 'm_subgnb2', 'sub_list'];
			var ul=$(document.createElement('ul'))
			.attr('class', css[depth])
			.appendTo($(container));

			if(depth>1){
				$(container).addClass('sub');
				//$(ul).addClass('blind');  (2013.08.25)
			}

			// 2. build-li
			for(var a=0, atotal=infos.child.length; a<atotal; a++){
				var ainfo=infos.child[a];
				var ali=$(document.createElement('li'))
				// .html('<a href="'+ainfo.link+'">'+ainfo.name+'</a>')//.html((depth==0)?ainfo.name:'<a href="'+ainfo.link+'">'+ainfo.name+'</a>') // 서브타이틀 링크 부여 (2013.08.28)
				.html('<a href="'+ainfo.link+'" '+((ainfo.isout)?'target="_blank"':'')+'>'+ainfo.name+((ainfo.isout)?'<img src="/images/bl_gnblink.gif" class="out_link" alt="사이트로 이동" />':'')+'</a>')
				.appendTo($(ul));

				// build-loop
				this.build_menu($(ali), ainfo, depth+1);
			}
		}
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:EVENT
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_event:function(){
		var owner=this;
		$(this._scope).find('>li').each(function(a){
			$(this)
			.data('n', a)
			.bind('click', function(e){
				if(!$(this).hasClass('on')){
					owner.focus($(this).data('n'));
				}else{
					window.location.href=$(this).data('link');
				}
			});
		});

		/* 토글 버튼이 되는 부모도 개별 링크를 가지고 있으므로. 열려진 상태로 표현 (2013.08.25)
		$(this._scope).find('.sub').bind('click', function(){
			var bool=!$(this).hasClass('on');

			if(bool){
				$(this).addClass('on');
				$(this).find('>ul').removeClass('blind');
			}else{
				$(this).removeClass('on');
				$(this).find('>ul').addClass('blind');
			}
		});*/
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	focus:function(n){
		this.focus_category(n);
	}
};










/************************************************************************************************
 *
 * COMMON-MOBILE-UTIL
 *
 ************************************************************************************************/
var CommonMobileUtil=function(scope){
	this._scope=scope;
	this.init.apply(this, arguments);
};


CommonMobileUtil.prototype={
	init:function(){
		this.build();
	},


	build:function(){
		var infos=_infos_menu.UTIL;

		$(this._scope).find('a').each(function(a){
			var ainfo=infos[a];

			$(this).attr('href', ainfo.link);
		});
	}
};










/************************************************************************************************
 *
 * COMMON-FOOTER
 *
 ************************************************************************************************/
var CommonFooter=function(scope){
	this._scope=scope;
	this._containers=null;
	this._title=null;
	this._slider=null;

	this._mode=null;
	this._ty=0;
	this._istransition=false;
	this._isopen=false;

	this._open_mobile;

	this.init.apply(this, arguments);
};


CommonFooter.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this.build();
		this.close();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		this.build_containers();
		this.build_scope_line(); this.build_event_line();
		this.build_scope_block(); this.build_event_block();

		this.build_slider();
		this.build_title(); this.focus_title();
		this.build_event();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:CONTAINER
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_containers:function(){
		var line=$(this._scope).find('div[data-role=common-footer-line]');
		var block=$(this._scope).find('div[data-role=common-footer-block]');

		this._containers=new Array(line, block);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:MENU-LINE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_scope_line:function(){
		var owner=this;
		var infos=_infos_menu.BRANCH;
		var links=[
			{'name':'home', 'title':'홈페이지', 'image':'/images/ic_home.png'},
			{'name':'twitter', 'title':'트위터', 'image':'/images/ic_tw.png'},
			{'name':'facebook', 'title':'페이스북', 'image':'/images/ic_face.png'},
			{'name':'blog', 'title':'블로그', 'image':'/images/ic_blog.png'}
		];

		var container=$(this._containers[0]).find('div[data-role=common-footer-line-slider]'); $(container).empty();

		var acontainer=$(document.createElement('ul'))
			.attr('class', 'family_site')
			// .attr('data-name', ainfo.name)
			.appendTo($(container));

		// 1. build-ui
		for(var a=0, atotal=infos.length; a<atotal; a++){
			var ainfo=infos[a];

			for(var b=0, btotal=ainfo.child.length; b<btotal; b++){
				var binfo=ainfo.child[b];
				var bli=$(document.createElement('li'))
				.css({'position':'relative'})
				.html('<div class="family_sitein"><a href="javascript:_common.nothing();" tabindex="-1">'+binfo.name+'</a><div class="sns_layer"></div></a></div>')
				.appendTo($(acontainer));

				for(var c=0, ctotal=4; c<ctotal; c++){
					var cinfo=links[c];

					if(!ValidationUtil.is_null(binfo.links[cinfo.name]) && binfo.links[cinfo.name]!='#'){
						var ca=$(document.createElement('a'))
						.attr('href', binfo.links[cinfo.name])
						.attr('target', '_blank')
						.html('<img src="'+cinfo.image+'" alt="'+binfo.name+' '+cinfo.title+' 새창" />')
						.appendTo($(bli).find('>div>div'));
					}
				}
			}
		}
	},


	build_event_line:function(){
		$(this._containers[0]).find('li').each(function(a){
			$(this).find('>div')
			.bind({
				'mouseover focusin':function(e){
					$(this).stop().animate({'top':'-25px'}, (e.type=='mouseover')?'fast':0);
				},

				'mouseleave focusout':function(e){
					$(this).stop().animate({'top':'0px'}, (e.type=='mouseleave')?'fast':0);
				}
			});
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:MENU-BLOCK
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_scope_block:function(){
		var infos=_infos_menu.BRANCH;
		var links=[
			{'name':'home', 'title':'홈페이지', 'image':'/images/ic_home.png'},
			{'name':'twitter', 'title':'트위터', 'image':'/images/ic_tw.png'},
			{'name':'facebook', 'title':'페이스북', 'image':'/images/ic_face.png'},
			{'name':'blog', 'title':'블로그', 'image':'/images/ic_blog.png'}
		];
		var csses=['', '', ' ico_footer3', '2'];

		// 1. container
		var container=$(this._containers[1]).find('div[data-role=common-footer-block-all]'); $(container).empty();

		// 2. menu
		for(var a=0, atotal=infos.length; a<atotal; a++){
			var ainfo=infos[a];

			// 2-1. menu-container
			var acontainer=$(document.createElement('div'))
			.attr('class', 'family_section'+csses[a])
			.appendTo($(container));

			// 2-2. menu-title
			var aspan=$(document.createElement('span'))
			.attr('class', 'tit_kind ico_footer'+((a==0)?'':Number(a+1)))
			.text(ainfo.name)
			.appendTo($(acontainer));

			/*
			// 2013.08.21 double-container
			// 2-3. menu-sub-container
			var adiv=$(document.createElement('div'))
			.attr('class', 'sitebox')
			.html('<div class="siteboxin"><ul class="family_allsite"></ul></div>')
			.appendTo($(acontainer));

			// 2-4. menu-list-sns
			for(var b=0, btotal=ainfo.child.length; b<btotal; b++){
				var binfo=ainfo.child[b];
				var bli=$(document.createElement('li'))
				.html('<a href="javascript:_common.nothing();" target="_blank" title="새창">'+binfo.name+'</a><div class="sns_layer"></div></a>')
				.appendTo($(adiv).find('>div>ul'));

				for(var c=0, ctotal=4; c<ctotal; c++){
					var cinfo=links[c];

					if(!ValidationUtil.is_null(binfo.links[cinfo.name])){
						var ca=$(document.createElement('a'))
						.attr('href', binfo.links[cinfo.name])
						//.attr('title', '새창')
						.html('<img src="'+cinfo.image+'" alt="'+binfo.name+' '+cinfo.title+' 새창" />')
						.appendTo($(bli).find('>div'));
					}
				}
			}*/

			// 2-3. menu-sub-container-div
			var adiv=$(document.createElement('div'))
			.attr('class', 'sitebox')
			.html('<div class="siteboxin"></div>')
			.appendTo($(acontainer));

			var dl=Math.ceil(ainfo.child.length/7);

			for(var d=0, dtotal=dl; d<dtotal; d++){
				// 2-4. menu-sub-container-ul
				var dcontainer=$(document.createElement('ul'))
				.attr('class', 'family_allsite'+((dl>1)?' fl':''))
				.appendTo($(adiv).find('>div'));

				// 2-5. menu-list-sns
				for(var b=d*7, btotal=d*7+7; b<btotal; b++){
					var binfo=ainfo.child[b];

					if(!ValidationUtil.is_null(binfo)){
						var bli=$(document.createElement('li'))
						.html('<a href="javascript:_common.nothing();" title="새창">'+binfo.name+'</a><div class="sns_layer"></div></a>')
						.appendTo($(dcontainer));

						for(var c=0, ctotal=4; c<ctotal; c++){
							var cinfo=links[c];

							if(!ValidationUtil.is_null(binfo.links[cinfo.name]) && binfo.links[cinfo.name]!='#'){
								var ca=$(document.createElement('a'))
								.attr('href', binfo.links[cinfo.name])
								.attr('target', '_blank')
								//.attr('title', '새창')
								.html('<img src="'+cinfo.image+'" alt="'+binfo.name+' '+cinfo.title+' 새창" />')
								.appendTo($(bli).find('>div'));
							}
						}
					}
				}
			}
		}
	},


	build_event_block:function(){
		$(this._containers[1]).find('li').each(function(a){
			$(this).bind({
				'mouseover focusin':function(e){
					$(this).stop().animate({'height':'41px'}, (e.type=='mouseover')?'fast':0);
				},

				'mouseleave focusout':function(e){
					$(this).stop().animate({'height':'13px'}, (e.type=='mouseleave')?'fast':0);
				}
			});
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:EVENT
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_event:function(){
		var owner=this;
		// 1. open
		$(this._scope).find('a[data-role=common-footer-open]').bind({
			'click':function(e){
				owner.open();
			},

			'keydown':function(e){
				if(e.keyCode==13){
					owner.open();
					//$(owner._containers[1]).find('a:eq(0)').focus();
					$(owner._containers[1]).focus();
				}
			}
		});

		// 2. close
		$(this._scope).find('a[data-role=common-footer-close]').bind({
			'click':function(e){
				owner.close();
			},

			'keydown':function(e){
				if(e.keyCode==13){
					owner.close();
					setTimeout(function(){
						$(owner._scope).find('a[data-role=common-footer-open]').focus();
					}, 0);
				}
			}
		});

		// 3. prev
		$(this._scope).find('a[data-role=common-footer-prev]').bind({
			'click':function(e){
				owner.transition_slider(-1);
			}
		});

		// 4. next
		$(this._scope).find('a[data-role=common-footer-next]').bind({
			'click':function(e){
				owner.transition_slider(1);
			}
		});

		// 5. open-mobile
		$(this._scope).find('a[data-role=common-mobile-footer-open]').bind({
			'click':function(e){
				owner._open_mobile();
			}
		});

		// 6. scroll
		$(this._slider).bind({
			'scroll':function(e){
				owner.focus_title();
			},

			'mousewheel':function(e){
				return false;
			}
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:TITLE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_title:function(){
		// var title=$(this._containers[0]).find('span[data-role=common-footer-title]'); this._title=title;
	},


	focus_title:function(){
		var owner=this;

		$(this._slider).find('>ul').each(function(a){
			var ay=$(this).position().top;
			var ah=$(this).height();

			if((ay>=-ah && ay<=0)){
				$(owner._title).text($(this).attr('data-name')+'계열');
			}
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:SLIDER
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_slider:function(){
		var slider=$(this._scope).find('div[data-role=common-footer-line-slider]'); this._slider=slider;
	},


	transition_slider:function(dir){
		if(!this._istransition){
			this._istransition=true;

			var owner=this;
			var ty=$(this._slider).scrollTop()+dir*30;

			$(this._slider).stop().animate({'scrollTop':ty}, 'fast', function(){
				owner._istransition=false; //owner.focus_title();
			});
		}
	},


	resize_slider:function(){
		var tw=$(this._containers[0]).find('div[data-role=common-footer-line-container]').width();
		if (tw == null || typeof(tw) == 'undefined') return;
		var mw=(100+20)+(75+10+15)+(70+10);
		var dw=tw-mw+45; //console.log(tw+' / '+dw);

		dw = $(this._scope).find('a[data-role=common-footer-prev]').offset().left - $(this._scope).find('div[data-role=common-footer-line-slider]').offset().left;

		$(this._slider).css({'width':dw+'px'});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	resize:function(){
		this.resize_slider();
	},


	reset:function(mode){
		this._mode=mode;
	},


	open:function(){
		this.toggle(true); _common.moveBottom();
	},


	close:function(){
		this.toggle(false);
	},


	toggle:function(isopen){
		if(isopen){
			// $(this._containers[0]).hide();
			$(this._containers[0]).css({'position': 'absolute', 'z-index': '-1'});
			$(this._containers[0]).find('>div.footer_close>div.site_sel').hide();
			$(this._containers[0]).find('>div.footer_close>div.family_sitearea').hide();
			$(this._containers[1]).show();
		}else{
			// $(this._containers[1]).show();
			$(this._containers[0]).css({'position': '', 'z-index': ''});
			$(this._containers[0]).find('>div.footer_close>div.site_sel').show();
			$(this._containers[0]).find('>div.footer_close>div.family_sitearea').show();
			$(this._containers[1]).hide();
		}
	}
};










/************************************************************************************************
 *
 * COMMON-MOBILE-FOOTER
 *
 ************************************************************************************************/
var CommonMobileFooter=function(scope){
	this._scope=scope;

	this._isopen=false;

	this.init.apply(this, arguments);
};


CommonMobileFooter.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this.build();
		this.close();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		this.build_scope();
		this.build_menu();
		this.build_event();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:SCOPE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_scope:function(){
	},


	resize_scope:function(){
		$(this._scope).css({'height':'auto'});

		var h0=$(window).height();
		var h1=$(this._scope)[0].clientHeight;

		if(h0>h1) $(this._scope).css({'height':'100%'});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:MENU
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_menu:function(){
		var infos=_infos_menu.BRANCH;
		var links=[
			{'name':'home', 'title':'홈페이지', 'image':'/images/ic_home.png'},
			{'name':'twitter', 'title':'트위터', 'image':'/images/ic_tw.png'},
			{'name':'facebook', 'title':'페이스북', 'image':'/images/ic_face.png'},
			{'name':'blog', 'title':'블로그', 'image':'/images/ic_blog.png'}
		];

		// 1. container
		var container=$(this._scope).find('>ul'); $(container).empty();

		// 2. menu
		for(var a=0, atotal=infos.length; a<atotal; a++){
			var ainfo=infos[a];

			// 2-1. title-menu
			var ali=$(document.createElement('li'))
			.attr('class', 'on')
			.data('istoggle', true)
			.html('<a href="javascript:_common.nothing();" data-role="common-mobile-footer-toggle"><span class="kind'+((a==0)?'':Number(a+1))+'">'+ainfo.name+'</span></a>')
			.appendTo($(container));

			// 2-2. container-menu
			var acontainer=$(document.createElement('div'))
			.attr('class', 'm_flist_area')
			.appendTo($(ali));

			var aul=$(document.createElement('ul'))
			.appendTo($(acontainer));

			// 2-3. button-sns
			for(var b=0, btotal=ainfo.child.length; b<btotal; b++){
				var binfo=ainfo.child[b];
				var bli=$(document.createElement('li'))
				.html('<a href="javascript:_common.nothing();">'+binfo.name+'</a><span class="ico"></span>')
				.appendTo($(aul));

				for(var c=0, ctotal=4; c<ctotal; c++){
					var cinfo=links[c];

					if(!ValidationUtil.is_null(binfo.links[cinfo.name]) && binfo.links[cinfo.name]!='#'){
						var ca=$(document.createElement('a'))
						.attr('href', binfo.links[cinfo.name])
						.attr('target', '_blank')
						.attr('title', '새창')
						.html('<img src="'+cinfo.image+'" alt="'+binfo.name+' '+cinfo.title+'" />')
						.appendTo($(bli).find('span'));
					}
				}
			}
		}
	},


	toggle_menu:function(n){
		var container=$(this._scope).find('>ul>li:eq('+n+')');
		var istoggle=!$(container).data('istoggle'); $(container).data('istoggle', istoggle);

		if(istoggle){
			$(container)	.attr('class', 'on');
			$(container).find('>div').show();
		}else{
			$(container)	.removeAttr('class');
			$(container).find('>div').hide();
		}

		this.resize_scope();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:EVENT
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_event:function(){
		var owner=this;

		// 1. toggle
		$(this._scope).find('a[data-role=common-mobile-footer-toggle]').each(function(a){
			$(this)
			.data('n', a)
			.bind({
				'click':function(e){
					owner.toggle_menu($(this).data('n'));
				}
			});
		});

		// 2. close
		$(this._scope).find('a[data-role=common-mobile-footer-close]')
		.bind('click', function(){
			owner.close();
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:TRANSITION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	transition:function(isopen, time){
		var owner=this;

		if(!isopen){
			_common.showContent(true);
		}else{
			_common.moveTop(); this.show(true);
		}

		var tx=(isopen)?0:$(window).width();
		/*
		$(this._scope).stop().animate({'left':tx+'px'}, time, function(){
			if(isopen) _common.showContent(false); else owner.show(false);
		});*/

		var properties={
			'duration':time,
			'easing':'expoEaseOut',
			'complete':function(){
				if(isopen) _common.showContent(false); else owner.show(false);
			}
		};

		$(this._scope).stop().animate({'left':tx+'px'}, properties);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	reset:function(mode){
		if(mode!='MOBILE') this.close();
	},


	open:function(){
		if(!this._isopen){
			this._isopen=true; this.transition(true, 'slow');  this.resize_scope();
		}
	},


	close:function(){
		if(this._isopen){
			this._isopen=false; this.transition(false, 'slow');
		}else{
			this.transition(false, 0);
		}
	},


	show:function(bool){
		if(bool) $(this._scope).show(); else $(this._scope).hide();
	}
};









/************************************************************************************************
 *
 * COMMON-FOOTER-LINKS
 *
 ************************************************************************************************/
var CommonFooterLinks=function(scope){
	this._scope=scope; this.init.apply(this, arguments);
};


CommonFooterLinks.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this.build();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		$(this._scope).empty();

		var infos=_infos_menu.FOOTER;

		for(var a=0, atotal=infos.length; a<atotal; a++){
			var ainfo=infos[a];
			var isjs=(String(ainfo.link).indexOf('javascript:')!=-1)?true:false;

			$(document.createElement('li'))
			.append('<a href="'+ainfo.link+'"'+((isjs)?'title="새창"':'')+'>'+ainfo.name+'</a>')
			.appendTo($(this._scope));
		}
	}
};











if(typeof(_LOCATION_TYPE)=='undefined' || typeof(_LOCATION_CODE)=='undefined'){
	var _LOCATION_TYPE='';
	var _LOCATION_CODE='';
}

/************************************************************************************************
 *
 * COMMON-LOCATION
 *
 * @param {DOM} scope
 *
 ************************************************************************************************/
var CommonLocation=function(scope){
	this._scope=scope;
	this.init.apply(this, arguments);
};


CommonLocation.prototype={
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		if(!ValidationUtil.is_null(_LOCATION_TYPE) && !ValidationUtil.is_null(_LOCATION_CODE)){
			this.build();
		}
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		var arr=_LOCATION_CODE.split('_');
		var container=$(this._scope).find('p');

		$(container)
		.empty()

		if((_LOCATION_TYPE==='GNB' && arr.length>1) || _LOCATION_TYPE==='UTIL' || _LOCATION_TYPE==='FOOTER' ||_LOCATION_TYPE==='RSS'){ // 메인에서 PC, TABLET 버전 로케이션 삭제
			$(container)
			.append('<span class="blind">현재위치는</span>')
			.append('<span class="home"><a href="/">HOME</a></span>');

			for(var a=0, atotal=arr.length; a<atotal; a++){
				var ainfo=_common.get_info(_infos_menu[_LOCATION_TYPE], 'id', arr.slice(0, a+1).join('_'));

				$(container)
				.append(' > ')
				.append((a!=atotal-1)?'<span><a href="'+ainfo.link+'">'+ainfo.name+'</a></span>':'<span><strong>'+ainfo.name+'</strong></span>');
			}

			$(container).append('<span class="blind">입니다.</span>');
		}
	}
};










/************************************************************************************************
 *
 * COMMON-MOBILE-LOCATION
 *
 * @param {DOM} scope
 *
 ************************************************************************************************/
var CommonMobileLocation=function(scope){
	this._scope=scope;

	this._isopen=false;

	this.init.apply(this, arguments);
};


CommonMobileLocation.prototype={
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		if(!ValidationUtil.is_null(_LOCATION_TYPE) && !ValidationUtil.is_null(_LOCATION_CODE)){
			this.build();
			this.close();
		}
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		this.build_scope();
		this.build_event();
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:SCOPE
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_scope:function(){
		var container=$(this._scope).find('ul');

		// 1. title
		var acodes=_LOCATION_CODE.split('_');
		var aparent=_common.get_info(_infos_menu[_LOCATION_TYPE], 'id', acodes.slice(0, acodes.length-1).join('_')); //_common.trace('parent : ', aparent);
		var ainfo=_common.get_info(_infos_menu[_LOCATION_TYPE], 'id', _LOCATION_CODE);

		$(container).empty()
		.append(
			'<li class="tit">'+
			'<a href="'+((!ValidationUtil.is_null(aparent))?aparent.link:'/')+'" class="back" style="display:none;"><img src="/images/bu_back_m.png" alt="이전" /></a>'+
			'<a href="javascript:_common.nothing();">'+ainfo.name+'</a></li>'
		);

		// 2. list
		var bcodes=_LOCATION_CODE.split('_'); bcodes=bcodes.slice(0, bcodes.length-1);
		var binfo=(bcodes.length==0)?_infos_menu[_LOCATION_TYPE]:_common.get_info(_infos_menu[_LOCATION_TYPE], 'id', bcodes.join('_')).child;

		for(var c=0, ctotal=binfo.length; c<ctotal; c++){
			var cinfo=binfo[c];

			$(container)	.append('<li><a href="'+cinfo.link+'">'+cinfo.name+'</a></li>');
		}
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:EVENT
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_event:function(){
		var owner=this;

		$(this._scope).find('ul>li:first>a:eq(1)').bind({
			'click':function(e){
				owner.toggle();
			}
		});
	},


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:OPERATION
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	reset:function(mode){
		if(mode!='MOBILE') this.close();
	},


	toggle:function(){
		if(this._isopen) this.close(); else this.open();
	},


	open:function(){
		this._isopen=true;

		$(this._scope).find('li').each(function(a){
			if(a===0) $(this).addClass('on'); else $(this).show();
		});
	},


	close:function(){
		this._isopen=false;

		$(this._scope).find('li').each(function(a){
			if(a===0) $(this).removeClass('on'); else $(this).hide();
		});
	}
};










/************************************************************************************************
 *
 * COMMON-SLIDER
 *
 ************************************************************************************************/
var CommonSlider=function(scope, index){
	this._scope=scope;
	this._container=null;
	this._slider=null;
	this._target=$('*[data-role='+$(this._scope).attr('data-target')+']') || null;
	this._player=null;

	this._mode=null;
	this._index=index;
	this._counts={'min':3, 'max':5};

	this._step=0;
	this._count=0;
	this._total=0;
	this._focus=-1;

	this.init.apply(this, arguments);
};


CommonSlider.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this.build();
		this.focus(0);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:PARAMS
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	get_count:function(){
		return this._counts[(this._mode==="MOBILE")?'min':'max'];
	},


	get_minx:function(){
		var d=this._total-this.get_count(); d=(d<=0)?0:d;
		var tx=this._step*d*-1;
		return tx;
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		this.build_container();
		this.build_slider();
		this.build_menu();
		this.build_navigator();
		this.build_event();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:CONTAINER
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_container:function(){
		var container=$(this._scope).find('div[data-role=common-slider-container]'); this._container=container;
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:SLIDER
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_slider:function(){
		this.rebuild_slider();
	},


	rebuild_slider:function(){
		var slider=$(this._container).find('>ul'); this._slider=slider;
		var step=CommonUI.get_total_width($(slider).find('li:eq(0)')); this._step=step;
		var total=$(slider).find('li').length; this._total=total;
		var tw=total*step;

		$(slider).css({
			'float':'left',
			'position':'relative',
			'width':tw+'px',
			'overflow':'hidden'
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:MENU
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_menu:function(){
		var owner=this;

		$(this._slider).find('>li>a').each(function(a){
			$(this)
			.data('n', a)
			.bind({
				'click focusin':function(e){
					owner.focus($(this).data('n'), e);
				}
			});
		});
	},


	focus_menu:function(n){
		$(this._slider).find('>li').each(function(a){
			if(n===a) $(this).addClass('on'); else $(this).removeClass('on');
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:TARGET
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_target:function(n){
		var scope=$(this._slider).find('li:eq('+n+')').find('img');
		var videoid=$(scope).attr('data-video-id') || '';

		$(this._target).empty();

		if(!ValidationUtil.is_null(videoid)){
			_common.stop_video();

			var idname='common-slice-player';

			$(this._target).append('<div id="'+idname+'" width="100%" height="100%"></div>');

			_common.build_video(idname, videoid, '100%', '100%');
		}else{
			$(document.createElement('img'))
			.attr('src', $(scope).attr('src'))
			.attr('alt', $(scope).attr('alt').replace('썸네일', ''))
			.appendTo($(this._target));
		}
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:NAVIGATOR
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_navigator:function(){
		var owner=this;

		$(this._scope).find('a[data-role=common-slider-prev]').bind({
			'click':function(e){
				owner.navigate(-1);
			}
		});

		$(this._scope).find('a[data-role=common-slider-next]').bind({
			'click':function(e){
				owner.navigate(1);
			}
		});
	},


	reset_navigation:function(){
		var c=this.get_count();
		$(this._scope).find('a[data-role=common-slider-prev]').text('이전 '+c+'개 이미지 보기');
		$(this._scope).find('a[data-role=common-slider-next]').text('다음 '+c+'개 이미지 보기');
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:EVENT
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build_event:function(){
		var owner=this;
		$(this._scope).touchSwipe(function(direction){
			owner.swipe((String(direction).toUpperCase()=='LEFT')?1:-1);
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:TRANSITION
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	slide:function(n, time){
		this._count=n;

		var minx=this.get_minx();
		var tx=n*this._step*this.get_count()*-1; tx=(tx<=minx)?minx:tx;

		$(this._slider).stop().animate({'left':tx+'px'}, time);
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:BULD
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	swipe:function(dir){
		this.navigate(dir);
	},


	navigate:function(dir){
		var t=Math.ceil(this._total/this.get_count());
		var c=this._count; c+=dir;

		if(c>t-1){
			alert('마지막 입니다.');
		}else if(c<0){
			alert('처음 입니다.');
		}else{
			this.slide(c, 'slow');
		}
	},


	focus:function(n, e){
		if(this._focus!=n){
			this._focus=n;

			this.focus_menu(n);
			this.build_target(n);
		}

		var c=Math.ceil((n+1)/this.get_count())-1;
		var time=(!ValidationUtil.is_null(e) && e.type=='click')?'slow':0;
		this.slide(c, time);
	},


	reset:function(mode){
		this._mode=mode;

		this.rebuild_slider();
		this.reset_navigation();
		this.focus(this._focus);
	}
};










/************************************************************************************************
 *
 *  COMMON-SNS
 *
 ************************************************************************************************/
var CommonSNS=function(scope){
	this._scope=scope;

	this.init.apply(this, arguments);
};


CommonSNS.prototype={
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// INITIALIZE
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	init:function(){
		this.build();
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:UI
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build:function(){
		// 1. event-mouse, focus
		/*
		$(this._scope).bind({
			'mouseover focusin':function(e){
				$(this).find('>span').removeClass('blind');
			},

			'mouseleave focusout':function(e){
				$(this).find('>span').addClass('blind');
			}
		});*/

		// 2. twitter
		//$(this._scope).find('>span>a:eq(0)').bind('click', function(e){
		$(this._scope).find('>a:eq(0)').bind('click', function(e){
			SNSUtil.registry('twitter', window.location.href, '삼성그룹', '삼성그룹');
		});

		// 3. facebook
		//$(this._scope).find('>span>a:eq(1)').bind('click', function(e){
		$(this._scope).find('>a:eq(1)').bind('click', function(e){
			SNSUtil.registry('facebook', window.location.href, '삼성그룹', '삼성그룹');
		});
	},


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// METHOD:TRANSFORM
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	position:function(){
		if(_common.get_mode()=='PC'){
			try{
				var s=$(document).scrollTop();
				var y=$(this._scope).offset().top;
				var h=$(this._scope).parent().height()-68*2;
				var p=(s>(y-40))?s-(y-40):0; p=(p>=h)?h:p;

				$(this._scope).css({'padding-top':p+'px'});
			}catch(e){}
		}
	}
};









