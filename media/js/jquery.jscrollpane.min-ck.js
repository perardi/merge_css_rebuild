/*!
 * jScrollPane - v2.0.14 - 2013-05-01
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */(function(e,t,n){e.fn.jScrollPane=function(r){function i(r,i){function K(t){var i,o,a,w,E,x,T=!1,C=!1;s=t;if(u===n){E=r.scrollTop();x=r.scrollLeft();r.css({overflow:"hidden",padding:0});f=r.innerWidth()+R;l=r.innerHeight();r.width(f);u=e('<div class="jspPane" />').css("padding",q).append(r.children());h=e('<div class="jspContainer" />').css({width:f+"px",height:l+"px"}).append(u).appendTo(r)}else{r.css("width","");T=s.stickToBottom&&yt();C=s.stickToRight&&bt();w=r.innerWidth()+R!=f||r.outerHeight()!=l;if(w){f=r.innerWidth()+R;l=r.innerHeight();h.css({width:f+"px",height:l+"px"})}if(!w&&U==p&&u.outerHeight()==d){r.width(f);return}U=p;u.css("width","");r.width(f);h.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}u.css("overflow","auto");t.contentWidth?p=t.contentWidth:p=u[0].scrollWidth;d=u[0].scrollHeight;u.css("overflow","");v=p/f;m=d/l;g=m>1;y=v>1;if(!y&&!g){r.removeClass("jspScrollable");u.css({top:0,width:h.width()-R});Et();Tt();Ct();st()}else{r.addClass("jspScrollable");i=s.maintainPosition&&(S||N);if(i){o=mt();a=gt()}Q();Y();et();if(i){dt(C?p-f:o,!1);pt(T?d-l:a,!1)}xt();wt();At();s.enableKeyboardNavigation&&Nt();s.clickOnTrack&&it();kt();s.hijackInternalLinks&&Lt()}s.autoReinitialise&&!I?I=setInterval(function(){K(s)},s.autoReinitialiseDelay):!s.autoReinitialise&&I&&clearInterval(I);E&&r.scrollTop(0)&&pt(E,!1);x&&r.scrollLeft(0)&&dt(x,!1);r.trigger("jsp-initialised",[y||g])}function Q(){if(g){h.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'),e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'),e('<div class="jspDragBottom" />'))),e('<div class="jspCap jspCapBottom" />')));C=h.find(">.jspVerticalBar");k=C.find(">.jspTrack");w=k.find(">.jspDrag");if(s.showArrows){M=e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",nt(0,-1)).bind("click.jsp",St);_=e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",nt(0,1)).bind("click.jsp",St);if(s.arrowScrollOnHover){M.bind("mouseover.jsp",nt(0,-1,M));_.bind("mouseover.jsp",nt(0,1,_))}tt(k,s.verticalArrowPositions,M,_)}A=l;h.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){A-=e(this).outerHeight()});w.hover(function(){w.addClass("jspHover")},function(){w.removeClass("jspHover")}).bind("mousedown.jsp",function(t){e("html").bind("dragstart.jsp selectstart.jsp",St);w.addClass("jspActive");var n=t.pageY-w.position().top;e("html").bind("mousemove.jsp",function(e){ut(e.pageY-n,!1)}).bind("mouseup.jsp mouseleave.jsp",ot);return!1});G()}}function G(){k.height(A+"px");S=0;L=s.verticalGutter+k.outerWidth();u.width(f-L-R);try{C.position().left===0&&u.css("margin-left",L+"px")}catch(e){}}function Y(){if(y){h.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'),e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'),e('<div class="jspDragRight" />'))),e('<div class="jspCap jspCapRight" />')));D=h.find(">.jspHorizontalBar");P=D.find(">.jspTrack");x=P.find(">.jspDrag");if(s.showArrows){j=e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",nt(-1,0)).bind("click.jsp",St);F=e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",nt(1,0)).bind("click.jsp",St);if(s.arrowScrollOnHover){j.bind("mouseover.jsp",nt(-1,0,j));F.bind("mouseover.jsp",nt(1,0,F))}tt(P,s.horizontalArrowPositions,j,F)}x.hover(function(){x.addClass("jspHover")},function(){x.removeClass("jspHover")}).bind("mousedown.jsp",function(t){e("html").bind("dragstart.jsp selectstart.jsp",St);x.addClass("jspActive");var n=t.pageX-x.position().left;e("html").bind("mousemove.jsp",function(e){ft(e.pageX-n,!1)}).bind("mouseup.jsp mouseleave.jsp",ot);return!1});H=h.innerWidth();Z()}}function Z(){h.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){H-=e(this).outerWidth()});P.width(H+"px");N=0}function et(){if(y&&g){var t=P.outerHeight(),n=k.outerWidth();A-=t;e(D).find(">.jspCap:visible,>.jspArrow").each(function(){H+=e(this).outerWidth()});H-=n;l-=n;f-=t;P.parent().append(e('<div class="jspCorner" />').css("width",t+"px"));G();Z()}y&&u.width(h.outerWidth()-R+"px");d=u.outerHeight();m=d/l;if(y){B=Math.ceil(1/v*H);B>s.horizontalDragMaxWidth?B=s.horizontalDragMaxWidth:B<s.horizontalDragMinWidth&&(B=s.horizontalDragMinWidth);x.width(B+"px");T=H-B;lt(N)}if(g){O=Math.ceil(1/m*A);O>s.verticalDragMaxHeight?O=s.verticalDragMaxHeight:O<s.verticalDragMinHeight&&(O=s.verticalDragMinHeight);w.height(O+"px");E=A-O;at(S)}}function tt(e,t,n,r){var i="before",s="after",o;t=="os"&&(t=/Mac/.test(navigator.platform)?"after":"split");if(t==i)s=t;else if(t==s){i=t;o=n;n=r;r=o}e[i](n)[s](r)}function nt(e,t,n){return function(){rt(e,t,this,n);this.blur();return!1}}function rt(t,n,r,i){r=e(r).addClass("jspActive");var u,a,f=!0,l=function(){t!==0&&o.scrollByX(t*s.arrowButtonSpeed);n!==0&&o.scrollByY(n*s.arrowButtonSpeed);a=setTimeout(l,f?s.initialDelay:s.arrowRepeatFreq);f=!1};l();u=i?"mouseout.jsp":"mouseup.jsp";i=i||e("html");i.bind(u,function(){r.removeClass("jspActive");a&&clearTimeout(a);a=null;i.unbind(u)})}function it(){st();g&&k.bind("mousedown.jsp",function(t){if(t.originalTarget===n||t.originalTarget==t.currentTarget){var r=e(this),i=r.offset(),u=t.pageY-i.top-S,a,f=!0,h=function(){var e=r.offset(),n=t.pageY-e.top-O/2,i=l*s.scrollPagePercent,c=E*i/(d-l);if(u<0)S-c>n?o.scrollByY(-i):ut(n);else{if(!(u>0)){p();return}S+c<n?o.scrollByY(i):ut(n)}a=setTimeout(h,f?s.initialDelay:s.trackClickRepeatFreq);f=!1},p=function(){a&&clearTimeout(a);a=null;e(document).unbind("mouseup.jsp",p)};h();e(document).bind("mouseup.jsp",p);return!1}});y&&P.bind("mousedown.jsp",function(t){if(t.originalTarget===n||t.originalTarget==t.currentTarget){var r=e(this),i=r.offset(),u=t.pageX-i.left-N,a,l=!0,h=function(){var e=r.offset(),n=t.pageX-e.left-B/2,i=f*s.scrollPagePercent,c=T*i/(p-f);if(u<0)N-c>n?o.scrollByX(-i):ft(n);else{if(!(u>0)){d();return}N+c<n?o.scrollByX(i):ft(n)}a=setTimeout(h,l?s.initialDelay:s.trackClickRepeatFreq);l=!1},d=function(){a&&clearTimeout(a);a=null;e(document).unbind("mouseup.jsp",d)};h();e(document).bind("mouseup.jsp",d);return!1}})}function st(){P&&P.unbind("mousedown.jsp");k&&k.unbind("mousedown.jsp")}function ot(){e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");w&&w.removeClass("jspActive");x&&x.removeClass("jspActive")}function ut(e,t){if(!g)return;e<0?e=0:e>E&&(e=E);t===n&&(t=s.animateScroll);if(t)o.animate(w,"top",e,at);else{w.css("top",e);at(e)}}function at(e){e===n&&(e=w.position().top);h.scrollTop(0);S=e;var t=S===0,i=S==E,s=e/E,o=-s*(d-l);if(z!=t||X!=i){z=t;X=i;r.trigger("jsp-arrow-change",[z,X,W,V])}ct(t,i);u.css("top",o);r.trigger("jsp-scroll-y",[-o,t,i]).trigger("scroll")}function ft(e,t){if(!y)return;e<0?e=0:e>T&&(e=T);t===n&&(t=s.animateScroll);if(t)o.animate(x,"left",e,lt);else{x.css("left",e);lt(e)}}function lt(e){e===n&&(e=x.position().left);h.scrollTop(0);N=e;var t=N===0,i=N==T,s=e/T,o=-s*(p-f);if(W!=t||V!=i){W=t;V=i;r.trigger("jsp-arrow-change",[z,X,W,V])}ht(t,i);u.css("left",o);r.trigger("jsp-scroll-x",[-o,t,i]).trigger("scroll")}function ct(e,t){if(s.showArrows){M[e?"addClass":"removeClass"]("jspDisabled");_[t?"addClass":"removeClass"]("jspDisabled")}}function ht(e,t){if(s.showArrows){j[e?"addClass":"removeClass"]("jspDisabled");F[t?"addClass":"removeClass"]("jspDisabled")}}function pt(e,t){var n=e/(d-l);ut(n*E,t)}function dt(e,t){var n=e/(p-f);ft(n*T,t)}function vt(t,n,r){var i,o,u,a=0,c=0,p,d,v,m,g,y;try{i=e(t)}catch(w){return}o=i.outerHeight();u=i.outerWidth();h.scrollTop(0);h.scrollLeft(0);while(!i.is(".jspPane")){a+=i.position().top;c+=i.position().left;i=i.offsetParent();if(/^body|html$/i.test(i[0].nodeName))return}p=gt();v=p+l;a<p||n?g=a-s.verticalGutter:a+o>v&&(g=a-l+o+s.verticalGutter);g&&pt(g,r);d=mt();m=d+f;c<d||n?y=c-s.horizontalGutter:c+u>m&&(y=c-f+u+s.horizontalGutter);y&&dt(y,r)}function mt(){return-u.position().left}function gt(){return-u.position().top}function yt(){var e=d-l;return e>20&&e-gt()<10}function bt(){var e=p-f;return e>20&&e-mt()<10}function wt(){h.unbind(J).bind(J,function(e,t,n,r){var i=N,u=S;o.scrollBy(n*s.mouseWheelSpeed,-r*s.mouseWheelSpeed,!1);return i==N&&u==S})}function Et(){h.unbind(J)}function St(){return!1}function xt(){u.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(e){vt(e.target,!1)})}function Tt(){u.find(":input,a").unbind("focus.jsp")}function Nt(){function a(){var e=N,r=S;switch(t){case 40:o.scrollByY(s.keyboardSpeed,!1);break;case 38:o.scrollByY(-s.keyboardSpeed,!1);break;case 34:case 32:o.scrollByY(l*s.scrollPagePercent,!1);break;case 33:o.scrollByY(-l*s.scrollPagePercent,!1);break;case 39:o.scrollByX(s.keyboardSpeed,!1);break;case 37:o.scrollByX(-s.keyboardSpeed,!1)}n=e!=N||r!=S;return n}var t,n,i=[];y&&i.push(D[0]);g&&i.push(C[0]);u.focus(function(){r.focus()});r.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(r){if(r.target!==this&&(!i.length||!e(r.target).closest(i).length))return;var s=N,o=S;switch(r.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:t=r.keyCode;a();break;case 35:pt(d-l);t=null;break;case 36:pt(0);t=null}n=r.keyCode==t&&s!=N||o!=S;return!n}).bind("keypress.jsp",function(e){e.keyCode==t&&a();return!n});if(s.hideFocus){r.css("outline","none");"hideFocus"in h[0]&&r.attr("hideFocus",!0)}else{r.css("outline","");"hideFocus"in h[0]&&r.attr("hideFocus",!1)}}function Ct(){r.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function kt(){if(location.hash&&location.hash.length>1){var t,n,r=escape(location.hash.substr(1));try{t=e("#"+r+', a[name="'+r+'"]')}catch(i){return}if(t.length&&u.find(r))if(h.scrollTop()===0)n=setInterval(function(){if(h.scrollTop()>0){vt(t,!0);e(document).scrollTop(h.position().top);clearInterval(n)}},50);else{vt(t,!0);e(document).scrollTop(h.position().top)}}}function Lt(){if(e(document.body).data("jspHijack"))return;e(document.body).data("jspHijack",!0);e(document.body).delegate("a[href*=#]","click",function(n){var r=this.href.substr(0,this.href.indexOf("#")),i=location.href,s,o,u,f,l,c;location.href.indexOf("#")!==-1&&(i=location.href.substr(0,location.href.indexOf("#")));if(r!==i)return;s=escape(this.href.substr(this.href.indexOf("#")+1));o;try{o=e("#"+s+', a[name="'+s+'"]')}catch(h){return}if(!o.length)return;u=o.closest(".jspScrollable");f=u.data("jsp");f.scrollToElement(o,!0);if(u[0].scrollIntoView){l=e(t).scrollTop();c=o.offset().top;(c<l||c>l+e(t).height())&&u[0].scrollIntoView()}n.preventDefault()})}function At(){var e,t,n,r,i,s=!1;h.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(o){var u=o.originalEvent.touches[0];e=mt();t=gt();n=u.pageX;r=u.pageY;i=!1;s=!0}).bind("touchmove.jsp",function(u){if(!s)return;var a=u.originalEvent.touches[0],f=N,l=S;o.scrollTo(e+n-a.pageX,t+r-a.pageY);i=i||Math.abs(n-a.pageX)>5||Math.abs(r-a.pageY)>5;return f==N&&l==S}).bind("touchend.jsp",function(e){s=!1}).bind("click.jsp-touchclick",function(e){if(i){i=!1;return!1}})}function Ot(){var e=gt(),t=mt();r.removeClass("jspScrollable").unbind(".jsp");r.replaceWith($.append(u.children()));$.scrollTop(e);$.scrollLeft(t);I&&clearInterval(I)}var s,o=this,u,f,l,h,p,d,v,m,g,y,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z=!0,W=!0,X=!1,V=!1,$=r.clone(!1,!1).empty(),J=e.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";q=r.css("paddingTop")+" "+r.css("paddingRight")+" "+r.css("paddingBottom")+" "+r.css("paddingLeft");R=(parseInt(r.css("paddingLeft"),10)||0)+(parseInt(r.css("paddingRight"),10)||0);e.extend(o,{reinitialise:function(t){t=e.extend({},s,t);K(t)},scrollToElement:function(e,t,n){vt(e,t,n)},scrollTo:function(e,t,n){dt(e,n);pt(t,n)},scrollToX:function(e,t){dt(e,t)},scrollToY:function(e,t){pt(e,t)},scrollToPercentX:function(e,t){dt(e*(p-f),t)},scrollToPercentY:function(e,t){pt(e*(d-l),t)},scrollBy:function(e,t,n){o.scrollByX(e,n);o.scrollByY(t,n)},scrollByX:function(e,t){var n=mt()+Math[e<0?"floor":"ceil"](e),r=n/(p-f);ft(r*T,t)},scrollByY:function(e,t){var n=gt()+Math[e<0?"floor":"ceil"](e),r=n/(d-l);ut(r*E,t)},positionDragX:function(e,t){ft(e,t)},positionDragY:function(e,t){ut(e,t)},animate:function(e,t,n,r){var i={};i[t]=n;e.animate(i,{duration:s.animateDuration,easing:s.animateEase,queue:!1,step:r})},getContentPositionX:function(){return mt()},getContentPositionY:function(){return gt()},getContentWidth:function(){return p},getContentHeight:function(){return d},getPercentScrolledX:function(){return mt()/(p-f)},getPercentScrolledY:function(){return gt()/(d-l)},getIsScrollableH:function(){return y},getIsScrollableV:function(){return g},getContentPane:function(){return u},scrollToBottom:function(e){ut(E,e)},hijackInternalLinks:e.noop,destroy:function(){Ot()}});K(i)}r=e.extend({},e.fn.jScrollPane.defaults,r);e.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){r[this]=r[this]||r.speed});return this.each(function(){var t=e(this),n=t.data("jsp");if(n)n.reinitialise(r);else{e("script",t).filter('[type="text/javascript"],:not([type])').remove();n=new i(t,r);t.data("jsp",n)}})};e.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:n,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}})(jQuery,this);