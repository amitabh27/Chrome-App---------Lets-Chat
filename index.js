 console.log('I am BG');
 document.addEventListener('DOMContentLoaded', function() {
 
 var checkPageButton = document.getElementById('messenger');
 console.log('dom loaded');
 checkPageButton.addEventListener('click', function() {

		console.log('dom loaded');
		var ele=document.getElementById('page-wrapper');
		ele.innerHTML = '<webview id="MESSENGER" partition="persist:googlepluswidgets1" src="https://www.messenger.com/login/" autosize="on" minwidth="880" minheight="640" style="width:880px; height:640px"></webview>';
		  
		  document.getElementById("MESSENGER").addEventListener("loadstop", function() {
			console.log("External window webview content loaded...");
			document.getElementById("MESSENGER").executeScript({code:"document.getElementsByClassName('_210n')[0].remove();"});
			console.log("External window webview content loaded...2");
			});
		  
		  
		  }, false);
		  
 var checkPageButton = document.getElementById('whatsapp');
 console.log('dom loaded');
 checkPageButton.addEventListener('click', function() {

		console.log('dom loaded');
		var ele=document.getElementById('page-wrapper');
		ele.innerHTML = '<webview id="WHATSAPP" partition="persist:googlepluswidgets2" src="https://web.whatsapp.com/" autosize="on" minwidth="880" minheight="640" style="width:880px; height:640px"></webview>';
		 
		document.getElementById("WHATSAPP").addEventListener("loadstop", function() {
			console.log("External window webview content loaded...");
			document.getElementById("WHATSAPP").executeScript({code:"document.getElementById('platforms').remove();"});
			console.log("External window webview content loaded...2");
			});

		 }, false);

 var checkPageButton = document.getElementById('hangouts');
 console.log('dom loaded');
 checkPageButton.addEventListener('click', function() {

		console.log('dom loaded');
		var ele=document.getElementById('page-wrapper');
		ele.innerHTML = '<webview partition="persist:googlepluswidgets3" src="https://accounts.google.com/ServiceLogin?service=talk&passive=1209600&continue=https://hangouts.google.com/&followup=https://hangouts.google.com/" autosize="on" minwidth="880" minheight="640" style="width:880px; height:640px"></webview>';
		  }, false);
		  
 var checkPageButton = document.getElementById('skype');
 console.log('dom loaded');
 checkPageButton.addEventListener('click', function() {

		console.log('dom loaded');
		var ele=document.getElementById('page-wrapper');
		ele.innerHTML = '<webview partition="persist:googlepluswidgets4" src="https://web.skype.com/en/" autosize="on" minwidth="880" minheight="640" style="width:880px; height:640px"></webview>';
 
		  }, false);
		  
 var checkPageButton = document.getElementById('telegram');
 console.log('dom loaded');
 checkPageButton.addEventListener('click', function() {

		console.log('dom loaded');
		var ele=document.getElementById('page-wrapper');
		if(ele.innerHTML !== null)
		ele.innerHTML = '<webview partition="persist:googlepluswidgets5" src="https://web.telegram.org" autosize="on" minwidth="880" minheight="640" style="width:880px; height:640px"></webview>';
		  }, false);
		  
 var checkPageButton = document.getElementById('wechat');
 console.log('dom loaded');
 checkPageButton.addEventListener('click', function() {

		console.log('dom loaded');
		var ele=document.getElementById('page-wrapper');
		ele.innerHTML = '<webview partition="persist:googlepluswidgets6" src="https://web.wechat.com/" autosize="on" minwidth="880" minheight="640" style="width:880px; height:640px"></webview>';
		  }, false);
		  
 var checkPageButton = document.getElementById('linkedin');
 console.log('dom loaded');
 checkPageButton.addEventListener('click', function() {

		console.log('dom loaded');
		var ele=document.getElementById('page-wrapper');
		ele.innerHTML = '<webview id="LINKEDIN" partition="persist:googlepluswidgets7" src="https://www.linkedin.com/messaging/" autosize="on" minwidth="880" minheight="640" style="width:880px; height:640px"></webview>'
			
			
			document.getElementById("LINKEDIN").addEventListener("loadstop", function() {
			console.log("External window webview content loaded...");
			document.getElementById("LINKEDIN").executeScript({code:"document.getElementById('layout-header').remove();"});
			document.getElementById("LINKEDIN").executeScript({code:"document.getElementById('inbox-ads-module').remove();"});
			document.getElementById("LINKEDIN").executeScript({code:"document.getElementById('sidebar-footer').remove();"});
			document.getElementById("LINKEDIN").executeScript({code:"document.getElementsByTagName('iframe')[1].remove();"});
			
			console.log("External window webview content loaded...2");
			});
			
		  }, false);
		  
 
 var checkPageButton = document.getElementById('twitter');
 console.log('dom loaded');
 checkPageButton.addEventListener('click', function() {

		console.log('dom loaded');
		var ele=document.getElementById('page-wrapper');
		ele.innerHTML = '<webview partition="persist:googlepluswidgets8" src="https://mobile.twitter.com/session/new" autosize="on" minwidth="880" minheight="640" style="width:880px; height:640px"></webview>';
		  }, false);
		  


		  
 }, false);