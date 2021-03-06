// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
	(function() {
		var noop = function() {};
		var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
		var length = methods.length;
		var console = window.console = {};
		while (length--) {
			console[methods[length]] = noop;
		}
	}());
}

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-25608379-1']);
  _gaq.push(['_setDomainName', 'merge.com']);
  _gaq.push(['_setAllowHash', false]);
  _gaq.push(['_setLocalRemoteServerMode']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

// This detects a touch (read: mobile) device and disables click functions on top-level nav links. 
var touch_detect = {  handler: function(event){    

$('.navlink').bind('click', false);
$('.clear_content_sol').bind('click', false);
$('.second_lev_sol').bind('click', false);
$('.nav_topic_list a').bind('click', false);

}};document.ontouchstart = touch_detect.handler;


// Drops down and rolls up the menus.
$(document).ready(function() {
		
	var sponsorswap = function() {
		
		};	
		
	$(".nav_solutions_hover").bind('click', function() {
		$(".fade_it_out").css("display", "inline");	
		$("#dropdown_solutions").fadeIn("fast");
		$(".solutions_copy").empty();	
		$(".solutions_copy").css("background", "url('/Merge2012/media/img/menu_head/solutions_head.png')");						
		$("#dropdown_solutions").css("margin-top", "0px");
		$(".nav_solutions_hover").css("background", "url('/Merge2012/media/img/menu_arrow.png') no-repeat scroll center bottom");
		$(".nav_support_hover, .nav_company_hover, .nav_trends_hover, .nav_contact_hover").css("background", "transparent");		
		$("#dropdown_support, dropdown_company, #dropdown_trends, #dropdown_contact").css("margin-top", "-2000px");
		$("a.nav_solutions_hover").delay(500).queue(function(){ 
			$(this).attr("href", "/Solutions.aspx");
			$(this).dequeue();
		});	
		$("a.nav_support_hover, a.nav_company_hover, a.nav_trends_hover, a.nav_contact_hover").removeAttr("href");
	});

	$(".nav_support_hover").bind('click', function() {
		$(".fade_it_out").css("display", "inline");			
		$("#dropdown_support").fadeIn("fast");
		$(".menu_support").empty();
		$(".nav_support_hover").css("background", "url('/Merge2012/media/img/menu_arrow.png') no-repeat scroll center bottom");					
		$(".menu_support").css("background", "url('/Merge2012/media/img/menu_head/support_head.png')");				
		$("#dropdown_support").css("margin-top", "-0px");
		$(".nav_solutions_hover, .nav_company_hover, .nav_trends_hover, .nav_contact_hover").css("background", "transparent");		
		$("#dropdown_company, #dropdown_solutions, #dropdown_trends, #dropdown_contact").css("margin-top", "-2000px");
		$("a.nav_support_hover").delay(500).queue(function(){ 
			$(this).attr("href", "/Support.aspx");
			$(this).dequeue();
		});
		$("a.nav_solutions_hover, a.nav_company_hover, a.nav_trends_hover, a.nav_contact_hover").removeAttr("href");
	});

	$(".nav_company_hover").on('click', function() {
		$(".fade_it_out").css("display", "inline");			
		$("#dropdown_company").fadeIn("fast");
		$("#dropdown_company").css("margin-top", "0px");
		$(".menu_company").empty();
		$(".menu_company").load("http://www.merge.com/Merge2012/media/tab_content/movie.html")
		$(".menu_company").css("background", "url('/Merge2012/media/img/menu_head/movie_wash.jpg')");	
		$(".nav_company_hover").css("background", "url('/Merge2012/media/img/menu_arrow.png') no-repeat scroll center bottom");	
		$(".nav_solutions_hover, .nav_support_hover, .nav_trends_hover, .nav_contact_hover").css("background", "transparent");			
		$("#dropdown_contact, #dropdown_trends, #dropdown_support, #dropdown_solutions").css("margin-top", "-2000px");
		$("a.nav_company_hover").delay(500).queue(function(){ 
			$(this).attr("href", "/Company.aspx");
			$(this).dequeue();
		});
		$("a.nav_solutions_hover, a.nav_support_hover, a.nav_trends_hover, a.nav_contact_hover").removeAttr("href");		
	});


	$(".nav_trends_hover").bind('click', function() {
		$(".fade_it_out").css("display", "inline");			
		$("#dropdown_trends").fadeIn("fast");
		$("#dropdown_trends").css("margin-top", "0px");
		$(".nav_trends_hover").css("background", "url('/Merge2012/media/img/menu_arrow.png') no-repeat scroll center bottom");		
		$(".menu_trends").empty();
		$(".menu_trends").css("background", "url('/Merge2012/media/img/menu_head/trends_head.png')");
		$(".nav_solutions_hover, .nav_company_hover, .nav_support_hover, .nav_contact_hover").css("background", "transparent");			
		$("#dropdown_contact, #dropdown_solutions, #dropdown_support, #dropdown_company").css("margin-top", "-2000px");
		$("a.nav_trends_hover").delay(500).queue(function(){ 
			$(this).attr("href", "/Trends.aspx");
			$(this).dequeue();
		});
				$("a.nav_solutions_hover, a.nav_support_hover, a.nav_company_hover, a.nav_contact_hover").removeAttr("href");
	});


	$(".nav_contact_hover").bind('click', function() {
		$(".fade_it_out").css("display", "inline");		
		$("#dropdown_contact").fadeIn("fast");
		$("#dropdown_contact").css("margin-top", "0px");
		$(".nav_contact_hover").css("background", "url('/Merge2012/media/img/menu_arrow.png') no-repeat scroll center bottom");	
		$(".nav_solutions_hover, .nav_company_hover, .nav_trends_hover, .nav_support_hover").css("background", "transparent");			
		$("#dropdown_trends, #dropdown_solutions, #dropdown_support, #dropdown_company").css("margin-top", "-2000px");
		$("a.nav_contact_hover").delay(500).queue(function(){ 
			$(this).attr("href", "/Contact.aspx");
			$(this).dequeue();
					$("a.nav_solutions_hover, a.nav_support_hover, a.nav_company_hover, a.nav_trends_hover").removeAttr("href");
		});
	});


	$(".fade_it_out, .closer_header, .close_it_up").click(function() {
		$(".dropdown").fadeOut("slow");
		$(".navlink").css("background", "transparent");		
		$(".fade_it_out").css("display", "none");
		$(".nav_solutions_hover, .nav_company_hover, .nav_trends_hover, .nav_support_hover, .nav_contact_hover").addClass("arrow_hover_after");	
		$("a.nav_solutions_hover, a.nav_support_hover, a.nav_company_hover, a.nav_trends_hover, a.nav_contact_hover").removeAttr("href");			
	});

});

// Brings in second-level Solutions menus via sprites.
$(document).ready(function() {
	$(".clear_content_sol").mouseover(function() {
		$(".solutions_copy").css("background-color", "#fff")
		$(".solutions_copy").css("background", "url('/Merge2012/media/img/menu_head/solutions_head.png')")
		$(".solutions_copy").empty()
	});	
	
			$(".sol_inter").mouseover(function() {
				$(".drop_dummy").prepend($('.sol_ul_inter')) ;
			});
		
			$(".sol_radio").mouseover(function() {
				$(".drop_dummy").prepend($('.sol_ul_radio')) ;
			});
		
			$(".sol_cardio").mouseover(function() {
				$(".drop_dummy").prepend($('.sol_ul_ortho')) ;
			});
		
			$(".sol_ortho").mouseover(function() {
				$(".drop_dummy").prepend($('.sol_ul_cardio')) ;
			});
		
			$(".sol_peri").mouseover(function() {
				$(".drop_dummy").prepend($('.sol_ul_peri')) ;
			});
		
			$(".sol_labs").mouseover(function() {
				$(".drop_dummy").prepend($('.sol_ul_labs')) ;
			});
		
			$(".sol_ehr").mouseover(function() {
				$(".drop_dummy").prepend($('.sol_ul_ehr')) ;
			});
		
			$(".sol_eye").mouseover(function() {
				$(".drop_dummy").prepend($('.sol_ul_eye')) ;
			});
		
			$(".sol_trials").mouseover(function() {
				$(".drop_dummy").prepend($('.sol_ul_trials')) ;
			});
		
			$(".sol_tools").mouseover(function() {
				$(".drop_dummy").prepend($('.sol_ul_tools')) ;
			});
		
		
			$(".sol_cloud").mouseover(function() {
				$(".drop_dummy").prepend($('.sol_ul_cloud')) ;
			});

});

// Loads Solutions content via AJAX.
$(document).ready(function() {
	$(".second_lev_sol").mouseover(function() {
		$(".solutions_copy").css("background", "none")
	});

	$(".iconnect_access_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #iconnect_access");
	});

	$(".iconnect_share_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #share_iconnect");
	});

	$(".iconnect_enterprise_archive").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #iconnect_archive");
	});

	$(".connect_network_share").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_add.html #connect_network");
	});

	$(".ris_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #RIS_rad");
	});

	$(".pacs_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #PACS_rad");
	});

	$(".financials_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #finance_rad");
	});

	$(".dashboards_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #dash_rad");
	});

	$(".porta_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #port_rad");
	});

	$(".documents_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #docu_rad");
	});

	$(".cadstream_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #cadstream_rad");
	});

	$(".efilm_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #efilm");
	});

	$(".orthoemr_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #emr_ortho");
	});
	
	$(".orthoemr_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #emr_ortho");
	});	
	
	$(".nav_orthopm").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_add.html #pm_ortho");
	});	

	$(".nav_orthodr").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_add.html #dr_ortho");
	});	


	$(".orthopacs_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #pacs_ortho");
	});

	$(".orthocase_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #orthocase");
	});

	$(".cardioacc_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #ortho_acc");
	});

	$(".mcardio_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #mcardio");
	});

	$(".mhemo_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #mhemo");
	});

	$(".orthoacc_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #orthoacc");
	});

	$(".aims_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #aims");
	});

	$(".pre_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #pre");
	});

	$(".lis_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #lis");
	});

	$(".labaccess_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #labaccess");
	});

	$(".labacc_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #labacccon");
	});

	$(".eyepm_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #eyepm");
	});

	$(".gynpm_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #gynpm");
	});

	$(".orthopm_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #orthopm");
	});

	$(".eyestation_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #eyestation");
	});

	$(".eyepacs_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #eyepacs");
	});

	$(".eclinical_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #eclinical");
	});

	$(".ctms_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #ctms");
	});

	$(".ctms_sponsor_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #ctms_sponsor");
	});


	$(".dicom_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #dicom");
	});

	$(".hl7_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #hl7");
	});

	$(".himage_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #himage");
	});

	$(".harchive_nav").mouseover(function() {
		$(".solutions_copy").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_solutions.html #harchive");
	});

});

// Loads Support content via AJAX.
$(document).ready(function() {
	$(".support_first").mouseover(function() {
		$(".menu_support").css("background", "none")		
	});

	$(".support_technical").mouseover(function() {
		$(".drop_right_third").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #support_technical");
	});

	$(".support_pro").mouseover(function() {
		$(".drop_right_third").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #support_pro");
	});

	$(".support_training").mouseover(function() {
		$(".drop_right_third").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #support_training");
	});

	$(".support_upgrade").mouseover(function() {
		$(".drop_right_third").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #support_upgrade");
	});

	$(".support_forums").mouseover(function() {
		$(".drop_right_third").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #support_forums");
	});

	$(".support_resources").mouseover(function() {
		$(".drop_right_third").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #support_resources");
	});

	$(".support_portal").mouseover(function() {
		$(".drop_right_third").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #support_portal");
	});

});

// Loads Company content via AJAX.
$(document).ready(function() {
	$(".company_first").mouseover(function() {
		$(".menu_company").css("background", "none")		
	});

	$(".company_blog").mouseover(function() {
		$(".menu_company").load("http://www.merge.com/Merge2012/media/tab_content/merge_content_add.html #comp_blog");
	});

	$(".company_markets").mouseover(function() {
		$(".menu_company").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #company_markets");
	});

	$(".company_leadership").mouseover(function() {
		$(".menu_company").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #company_leadership");
	});

	$(".company_news").mouseover(function() {
		$(".menu_company").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #company_news");
	});

	$(".company_investors").mouseover(function() {
		$(".menu_company").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #company_investors");
	});

	$(".company_careers").mouseover(function() {
		$(".menu_company").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #company_careers");
	});

	$(".company_events").mouseover(function() {
		$(".menu_company").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #company_events");
	});

	$(".company_partners").mouseover(function() {
		$(".menu_company").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #company_partners");
	});

	$(".company_clients").mouseover(function() {
		$(".menu_company").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #company_clients");
	});

});

// Loads Trends content via AJAX.
$(document).ready(function() {
	$(".trends_first").mouseover(function() {
		$(".menu_trends").css("background", "none")
	});	
	
	$(".trends_mu").mouseover(function() {
		$(".menu_trends").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #trends_mu");
	});

	$(".trends_icd").mouseover(function() {
		$(".menu_trends").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #trends_icd");
	});

	$(".trends_aco").mouseover(function() {
		$(".menu_trends").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #trends_aco");
	});

	$(".trends_cloud").mouseover(function() {
		$(".menu_trends").load("http://www.merge.com/Merge2012/media/tab_content/merge_content.html #trends_cloud");
	});

});

// retina.js, a high-resolution image swapper (http://retinajs.com), v0.0.2

(function(){function t(e){this.path=e;var t=this.path.split("."),n=t.slice(0,t.length-1).join("."),r=t[t.length-1];this.at_2x_path=n+"@2x."+r}function n(e){this.el=e,this.path=new t(this.el.getAttribute("src"));var n=this;this.path.check_2x_variant(function(e){e&&n.swap()})}var e=typeof exports=="undefined"?window:exports;e.RetinaImagePath=t,t.confirmed_paths=[],t.prototype.is_external=function(){return!!this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain)},t.prototype.check_2x_variant=function(e){var n,r=this;if(this.is_external())return e(!1);if(this.at_2x_path in t.confirmed_paths)return e(!0);n=new XMLHttpRequest,n.open("HEAD",this.at_2x_path),n.onreadystatechange=function(){return n.readyState!=4?e(!1):n.status>=200&&n.status<=399?(t.confirmed_paths.push(r.at_2x_path),e(!0)):e(!1)},n.send()},e.RetinaImage=n,n.prototype.swap=function(e){function n(){t.el.complete?(t.el.setAttribute("width",t.el.offsetWidth),t.el.setAttribute("height",t.el.offsetHeight),t.el.setAttribute("src",e)):setTimeout(n,5)}typeof e=="undefined"&&(e=this.path.at_2x_path);var t=this;n()},e.devicePixelRatio>1&&(window.onload=function(){var e=document.getElementsByTagName("img"),t=[],r,i;for(r=0;r<e.length;r++)i=e[r],t.push(new n(i))})})();
