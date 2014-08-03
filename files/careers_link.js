function function_link(e){

	var url="";
	homeurl="http://careers.samsung.co.kr";
	if (window.location.href.indexOf("https://") > -1)
	{
		url="http://www.samsungcareers.com";
	}
	try
	{
		continueOpen('R');
	}
	catch(d)
	{
	}	
	if (e=="home"){
		top.location.href = homeurl+"/main.do";					// Home
	} else if(e=="careers") {
		location.href = homeurl+"/careers/main.do";						//인재와 채용
	} else if(e=="psthome") {
		location.href = url+"/rec/apply/ComResumeServlet?cmd=pstMain";	//채용공고
	} else if(e=="pstFre") {
		location.href = url+"/rec/apply/ComResumeServlet?cmd=pstMain&gbncd=A";		//3급신입채용공고
	} else if(e=="pstCar") {
		location.href = url+"/rec/apply/ComResumeServlet?cmd=pstMain&gbncd=B";		//경력채용공고
	} else if(e=="pstHsg") {
		location.href = url+"/rec/apply/ComResumeServlet?cmd=pstMain&gbncd=H";		//고졸공채공고
	} else if(e=="pstInt") {
		location.href = url+"/rec/apply/ComResumeServlet?cmd=pstMain&gbncd=I";		//인턴선발공고
	} else if(e=="pstFor") {
		location.href = url+"/rec/apply/ComResumeServlet?cmd=pstMain&gbncd=C";		//4급신입채용공고
	} else if(e=="applyhome") {
		location.href = url+"/rec/apply/ComResumeServlet";	// 채용지원
	} else if(e=="login") {
		location.href = url+"/rec/apply/ComResumeServlet";	// 로그인
	} else if(e=="frehome") {
		location.href = url+"/rec/apply/FreResumeServlet";	// 3급신입채용
	} else if(e=="forhome") {
		location.href = url+"/rec/apply/ComResumeServlet?cmd=forMain";	// 4급신입채용
	} else if(e=="carhome") {
		location.href = url+"/rec/apply/CarResumeServlet";	// 경력채용
	} else if(e=="hsghome") {
		location.href = url+"/rec/apply/HsgResumeServlet";	// 고졸공채
	} else if(e=="inthome") {
		location.href = url+"/rec/apply/IntResumeServlet";	// 인턴선발
	} else if(e=="prtcube") {
		location.href = url+"/rec/apply/PrtResumeServlet?cmd=pstCube";	// 시간선택제
	} else if(e=="prthome") {
		location.href = url+"/rec/apply/PrtResumeServlet";	// 시간선택제
	} else if(e=="prthis") {
		location.href = url+"/rec/apply/PrtResumeServlet";	// 시간선택제
	}else if(e=="FAQ"){
		location.href = url+"/rec/apply/ComResumeServlet?cmd=queFaq";	// FAQ
	}else if(e=="Q&A"){
		location.href = url+"/rec/apply/ComResumeServlet?cmd=queListMain";	// QnA 목록
	}else if(e=="Q&A_new"){
		location.href = url+"/rec/apply/ComResumeServlet?cmd=queMain";		// QnA 질문하기
	}else if(e=="my_info"){
		location.href = url+"/rec/apply/ComResumeServlet?cmd=comLoginInfoMain"; // 회원정보
	}else if(e=="withdrawal"){
		location.href = url+"/rec/apply/ComResumeServlet?cmd=comWithdrawalMain"; // 회원탈퇴
	}else if(e=="monition"){
		location.href = url+"/rec/apply/ComResumeServlet?cmd=comTerms";
	} else {
		alert("Link is not available.");
		try {		
			continueClose();
		} catch(d) {
		}	
	}
}


$(function()
{

	var Home_link="<a href=javascript:function_link('home')>HOME</a></span> &gt; <span><a href=javascript:function_link('careers')>인재와 채용</a>";
	var Dep1_info="";
	var Dep2_info="";
	var Dep3_info="";
	var Dep1_info_link="";
	var Dep2_info_link="";
	var Dep3_info_link="";
	
	var All_load_linkinfor='Title Loading...';
	var title="삼성그룹 홈페이지";
	var imgtitle="";
	

	//console.log("Dep1="+Dep1+"Dep2="+Dep2+"Dep3="+Dep3);

	if(Dep1=="2"){
		Dep1_info="채용공고";
		Dep1_info_link="<a href=javascript:function_link('psthome')>"+Dep1_info+"</a>";

		if(Dep2=="0"){
			
			if(Dep3=="0"){
				title = Dep1_info + " | " + title;
				All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span><strong>"+ Dep1_info +"</strong></span>";
				imgtitle = Dep1_info;
			} else {
				if (Dep3=="1"){
					Dep3_info="3급신입채용";
				} else if (Dep3=="2"){
					Dep3_info="경력채용";
				} else if (Dep3=="3"){
					Dep3_info="고졸공채";
				} else if (Dep3=="4"){
					Dep3_info="인턴선발";
				} else if (Dep3=="c"){
					Dep3_info="4급신입채용";
				} else if (Dep3=="5"){
					Dep3_info="시간선택제";
					Dep1=3;
					Dep2=20;
				}
				title = Dep3_info + " | " + title;
				Dep3_info_link="<a href=javascript:function_link('psthome')>"+Dep3_info+"</a>";
				All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span>"+ Dep1_info_link  +"</span> &gt <span><strong>"+ Dep3_info +"</strong></span>";
			}
		} 
	} 
	
	else if(Dep1=="3"){
		Dep1_info="채용지원";
		Dep1_info_link="<a href=javascript:function_link('applyhome')>"+Dep1_info+"</a>";

		if(Dep2=="0"){
			
			title = Dep1_info + " | " + title;
			All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span><strong>"+ Dep1_info +"</strong></span>";
			imgtitle = Dep1_info;
			
		} else if (Dep2=="1") {

			Dep2_info="3급신입채용";
			Dep2_info_link="<a href=javascript:function_link('frehome')>"+Dep2_info+"</a>";
			imgtitle = Dep2_info;
			
			if(Dep3=="0"){
				title = Dep2_info + " | " + title;
				All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span>"+ Dep1_info_link  +"</span> &gt <span><strong>"+ Dep2_info +"</strong></span>";
			} else {
				if (Dep3=="1"){
					Dep3_info="새로운지원서작성";
				} else if (Dep3=="2"){
					Dep3_info="지원공고변경";					
				} else if (Dep3=="01"){
					Dep3_info="기본";
				} else if (Dep3=="02"){
					Dep3_info="학력";
				} else if (Dep3=="03"){
					Dep3_info="성적";
				} else if (Dep3=="04"){
					Dep3_info="경력";
				} else if (Dep3=="05"){
					Dep3_info="자격";
				} else if (Dep3=="06"){
					Dep3_info="Essay";
				} else if (Dep3=="07"){
					Dep3_info="제출";
				} else if (Dep3=="10"){
					Dep3_info="결과안내";
				}
				title = Dep3_info + " | " + title;
				Dep3_info_link="<a href=javascript:function_link('carhome')>"+Dep3_info+"</a>";
				All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span>"+ Dep1_info_link  +"</span> &gt <span>"+ Dep2_info_link +"</span> &gt <span><strong>"+ Dep3_info +"</strong></span>";
			}
		} else if (Dep2=="c") {

			Dep2_info="4급신입채용";
			Dep2_info_link="<a href=javascript:function_link('forhome')>"+Dep2_info+"</a>";
			imgtitle = Dep2_info;
			
			if(Dep3=="0"){
				title = Dep2_info + " | " + title;
				All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span>"+ Dep1_info_link  +"</span> &gt <span><strong>"+ Dep2_info +"</strong></span>";
			} else {
				if (Dep3=="1"){
					Dep3_info="새로운지원서작성";
				} else if (Dep3=="2"){
					Dep3_info="지원공고변경";					
				} else if (Dep3=="01"){
					Dep3_info="기본";
				} else if (Dep3=="02"){
					Dep3_info="학력";
				} else if (Dep3=="03"){
					Dep3_info="성적";
				} else if (Dep3=="04"){
					Dep3_info="경력";
				} else if (Dep3=="05"){
					Dep3_info="자격";
				} else if (Dep3=="06"){
					Dep3_info="Essay";
				} else if (Dep3=="07"){
					Dep3_info="제출";
				} else if (Dep3=="10"){
					Dep3_info="결과안내";
				}
				title = Dep3_info + " | " + title;
				Dep3_info_link="<a href=javascript:function_link('carhome')>"+Dep3_info+"</a>";
				All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span>"+ Dep1_info_link  +"</span> &gt <span>"+ Dep2_info_link +"</span> &gt <span><strong>"+ Dep3_info +"</strong></span>";
			}
		} else if (Dep2=="2"){
			Dep2_info="경력채용";
			Dep2_info_link="<a href=javascript:function_link('carhome')>"+Dep2_info+"</a>";
			imgtitle = Dep2_info;
			
			if(Dep3=="0"){
				title = Dep2_info + " | " + title;
				All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span>"+ Dep1_info_link  +"</span> &gt <span><strong>"+ Dep2_info +"</strong></span>";
			} else {
				if (Dep3=="1"){
					Dep3_info="새로운지원서작성";
				} else if (Dep3=="01"){
					Dep3_info="기본";
				} else if (Dep3=="02"){
					Dep3_info="학력";
				} else if (Dep3=="03"){
					Dep3_info="경력";
				} else if (Dep3=="04"){
					Dep3_info="자격";
				} else if (Dep3=="05"){
					Dep3_info="Essay";
				} else if (Dep3=="06"){
					Dep3_info="제출";
				} else if (Dep3=="07"){
					Dep3_info="연구";
				} else if (Dep3=="09"){
					Dep3_info="제출";
				} else if (Dep3=="10"){
					Dep3_info="결과안내";
				}
				title = Dep3_info + " | " + title;
				Dep3_info_link="<a href=javascript:function_link('carhome')>"+Dep3_info+"</a>";
				All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span>"+ Dep1_info_link  +"</span> &gt <span>"+ Dep2_info_link +"</span> &gt <span><strong>"+ Dep3_info +"</strong></span>";
			}			
		} else if (Dep2=="3"){
			Dep2_info="고졸채용";
			Dep2_info_link="<a href=javascript:function_link('carhome')>"+Dep2_info+"</a>";
			imgtitle = Dep2_info;
			
			if(Dep3=="0"){
				title = Dep2_info + " | " + title;
				All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span>"+ Dep1_info_link  +"</span> &gt <span><strong>"+ Dep2_info +"</strong></span>";
			} else {
				if (Dep3=="1"){
					Dep3_info="새로운지원서작성";
				} else if (Dep3=="01"){
					Dep3_info="기본";
				} else if (Dep3=="02"){
					Dep3_info="학력";
				} else if (Dep3=="03"){
					Dep3_info="경력";
				} else if (Dep3=="04"){
					Dep3_info="자격";
				} else if (Dep3=="05"){
					Dep3_info="Essay";
				} else if (Dep3=="06"){
					Dep3_info="제출";
				} else if (Dep3=="07"){
					Dep3_info="연구";
				} else if (Dep3=="09"){
					Dep3_info="제출";
				} else if (Dep3=="10"){
					Dep3_info="결과안내";
				}
				title = Dep3_info + " | " + title;
				Dep3_info_link="<a href=javascript:function_link('carhome')>"+Dep3_info+"</a>";
				All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span>"+ Dep1_info_link  +"</span> &gt <span>"+ Dep2_info_link +"</span> &gt <span><strong>"+ Dep3_info +"</strong></span>";
			}			
		} else if (Dep2=="4"){
			Dep2_info="인턴선발";
			Dep2_info_link="<a href=javascript:function_link('carhome')>"+Dep2_info+"</a>";
			imgtitle = Dep2_info;
			
			if(Dep3=="0"){
				title = Dep2_info + " | " + title;
				All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span>"+ Dep1_info_link  +"</span> &gt <span><strong>"+ Dep2_info +"</strong></span>";
			} else {
				if (Dep3=="1"){
					Dep3_info="새로운지원서작성";
				} else if (Dep3=="2"){
					Dep3_info="지원공고변경";					
				} else if (Dep3=="01"){
					Dep3_info="기본";
				} else if (Dep3=="02"){
					Dep3_info="학력";
				} else if (Dep3=="03"){
					Dep3_info="경력";
				} else if (Dep3=="04"){
					Dep3_info="자격";
				} else if (Dep3=="05"){
					Dep3_info="Essay";
				} else if (Dep3=="06"){
					Dep3_info="제출";
				} else if (Dep3=="07"){
					Dep3_info="연구";
				} else if (Dep3=="09"){
					Dep3_info="제출";
				} else if (Dep3=="10"){
					Dep3_info="결과안내";
				}
				title = Dep3_info + " | " + title;
				Dep3_info_link="<a href=javascript:function_link('carhome')>"+Dep3_info+"</a>";
				All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span>"+ Dep1_info_link  +"</span> &gt <span>"+ Dep2_info_link +"</span> &gt <span><strong>"+ Dep3_info +"</strong></span>";
			}			
		} else if (Dep2=="20"){
			Dep2_info="시간선택제";
			Dep2_info_link="<a href=javascript:function_link('prthome')>"+Dep2_info+"</a>";
			imgtitle = Dep2_info;
			var temp ='';
			
			if(Dep3=="0"){
				title = Dep2_info + " | " + title;
				All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span>"+ Dep1_info_link  +"</span> &gt <span><strong>"+ Dep2_info +"</strong></span>";
			} else {
				if (Dep3=="00"){
					Dep3_info="지원서작성";
				} else if (Dep3=="1"){
					Dep3_info="새로운지원서작성";
				} else if (Dep3=="2"){
					Dep3_info="지원공고변경";					
				} else if (Dep3=="01"){
					temp = '지원서작성';
					Dep3_info="기본";
				} else if (Dep3=="02"){
					temp = '지원서작성';
					Dep3_info="학력";
				} else if (Dep3=="03"){
					temp = '지원서작성';
					Dep3_info="경력";
				} else if (Dep3=="04"){
					temp = '지원서작성';
					Dep3_info="자격";
				} else if (Dep3=="05"){
					temp = '지원서작성';
					Dep3_info="Essay";
				} else if (Dep3=="06"){
					temp = '지원서작성';
					Dep3_info="제출";
				} else if (Dep3=="09"){
					Dep3_info="지원서제출";
				} else if (Dep3=="10"){
					Dep3_info="결과안내";
				} else if (Dep3=="11"){
					Dep3_info="공고검색";
				}
				var temp2 ='';
				if (temp!='') {
					temp2=" &gt <span><a href=javascript:function_link('prthis')>"+ temp +"</a></span>";
				}
	
				title = Dep3_info + " | " + title;
				Dep3_info_link="<a href=javascript:function_link('prthome')>"+Dep3_info+"</a>";
				All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span>"+ Dep1_info_link  +"</span> &gt <span>"+ Dep2_info_link +"</span>"+temp2+" &gt <span><strong>"+ Dep3_info +"</strong></span>";
			}
			
		} else {
			if (Dep2=="5"){
				Dep2_info="FAQ / Q&A";
				
			} else if (Dep2=="6"){
				Dep2_info="FAQ / Q&A";

			} else if (Dep2=="7"){
				Dep2_info="개인정보취급방침";

			} else if (Dep2=="8"){
				Dep1_info_link="회원관리";
				Dep2_info="회원정보수정";

			} else if (Dep2=="9"){
				Dep1_info_link="회원관리";
				Dep2_info="회원탈퇴";

			} else if (Dep2=="10"){
				Dep2_info="로그인";
				
			} else if (Dep2=="11"){
				Dep2_info="회원가입";
				
			} else if (Dep2=="12"){
				Dep2_info="로그인도우미";
				
			} else if (Dep2=="13"){
				Dep2_info="로그인민원센터";
			}
			
			imgtitle = Dep2_info;
			title = Dep2_info + " | " + title;
			All_load_linkinfor = "<span class='home'>"+Home_link +"</span> &gt <span>"+ Dep1_info_link  +"</span> &gt <span><strong>"+ Dep2_info +"</strong></span>";
		}
	} else if(Dep1=="5"){
		Dep1_info="입사자 추가등록정보";
		Dep1_info_link="<a href=javascript:function_link('onboard')>"+Dep1_info+"</a>";
		title = Dep1_info;
		All_load_linkinfor = "<span><strong>"+ Dep1_info +"</strong></span>";
		imgtitle = Dep1_info;
	}else{
		Dep1_info="SAMSUNG";
		Dep1_info_link="<a href=javascript:function_link('onboard')>"+Dep1_info+"</a>";
		title = Dep1_info;
		All_load_linkinfor = "<span><strong>"+ Dep1_info +"</strong></span>";
		imgtitle = Dep1_info;
	}  
	
	All_load_linkinfor = "<span class='blind'>현재위치는</span>" + All_load_linkinfor + "<span class='blind'>입니다.</span>"; 
	
	top.document.title=title;
	document.title=title;
	$("#Load_map").html(All_load_linkinfor);


	var src_path='<img src="/recweb/images/title/tit_'+ Dep1 +'_'+Dep2+'.gif" alt="'+imgtitle+'"/>';
	$("#Title_img").html(src_path);
	

})
