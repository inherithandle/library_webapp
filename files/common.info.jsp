
var homeurl = "";
var recurl = "http://apply.samsung.co.kr";
var home = {
	careers : "http://careers.samsung.co.kr"
	, about : "http://about.samsung.co.kr"
	, withs : "http://with.samsung.co.kr"
	, www : "http://www.samsung.co.kr"
	, recurl : ""
}
var _infos_menu={
	'GNB':[

		// 삼성 소식
		{
			'id':'1',
			'name':'삼성 소식',
			'image':'/images/gnb2_off.gif',
			'link': home.about +'/about/main.do',
			'ment':{
				'title':'인재 · 기술 · 인류공헌',
				'des':'삼성의 존재 이유이자 삼성이 추구하는 궁극적인 목표입니다!',
				'link':''
			},
			'child':[
				{
					'id':'1_0', 'name':'삼성소개', 'link': home.about +'/about/intro.do',
					'child':[
						{'id':'1_0_0', 'name':'삼성소개', 'link': home.about +'/about/intro.do'},
						{'id':'1_0_1', 'name':'이병철 선대회장', 'link':home.about+'/about/founder.do'},
						{'id':'1_0_2', 'name':'이건희 회장', 'link':home.about+'/about/chairman.do'},
						{'id':'1_0_3', 'name':'삼성연혁', 'link':home.about+'/about/history.do'},
						{
							'id':'1_0_4', 'name':'삼성계열사', 'link':home.about+'/about/affiliate.do',
							'child':[
								{'id':'1_0_4_0', 'name':'전자', 'link':home.about+'/about/affiliate.do?type=0'	},
								{'id':'1_0_4_1', 'name':'금융', 'link':home.about+'/about/affiliate.do?type=1'	},
								{'id':'1_0_4_2', 'name':'중화학', 'link':home.about+'/about/affiliate.do?type=2'	},
								{'id':'1_0_4_3', 'name':'독립', 'link':home.about+'/about/affiliate.do?type=3'	},
								{'id':'1_0_4_4', 'name':'사회공헌<span>|</span>문화&middot;예술<span>|</span>교육&middot;장학', 'link':home.about+'/about/affiliate.do?type=4'	},
								{'id':'1_0_4_5', 'name':'스포츠단', 'link':home.about+'/about/affiliate.do?type=5'	}
							]
						},
						{'id':'1_0_5', 'name':'해외사업장', 'link':home.about+'/about/global.do'},
						{
							'id':'1_0_6', 'name':'경영성과', 'link':home.about+'/about/achieve.do',
							'child':[
									{'id':'1_0_6_0', 'name':'경영실적', 'link':home.about+'/about/achieve.do'},
									{'id':'1_0_6_1', 'name':'브랜드가치', 'link':home.about + '/about/brandValue.do'}
								]
						},
						{'id':'1_0_7', 'name':'스포츠스폰서십', 'link':home.about+'/about/sportsSponsorship.do'}
					]
				},

				{
					'id':'1_1', 'name':'경영철학', 'link':home.about+'/about/idea.do',
					'child':[
						{'id':'1_1_0', 'name':'경영이념', 'link':home.about+'/about/idea.do'},
						{'id':'1_1_1', 'name':'경영원칙', 'link':home.about+'/about/manageRule.do'},
						{'id':'1_1_2', 'name':'핵심가치', 'link':home.about+'/about/coreValue.do'},
						{'id':'1_1_3', 'name':'신경영', 'link':home.about+'/about/newManagement.do'}
					]
				},
				{
					'id':'1_2', 'name':'소식', 'link':home.about+'/about/news.do',
					'child':[
						{'id':'1_2_0', 'name':'삼성뉴스', 'link':home.about+'/about/news.do'},
						{'id':'1_2_1', 'name':'영상뉴스', 'link':home.about+'/about/movie.do'},
						{'id':'1_2_2', 'name':'삼성앤유', 'link':home.about+'/about/journal.do'}
					]
				}
			]
		},

		// 함께하는 삼성
		{
			'id':'0',
			'name':'함께하는 삼성',
			'image':'/images/gnb_off.gif',
			'link':home.withs+'/with/main.do',
			'ment':{
				'title':'삼성이 청춘을 응원합니다!',
				'des':'4만 5천 청춘이 함께 한 열정락서 시즌5의 생생한 현장, 지금 사이트에서 확인하세요.',
				'link':'http://passiontalk.youngsamsung.com/index.jsp'
			},
			'child':[

				{
					'id':'0_0', 'name':'열정樂서', 'link':home.withs+'/with/main.do?seq=242',
					'child':[
						{'id':'0_0_0', 'name':'강연일정', 'link':'http://passiontalk.youngsamsung.com/schedule.do?cmd=view', 'isout':true},
						{'id':'0_0_1', 'name':'강연영상', 'link':'http://passiontalk.youngsamsung.com/season5.do?cmd=list', 'isout':true}
					]
				},
				{
					'id':'0_1', 'name':'삼성멘토링', 'link':home.withs+'/with/main.do?seq=245',
					'child':[
						{'id':'0_1_0', 'name':'삼성멘토링이란?', 'link':'http://mentoring.youngsamsung.com/pages/intro3.jsp', 'isout':true},
						{'id':'0_1_1', 'name':'멘토링영상', 'link':'http://mentoring.youngsamsung.com/ssmn/ssmnMain.do', 'isout':true}
					]
				},
				{
					'id':'0_2', 'name':'드림클래스', 'link':home.withs+'/with/main.do?seq=247',
					'child':[
						{'id':'0_2_0', 'name':'드림클래스란?', 'link':home.withs+'/with/dreamInfo.do'},
						{'id':'0_2_1', 'name':'운영안내', 'link':home.withs+'/with/dreamInfo2.do'}
					]
				},
				{
					'id':'0_3', 'name':'열린장학금', 'link':home.withs+'/with/main.do?seq=253',
					'child':[
						{'id':'0_3_0', 'name':'열린장학금이란?', 'link':home.withs+'/with/scholarshipInfo.do'},
						{'id':'0_3_1', 'name':'활동안내', 'link':home.withs+'/with/scholarshipInfo2.do'}
					]
				},
				{
					'id':'0_4', 'name':'글로벌투게더', 'link':home.withs+'/with/main.do?seq=257',
					'child':[
						{'id':'0_4_0', 'name':'글로벌투게더란?', 'link':home.withs+'/with/globalInfo.do'},
						{'id':'0_4_1', 'name':'교육프로그램', 'link':home.withs+'/with/globalInfo2.do'}
					]
				},
				{
					'id':'0_5', 'name':'안내견사업', 'link':home.withs+'/with/main.do?seq=303',
					'child':[
						{'id':'0_5_0', 'name':'안내견사업이란?', 'link':home.withs+'/with/mydogInfo.do'},
						{'id':'0_5_1', 'name':'안내견이야기', 'link':home.withs+'/with/mydogInfo2.do'}
					]
				}
			]
		},

		// 인재와 채용
		{
			'id':'2',
			'name':'인재와 채용',
			'image':'/images/gnb3_off.gif',
			'link':home.careers+'/careers/main.do',
			'ment':{
				'title':'기업은 사람이다.',
				'des':'삼성은 다양한 인재와 기술을 바탕으로 세계 최고에 도전합니다.',
				'link':''
			},
			'child':[
				{
				'id':'2_0', 'name':'채용정보', 'link':home.careers+'/careers/intro.do',
				'child':[
					{'id':'2_0_0', 'name':'인재상', 'link':home.careers+'/careers/intro.do'},
					{'id':'2_0_1', 'name':'채용제도안내', 'link':home.careers+'/careers/procedures/new.do'},
					{'id':'2_0_3', 'name':'직무소개', 'link':home.careers+'/careers/employ/list.do'}
				]
				},
				{
				'id':'2_1', 'name':'채용공고', 'link': home.recurl+'/rec/apply/ComResumeServlet?cmd=pstMain',
				'child':[
					{'id':'2_1_0', 'name':'3급신입채용', 'link':home.recurl+'/rec/apply/ComResumeServlet?cmd=pstMain&amp;gbncd=A'},
					{'id':'2_1_1', 'name':'4급신입채용', 'link':home.recurl+'/rec/apply/ComResumeServlet?cmd=pstMain&amp;gbncd=C'},
					{'id':'2_1_2', 'name':'경력채용', 'link':home.recurl+'/rec/apply/ComResumeServlet?cmd=pstMain&amp;gbncd=B'}
					,{'id':'2_1_3', 'name':'시간선택제', 'link':home.recurl+'/rec/apply/PrtResumeServlet?cmd=pstCube'}
				]
				},
				{
				'id':'2_2', 'name':'채용지원', 'link':home.recurl+'/rec/apply/ComResumeServlet',
				'child':[
					{'id':'2_2_0', 'name':'3급신입채용', 'link':home.recurl+'/rec/apply/FreResumeServlet'},
					{'id':'2_2_1', 'name':'4급신입채용', 'link':home.recurl+'/rec/apply/ComResumeServlet?cmd=forMain'},
					{'id':'2_2_2', 'name':'경력채용', 'link':home.recurl+'/rec/apply/CarResumeServlet'}
					,{'id':'2_2_3', 'name':'시간선택제', 'link':home.recurl+'/rec/apply/PrtResumeServlet'}
				]
				},
				{
					'id':'2_3', 'name':'회원관리/문의', 'link':home.recurl+'/rec/apply/ComResumeServlet',
					'child':[
						{'id':'2_3_0', 'name':'회원정보수정', 'link':home.recurl+'/rec/apply/ComResumeServlet?cmd=comLoginInfoMain'},
						{'id':'2_3_1', 'name':'회원탈퇴', 'link':home.recurl+'/rec/apply/ComResumeServlet?cmd=comWithdrawalMain'},
						{'id':'2_3_2', 'name':'FAQ / Q&amp;A', 'link':home.recurl+'/rec/apply/ComResumeServlet?cmd=queFaq'}
					]
				}
			]
		}
	],

	'UTIL':[
		{'id':'0', 'name':'구독신청', 'link':home.www+'/main/subscribes/loginForm.do'},
		{'id':'1', 'name':'공지사항', 'link':home.www+'/main/notice/list.do'},
		{'id':'2', 'name':'고객센터', 'link':home.www+'/main/customer/main.do'},
		{'id':'3', 'name':'Global Site', 'link':'http://www.samsung.com/function/ipredirection/ipredirectionLocalList.do'}
	],

	'BRANCH':[
		// 전자
		{
			'id':'0', 'name':'전자',
			'child':[
				
					{
						'id':'0_0',
						'name':'삼성전자',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsung.com/sec'
							,
						
						
							'twitter':'http://twitter.com/samsungtomorrow'
							,
						
						
							'facebook':'http://facebook.com/SamsungTomorrow'
							,
						
						
							'blog':'http://www.samsungtomorrow.com'
						
						}
					}
					,
				
					{
						'id':'0_1',
						'name':'삼성SDI',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungsdi.co.kr '
							,
						
						
							'twitter':'http://twitter.com/SDIin'
							,
						
						
							'facebook':'http://facebook.com/samsungsdi'
							,
						
						
							'blog':'http://blog.naver.com/sdibattery'
						
						}
					}
					,
				
					{
						'id':'0_2',
						'name':'삼성전기',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungsem.co.kr'
							,
						
						
							'twitter':'http://twitter.com/SEMCOin'
							,
						
						
							'facebook':'http://facebook.com/SamsungElectroMechanics'
							,
						
						
							'blog':'http://www.semstory.com'
						
						}
					}
					,
				
					{
						'id':'0_3',
						'name':'삼성코닝정밀소재',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungscp.co.kr'
							,
						
						
							'twitter':'http://twitter.com/SCPstory'
							,
						
						
							'facebook':'http://facebook.com/samsungscp'
							,
						
						
							'blog':'http://blog.samsungscp.co.kr'
						
						}
					}
					,
				
					{
						'id':'0_4',
						'name':'삼성SDS',
						'target':'_blank',
						'links':{
						
							'home':'http://www.sds.samsung.co.kr'
							,
						
						
							'twitter':'http://twitter.com/ICTstory'
							,
						
						
							'facebook':'http://facebook.com/samsungsds'
							,
						
						
							'blog':'http://www.ictstory.com'
						
						}
					}
					,
				
					{
						'id':'0_5',
						'name':'삼성디스플레이',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungdisplay.com'
							,
						
						
							'twitter':'http://twitter.com/Samsung_Display'
							,
						
						
							'facebook':'http://facebook.com/SamsungDisplay'
							,
						
						
							'blog':'http://blog.samsungdisplay.com'
						
						}
					}
					
				
			]
		},

		// 금융
		{
			'id':'1', 'name':'금융',
			'child':[
				
					{
						'id':'1_0',
						'name':'삼성생명',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsunglife.com'
							,
						
						
							'twitter':'http://twitter.com/samsunglife'
							,
						
						
							'facebook':'http://facebook.com/samsunglife'
							,
						
						
							'blog':'http://www.samsunglifeblogs.com'
						
						}
					}
					,
				
					{
						'id':'1_1',
						'name':'삼성화재',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungfire.com'
							,
						
						
							'twitter':'http://twitter.com/SamsungfireTalk'
							,
						
						
							'facebook':'http://facebook.com/samsungfiretalk'
							,
						
						
							'blog':'http://blog.samsungfire.com/'
						
						}
					}
					,
				
					{
						'id':'1_2',
						'name':'삼성카드',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungcard.com'
							,
						
						
							'twitter':'http://twitter.com/SamsungCard'
							,
						
						
							'facebook':'http://facebook.com/withSamsungCard'
							,
						
						
							'blog':'http://blog.samsungcard.com'
						
						}
					}
					,
				
					{
						'id':'1_3',
						'name':'삼성증권',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungpop.com'
							,
						
						
							'twitter':'http://twitter.com/samsungpop'
							,
						
						
							'facebook':'http://facebook.com/withSamsungPOP'
							,
						
						
							'blog':'http://www.samsungpopblog.co.kr'
						
						}
					}
					,
				
					{
						'id':'1_4',
						'name':'삼성자산운용',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungfund.com'
							,
						
						
							'twitter':'http://twitter.com/withSamsungFund'
							,
						
						
							'facebook':'http://facebook.com/samsungfund'
							
						
						
						}
					}
					,
				
					{
						'id':'1_5',
						'name':'삼성벤처투자',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungventure.co.kr'
							
						
						
						
						
						}
					}
					
				
			]
		},

		// 중화학
		{
			'id':'2', 'name':'중화학',
			'child':[
				
					{
						'id':'2_0',
						'name':'삼성중공업',
						'target':'_blank',
						'links':{
						
							'home':'http://www.shi.samsung.co.kr'
							,
						
						
							'twitter':'http://twitter.com/samsungshi'
							,
						
						
							'facebook':'http://facebook.com/samsungshi'
							,
						
						
							'blog':'http://blog.samsungshi.com'
						
						}
					}
					,
				
					{
						'id':'2_1',
						'name':'삼성토탈',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungtotal.com'
							,
						
						
							'twitter':'http://twitter.com/SamToTong'
							,
						
						
							'facebook':'http://facebook.com/Samsungtotal'
							,
						
						
							'blog':'http://samsungtotal.tistory.com'
						
						}
					}
					,
				
					{
						'id':'2_2',
						'name':'삼성석유화학',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungspc.co.kr'
							,
						
						
							'twitter':'http://twitter.com/SamsungSPC'
							
						
						
						
						}
					}
					,
				
					{
						'id':'2_3',
						'name':'삼성정밀화학',
						'target':'_blank',
						'links':{
						
							'home':'http://www.sfc.samsung.co.kr'
							,
						
						
							'twitter':'http://www.twitter.com/samsungfinechem'
							,
						
						
							'facebook':'http://www.facebook.com/samsungfinechem'
							,
						
						
							'blog':'http://www.finesfc.com '
						
						}
					}
					,
				
					{
						'id':'2_4',
						'name':'삼성BP화학',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungbp.co.kr'
							
						
						
						
						
						}
					}
					,
				
					{
						'id':'2_5',
						'name':'삼성테크윈',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungtechwin.co.kr'
							,
						
						
							'twitter':'http://twitter.com/samsung_techwin'
							,
						
						
							'facebook':'http://facebook.com/SamsungTechwin'
							,
						
						
							'blog':'http://blog.samsungtechwin.co.kr/'
						
						}
					}
					
				
			]
		},

		// 독립
		{
			'id':'3', 'name':'독립',
			'child':[
				
					{
						'id':'3_0',
						'name':'삼성물산',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungcnt.com'
							,
						
						
							'twitter':'http://twitter.com/samsungcnt'
							,
						
						
							'facebook':'http://facebook.com/samsungcnt.trading'
							,
						
						
							'blog':'http://blog.samsungcnt.com'
						
						}
					}
					,
				
					{
						'id':'3_1',
						'name':'삼성엔지니어링',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungengineering.com'
							,
						
						
							'twitter':'http://twitter.com/samsungeng'
							,
						
						
							'facebook':'http://facebook.com/samsungengineering'
							
						
						
						}
					}
					,
				
					{
						'id':'3_2',
						'name':'제일모직',
						'target':'_blank',
						'links':{
						
							'home':'http://cii.samsung.com'
							,
						
						
							'twitter':'http://twitter.com/cheilstory'
							,
						
						
							'facebook':'http://facebook.com/cheilstory'
							,
						
						
							'blog':'http://www.cheilstory.com'
						
						}
					}
					,
				
					{
						'id':'3_3',
						'name':'삼성에버랜드',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungeverland.com'
							,
						
						
							'twitter':'http://twitter.com/withEverland'
							,
						
						
							'facebook':'http://facebook.com/witheverland'
							,
						
						
							'blog':'http://www.witheverland.com'
						
						}
					}
					,
				
					{
						'id':'3_4',
						'name':'호텔신라',
						'target':'_blank',
						'links':{
						
							'home':'http://www.hotelshilla.net'
							,
						
						
							'twitter':'http://twitter.com/TheShillain'
							,
						
						
							'facebook':'http://facebook.com/theshilla'
							,
						
						
							'blog':'http://theshillain.com/'
						
						}
					}
					,
				
					{
						'id':'3_5',
						'name':'제일기획',
						'target':'_blank',
						'links':{
						
							'home':'http://www.cheil.co.kr'
							,
						
						
							'twitter':'http://twitter.com/cheilworldwide'
							,
						
						
							'facebook':'http://facebook.com/CheilWorldwide'
							,
						
						
							'blog':'http://www.cheilblog.com'
						
						}
					}
					,
				
					{
						'id':'3_6',
						'name':'에스원',
						'target':'_blank',
						'links':{
						
							'home':'http://www.s1.co.kr '
							,
						
						
							'twitter':'http://twitter.com/securityno1'
							,
						
						
							'facebook':'http://www.facebook.com/pages/에스원/111322308954376'
							,
						
						
							'blog':'http://www.s1blog.co.kr'
						
						}
					}
					,
				
					{
						'id':'3_7',
						'name':'삼성의료원',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsunghospital.com'
							,
						
						
							'twitter':'http://twitter.com/mySMC'
							,
						
						
							'facebook':'http://facebook.com/SamsungMedicalCenter'
							,
						
						
							'blog':'http://ohhappysmc.com'
						
						}
					}
					,
				
					{
						'id':'3_8',
						'name':'삼성경제연구소',
						'target':'_blank',
						'links':{
						
							'home':'http://www.seri.org'
							,
						
						
							'twitter':'http://twitter.com/seri_org'
							,
						
						
							'facebook':'http://facebook.com/seriorg'
							
						
						
						}
					}
					,
				
					{
						'id':'3_9',
						'name':'삼성바이오로직스',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungbiologics.com'
							
						
						
						
						
						}
					}
					,
				
					{
						'id':'3_10',
						'name':'삼성바이오에피스',
						'target':'_blank',
						'links':{
						
							'home':'http://www.samsungbioepis.com'
							
						
						
						
						
						}
					}
					
				
			]
		}
	],

	'FOOTER':[
		{'id':'0', 'name':'이용약관', 'link':home.www+'/main/common/supportAgreement.do'},
		{'id':'1', 'name':'개인정보취급방침', 'link':home.www+'/main/common/supportPersonal.do'},
		{'id':'2', 'name':'법적고지', 'link':home.www+'/main/common/supportLegal.do'},
		{'id':'3', 'name':'사이트맵', 'link':home.www+'/main/common/supportSiteMap.do'},
		{'id':'4', 'name':'이메일무단수집거부', 'link':home.www+'/main/common/emailReject.do'},
		{'id':'5', 'name':'제보하기', 'link':home.www+'/main/customer/report.do'}

	],

	'RSS':[
		{'id':'0', 'name':'RSS', 'link':home.about+'/about/rss.do'}
	]

}

