$(document).ready(function() {
    $('#navbarDropdownWindows7').on("click", function() {
      $('#Windows7Dropdown').slideToggle(300, "linear");
    });
    
    $('#Windows7Dropdown').mouseleave(function(e) {
      e.stopPropagation();
      e.preventDefault();

      $(this).slideToggle(150, "linear");
    }); 

    $('#navbarDropdownWindows10').on("click", function() {
        $('#Windows10Dropdown').slideToggle(300, "linear");
      });
    
    $('#Windows10Dropdown').mouseleave(function(e) {
      e.stopPropagation();
      e.preventDefault();
      
      $(this).slideToggle(150, "linear");
    });

    $('.dropright button').mouseenter(function(e) {
        e.stopPropagation();
        e.preventDefault();
		$('.dropright button').next('div').removeClass('show');
        if (!$(this).next('div').hasClass('show')) {
          $(this).next('div').addClass('show');
        } else {
          $(this).next('div').removeClass('show');
        }
    });
	
	// Επιστρέφει στην αρχική σελίδα μόλις πατιέται το Software Setup
	$('#homepagelogo').on("click", function(){
		clearTitleList();
		//$('#breadcrumb').append("<h2> Home </h2>");
	});
	

});

$(document).ready(function() {
	//$('#breadcrumb').append("<h2> Home </h2>");
	//Main Directory Setups
	basePathSetups = "setups/";
	bit32Path = "32-bit/";
	bit64Path = "64-bit/";

	//Main Directory Photos
	basePathPhotos = "photos/";

	//Setups των εφαρμογών 

	//.net framework
	var pathNetFramework = "ChromeSetup.exe"; //Setup name
	var netFrameworkImg = "net_framework.png"; //Photo name
	var netFrameworkdDesc = ".Net Framework"; //Description name

	//Driverpack 
	var pathDriverpack = "ChromeSetup.exe";
	var driverpackImg = "Driver_pack_solution.jpg";
	var driverpackDesc = "Driverpack Solution";

	//Greek Language
	var pathGreekLanguage = "ChromeSetup.exe";
	var greekLanguageImg = "greek_language.png";
	var greekLanguageDesc = "Windows Greek Language";

	//KMSpico
	var pathKmspico = "ChromeSetup.exe";
	var kmspicoImg = "km_spico.png";
	var kmspicoDesc = "KMSpico";

	//Chrome
	var pathChrome = "ChromeSetup.exe";
	var chromeSetupImg = "chrome.jpg";
	var chromeDesc = "Chrome Browser";

	//VLC
	var pathVLC = "ChromeSetup.exe";
	var vlcImg = "vlc.jpg";
	var vlcDesc = "VLC Media Player";

	//Winrar
	var pathWinrar = "ChromeSetup.exe";
	var winrarImg = "winrar.jpg";
	var winrarDesc = "Winrar";

	//ESET ANTIVIRUS
	var pathEset = "ChromeSetup.exe";
	var esetImg = "eset.jpg";
	var esetDesc = "Eset Smart Security Antivirus";

	//Radmin
	var pathRadmin = "ChromeSetup.exe";
	var radminImg = "radmin.jpg";
	var radminDesc = "Radmin";

	//Radmin Crack
	var pathRadminCrack = "ChromeSetup.exe";
	var radmincrackImg = "radmin_crack.png";
	var radminCrackDesc = "Radmin Crack";

	//Office
	var pathOffice = "ChromeSetup.exe";
	var officeImg = "office.png";
	var officeDesc = "Microsoft Office";
	
	//Office Greek
	var pathOfficeGreek = "ChromeSetup.exe";
	var officeGreekImg = "officeGreek.png";
	var officeGreekDesc = "Microsoft Office Greek";

	//Firefox
	var pathFirefox = "ChromeSetup.exe";
	var firefoxImg = "firefox.jpg";
	var firefoxDesc = "Firefox";
	
	//Acrobat Adobe
	var pathAcrobat = "ChromeSetup.exe";
	var AcrobatImg = "acrobat.jpg";
	var AcrobatDesc = "Adobe Acrobat";

	//Nitro
	var pathNitro = "ChromeSetup.exe";
	var nitroImg = "nitro.png";
	var nitroDesc = "Nitro PDF";

	//Nitro Keygen
	var pathNitroKeygen = "ChromeSetup.exe";
	var nitroKeygenImg = "nitro_keygen.jpg";
	var nitroKeygenDesc = "Nitro Keygen";
		
	//windows server activator
	var pathActivator = "ChromeSetup.exe";
	var activatorImg = "unlocked.png";
	var activatorDesc = "Windows Server Activator";
	
	
	var successImg = "nitro_keygen.jpg";
		
    $('.dropdown-item').on("click", function() {
        //Καθαρίζουμε την λίστα πριν την ξαναγεμίσουμε 
       // clearTitleList();
		
        //TODO: ALLAXE TA PATHS TWN EXE 
        if ($(this).is('#Windows7_32bit')){
			clearTitleList();
			$('#breadcrumb').append("<h2>Windows 7 Domain - 32bit </h2>");
            $('#Programs').append("<div class='\container fadeIn'\><ul class='\list-group list-group-horizontal row'\>" +
            "<li class=\'list-group-item\ id=\'overlay\'><a href=\'" + basePathSetups + bit32Path + pathNetFramework + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + netFrameworkImg + "\'></img></div><div class=\'descr\'>" + netFrameworkdDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathDriverpack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + driverpackImg + "\'></img></div><div class=\'descr\'>" + driverpackDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathGreekLanguage + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + greekLanguageImg + "\'></img></div><div class=\'descr\'>" + greekLanguageDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathOffice + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeImg + "\'></img></div><div class=\'descr\'>" + officeDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathOfficeGreek + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeGreekImg + "\'></img></div><div class=\'descr\'>" + officeGreekDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathKmspico + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + kmspicoImg + "\'></img></div><div class=\'descr\'>" + kmspicoDesc + "</div></a></li>" +  
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathVLC + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + vlcImg + "\'></img></div><div class=\'descr\'>" + vlcDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathWinrar + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + winrarImg + "\'></img></div><div class=\'descr\'>" + winrarDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathEset + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + esetImg + "\'></img></div><div class=\'descr\'>" + esetDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathRadmin + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + radminImg + "\'></img></div><div class=\'descr\'>" + radminDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathRadminCrack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + radmincrackImg + "\'></img></div><div class=\'descr\'>" + radminCrackDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathFirefox + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + firefoxImg + "\'></img></div><div class=\'descr\'>" + firefoxDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathAcrobat + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + AcrobatImg + "\'></img></div><div class=\'descr\'>" + AcrobatDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathNitro + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroImg + "\'></img></div><div class=\'descr\'>" + nitroDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroKeygenImg + "\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"<li class=\'list-group-item hidden-check-element\'><a href=\'" + basePathSetups + bit32Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'photos/checktransparent.png\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"</ul></div>");   

            $('.list-group-item a').on("click", function(e) {
              //$(this).css('opacity' , '0.1');
              $(this).first().append("<div class=\'downloaded\'><img src=\'"+ 'photos/checktransparent.png' + "\'></img></div>");
              $(this).parent().css('pointer-events', 'none');
            });
           
        }else if($(this).is('#Windows7_64bit')){
			clearTitleList();
			$('#breadcrumb').append("<h2>Windows 7 Domain - 64bit </h2>");
			$('#Programs').append("<div class='\container fadeIn'\><ul class='\list-group list-group-horizontal row'\>" +
            "<li class=\'list-group-item\ id=\'overlay\'><a href=\'" + basePathSetups + bit64Path + pathNetFramework + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + netFrameworkImg + "\'></img></div><div class=\'descr\'>" + netFrameworkdDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathDriverpack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + driverpackImg + "\'></img></div><div class=\'descr\'>" + driverpackDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathGreekLanguage + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + greekLanguageImg + "\'></img></div><div class=\'descr\'>" + greekLanguageDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathOffice + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeImg + "\'></img></div><div class=\'descr\'>" + officeDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathOfficeGreek + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeGreekImg + "\'></img></div><div class=\'descr\'>" + officeGreekDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathKmspico + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + kmspicoImg + "\'></img></div><div class=\'descr\'>" + kmspicoDesc + "</div></a></li>" +  
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathVLC + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + vlcImg + "\'></img></div><div class=\'descr\'>" + vlcDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathWinrar + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + winrarImg + "\'></img></div><div class=\'descr\'>" + winrarDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathEset + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + esetImg + "\'></img></div><div class=\'descr\'>" + esetDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathRadmin + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + radminImg + "\'></img></div><div class=\'descr\'>" + radminDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathRadminCrack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + radmincrackImg + "\'></img></div><div class=\'descr\'>" + radminCrackDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathFirefox + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + firefoxImg + "\'></img></div><div class=\'descr\'>" + firefoxDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathAcrobat + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + AcrobatImg + "\'></img></div><div class=\'descr\'>" + AcrobatDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathNitro + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroImg + "\'></img></div><div class=\'descr\'>" + nitroDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroKeygenImg + "\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"<li class=\'list-group-item hidden-check-element\'><a href=\'" + basePathSetups + bit64Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'photos/checktransparent.png\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"</ul></div>");   

			
		}else if($(this).is('#Windows7_32bit_standAlone')){
			clearTitleList();
			$('#breadcrumb').append("<h2>Windows 7 - 32bit </h2>");
            $('#Programs').append("<div class='\container fadeIn'\><ul class='\list-group list-group-horizontal row'\>" +
            "<li class=\'list-group-item\ id=\'overlay\'><a href=\'" + basePathSetups + bit32Path + pathNetFramework + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + netFrameworkImg + "\'></img></div><div class=\'descr\'>" + netFrameworkdDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathDriverpack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + driverpackImg + "\'></img></div><div class=\'descr\'>" + driverpackDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathGreekLanguage + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + greekLanguageImg + "\'></img></div><div class=\'descr\'>" + greekLanguageDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathOffice + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeImg + "\'></img></div><div class=\'descr\'>" + officeDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathOfficeGreek + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeGreekImg + "\'></img></div><div class=\'descr\'>" + officeGreekDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathKmspico + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + kmspicoImg + "\'></img></div><div class=\'descr\'>" + kmspicoDesc + "</div></a></li>" +  
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathVLC + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + vlcImg + "\'></img></div><div class=\'descr\'>" + vlcDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathWinrar + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + winrarImg + "\'></img></div><div class=\'descr\'>" + winrarDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathFirefox + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + firefoxImg + "\'></img></div><div class=\'descr\'>" + firefoxDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathAcrobat + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + AcrobatImg + "\'></img></div><div class=\'descr\'>" + AcrobatDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathNitro + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroImg + "\'></img></div><div class=\'descr\'>" + nitroDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroKeygenImg + "\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"<li class=\'list-group-item hidden-check-element\'><a href=\'" + basePathSetups + bit32Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'photos/checktransparent.png\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"</ul></div>");   

			
		}else if($(this).is('#Windows7_64bit_standAlone')){
			clearTitleList();
			$('#breadcrumb').append("<h2>Windows 7 - 64bit </h2>");
			$('#Programs').append("<div class='\container fadeIn'\><ul class='\list-group list-group-horizontal row'\>" +
            "<li class=\'list-group-item\ id=\'overlay\'><a href=\'" + basePathSetups + bit64Path + pathNetFramework + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + netFrameworkImg + "\'></img></div><div class=\'descr\'>" + netFrameworkdDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathDriverpack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + driverpackImg + "\'></img></div><div class=\'descr\'>" + driverpackDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathGreekLanguage + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + greekLanguageImg + "\'></img></div><div class=\'descr\'>" + greekLanguageDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathOffice + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeImg + "\'></img></div><div class=\'descr\'>" + officeDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathOfficeGreek + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeGreekImg + "\'></img></div><div class=\'descr\'>" + officeGreekDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathKmspico + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + kmspicoImg + "\'></img></div><div class=\'descr\'>" + kmspicoDesc + "</div></a></li>" +  
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathVLC + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + vlcImg + "\'></img></div><div class=\'descr\'>" + vlcDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathWinrar + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + winrarImg + "\'></img></div><div class=\'descr\'>" + winrarDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathFirefox + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + firefoxImg + "\'></img></div><div class=\'descr\'>" + firefoxDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathAcrobat + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + AcrobatImg + "\'></img></div><div class=\'descr\'>" + AcrobatDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathNitro + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroImg + "\'></img></div><div class=\'descr\'>" + nitroDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroKeygenImg + "\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"<li class=\'list-group-item hidden-check-element\'><a href=\'" + basePathSetups + bit64Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'photos/checktransparent.png\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"</ul></div>");   

			
		}else if($(this).is('#Windows10_32bit')){
			clearTitleList();
			$('#breadcrumb').append("<h2>Windows 10 Domain - 32bit </h2>");
            $('#Programs').append("<div class='\container fadeIn'\><ul class='\list-group list-group-horizontal row'\>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathDriverpack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + driverpackImg + "\'></img></div><div class=\'descr\'>" + driverpackDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathOffice + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeImg + "\'></img></div><div class=\'descr\'>" + officeDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathOfficeGreek + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeGreekImg + "\'></img></div><div class=\'descr\'>" + officeGreekDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathKmspico + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + kmspicoImg + "\'></img></div><div class=\'descr\'>" + kmspicoDesc + "</div></a></li>" +  
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathChrome + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + chromeSetupImg + "\'></img></div><div class=\'descr\'>" + chromeDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathVLC + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + vlcImg + "\'></img></div><div class=\'descr\'>" + vlcDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathWinrar + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + winrarImg + "\'></img></div><div class=\'descr\'>" + winrarDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathEset + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + esetImg + "\'></img></div><div class=\'descr\'>" + esetDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathRadmin + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + radminImg + "\'></img></div><div class=\'descr\'>" + radminDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathRadminCrack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + radmincrackImg + "\'></img></div><div class=\'descr\'>" + radminCrackDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathFirefox + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + firefoxImg + "\'></img></div><div class=\'descr\'>" + firefoxDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathAcrobat + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + AcrobatImg + "\'></img></div><div class=\'descr\'>" + AcrobatDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathNitro + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroImg + "\'></img></div><div class=\'descr\'>" + nitroDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroKeygenImg + "\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"<li class=\'list-group-item hidden-check-element\'><a href=\'" + basePathSetups + bit32Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'photos/checktransparent.png\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"</ul></div>");   
		}else if($(this).is('#Windows10_64bit')){
			clearTitleList();
			$('#breadcrumb').append("<h2>Windows 10 Domain - 64bit </h2>");
            $('#Programs').append("<div class='\container fadeIn'\><ul class='\list-group list-group-horizontal row'\>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathDriverpack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + driverpackImg + "\'></img></div><div class=\'descr\'>" + driverpackDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathOffice + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeImg + "\'></img></div><div class=\'descr\'>" + officeDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathOfficeGreek + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeGreekImg + "\'></img></div><div class=\'descr\'>" + officeGreekDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathKmspico + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + kmspicoImg + "\'></img></div><div class=\'descr\'>" + kmspicoDesc + "</div></a></li>" +  
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathChrome + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + chromeSetupImg + "\'></img></div><div class=\'descr\'>" + chromeDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathVLC + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + vlcImg + "\'></img></div><div class=\'descr\'>" + vlcDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathWinrar + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + winrarImg + "\'></img></div><div class=\'descr\'>" + winrarDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathEset + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + esetImg + "\'></img></div><div class=\'descr\'>" + esetDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathRadmin + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + radminImg + "\'></img></div><div class=\'descr\'>" + radminDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathRadminCrack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + radmincrackImg + "\'></img></div><div class=\'descr\'>" + radminCrackDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathFirefox + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + firefoxImg + "\'></img></div><div class=\'descr\'>" + firefoxDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathAcrobat + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + AcrobatImg + "\'></img></div><div class=\'descr\'>" + AcrobatDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathNitro + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroImg + "\'></img></div><div class=\'descr\'>" + nitroDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroKeygenImg + "\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"<li class=\'list-group-item hidden-check-element\'><a href=\'" + basePathSetups + bit64Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'photos/checktransparent.png\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"</ul></div>");
		}else if($(this).is('#Windows10_32bit_standAlone')){
			clearTitleList();
			$('#breadcrumb').append("<h2>Windows 10 - 32bit </h2>");
            $('#Programs').append("<div class='\container fadeIn'\><ul class='\list-group list-group-horizontal row'\>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathDriverpack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + driverpackImg + "\'></img></div><div class=\'descr\'>" + driverpackDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathOffice + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeImg + "\'></img></div><div class=\'descr\'>" + officeDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathOfficeGreek + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeGreekImg + "\'></img></div><div class=\'descr\'>" + officeGreekDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathKmspico + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + kmspicoImg + "\'></img></div><div class=\'descr\'>" + kmspicoDesc + "</div></a></li>" +  
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathChrome + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + chromeSetupImg + "\'></img></div><div class=\'descr\'>" + chromeDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathVLC + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + vlcImg + "\'></img></div><div class=\'descr\'>" + vlcDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathWinrar + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + winrarImg + "\'></img></div><div class=\'descr\'>" + winrarDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathFirefox + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + firefoxImg + "\'></img></div><div class=\'descr\'>" + firefoxDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathAcrobat + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + AcrobatImg + "\'></img></div><div class=\'descr\'>" + AcrobatDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathNitro + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroImg + "\'></img></div><div class=\'descr\'>" + nitroDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroKeygenImg + "\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"<li class=\'list-group-item hidden-check-element\'><a href=\'" + basePathSetups + bit32Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'photos/checktransparent.png\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"</ul></div>"); 
		}else if($(this).is('#Windows10_64bit_standAlone')){
			clearTitleList();
			$('#breadcrumb').append("<h2>Windows 10 - 64bit </h2>");
            $('#Programs').append("<div class='\container fadeIn'\><ul class='\list-group list-group-horizontal row'\>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathDriverpack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + driverpackImg + "\'></img></div><div class=\'descr\'>" + driverpackDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathOffice + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeImg + "\'></img></div><div class=\'descr\'>" + officeDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathOfficeGreek + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeGreekImg + "\'></img></div><div class=\'descr\'>" + officeGreekDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathKmspico + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + kmspicoImg + "\'></img></div><div class=\'descr\'>" + kmspicoDesc + "</div></a></li>" +  
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathChrome + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + chromeSetupImg + "\'></img></div><div class=\'descr\'>" + chromeDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathVLC + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + vlcImg + "\'></img></div><div class=\'descr\'>" + vlcDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathWinrar + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + winrarImg + "\'></img></div><div class=\'descr\'>" + winrarDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathFirefox + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + firefoxImg + "\'></img></div><div class=\'descr\'>" + firefoxDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathAcrobat + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + AcrobatImg + "\'></img></div><div class=\'descr\'>" + AcrobatDesc + "</div></a></li>" +
			"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathNitro + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroImg + "\'></img></div><div class=\'descr\'>" + nitroDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroKeygenImg + "\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"<li class=\'list-group-item hidden-check-element\'><a href=\'" + basePathSetups + bit64Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'photos/checktransparent.png\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"</ul></div>");
		}else{
            $('#Programs').empty();
        }
		
		$('.list-group-item a').on("click", function(e) {
            //$(this).css('opacity' , '0.1');
            $(this).first().append("<div class=\'downloaded\'><img src=\'"+ 'photos/checktransparent.png' + "\'></img></div>");
            $(this).parent().css('pointer-events', 'none');
        });		
    });
	
	$('#WindowsServer').on("click", function() {
		clearTitleList();
		$('#breadcrumb').append("<h2>Windows Server</h2>");
		$('#Programs').append("<div class=\'container fadeIn\'><ul class=\'list-group list-group-horizontal row\'>" +
		"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathDriverpack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + driverpackImg + "\'></img></div><div class=\'descr\'>" + driverpackDesc + "</div></a></li>" +
		"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathActivator + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + activatorImg + "\'></img></div><div class=\'descr\'>" + activatorDesc + "</div></a></li>" +		
		"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathWinrar + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + winrarImg + "\'></img></div><div class=\'descr\'>" + winrarDesc + "</div></a></li>" +
		"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathFirefox + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + firefoxImg + "\'></img></div><div class=\'descr\'>" + firefoxDesc + "</div></a></li>" +
        "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit64Path + pathRadmin + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + radminImg + "\'></img></div><div class=\'descr\'>" + radminDesc + "</div></a></li>" +		
		"<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathEset + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + esetImg + "\'></img></div><div class=\'descr\'>" + esetDesc + "</div></a></li>" +
		"<li class=\'list-group-item hidden-check-element\'><a href=\'" + basePathSetups + bit64Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'photos/checktransparent.png\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
		"</ul></div>");
		
		$('.list-group-item a').on("click", function(e) {
            //$(this).css('opacity' , '0.1');
            $(this).first().append("<div class=\'downloaded\'><img src=\'"+ 'photos/checktransparent.png' + "\'></img></div>");
            $(this).parent().css('pointer-events', 'none');
        });		
	});	

    //Radmin Viewer + crack
    var pathRadminViewer = "ChromeSetup.exe";
    var radminViewerImg = "radminviewer.png";
    var radminViewerDesc = "Radmin Viewer";

    //Adobe Photoshop 
    var pathAdobePhotoshop = "ChromeSetup.exe";
    var adobePhotoshopImg = "adobephotoshop.jpg";
    var adobePhotoshopDesc = "Adobe Photoshop";

    //Abby + crack
    var pathAbby = "ChromeSetup.exe";
    var abbyImg = "abby.jpg";
    var abbyDesc = "Abby";
    
    //Filezilla client
    var pathFilezilla = "ChromeSetup.exe";
    var filezillaImg = "filezilla.png";
    var filezillaDesc = "Filezilla Client";

    //Administrator tools
    var pathAdministratorTools = "ChromeSetup.exe";
    var admininstratorToolsImg = "admintools.jpg";
    var admininstratorToolsDesc = "Administrator Tools";

    //Second Copy
    var pathSecondCopy = "ChromeSetup.exe";
    var secondCopyImg = "second_copy.jpg";
    var secondCopyDesc = "Second Copy";

    //Total Network Inventory + Crack
    var pathTotalNetworkInventory = "ChromeSetup.exe";
    var totalNetworkInventoryImg = "total_network_inventory.jpg";
    var totalNetworkInventoryDesc = "Total Network Inventory";    

    //VM Workstation
    var pathvmWorkstation = "ChromeSetup.exe";
    var vmWorkstationImg = "vmworkstation.jpg";
    var vmworkstationDesc = "VM Workstation";


    $('#cis').on("click", function() {
		clearTitleList();
		$('#breadcrumb').append("<h2>CIS Software</h2>");
		$('#Programs').append("<div class='\container fadeIn'\><ul class='\list-group list-group-horizontal row'\>" +
		"<li class=\'list-group-item\'><a href=\'" + basePathSetups + pathRadminViewer + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + radminViewerImg + "\'></img></div><div class=\'descr\'>" + radminViewerDesc + "</div></a></li>" +
		"<li class=\'list-group-item\'><a href=\'" + basePathSetups + pathAdobePhotoshop + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + adobePhotoshopImg + "\'></img></div><div class=\'descr\'>" + adobePhotoshopDesc + "</div></a></li>" +
		"<li class=\'list-group-item\'><a href=\'" + basePathSetups + pathAbby + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + abbyImg + "\'></img></div><div class=\'descr\'>" + abbyDesc + "</div></a></li>" +
		"<li class=\'list-group-item\'><a href=\'" + basePathSetups + pathFilezilla + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + filezillaImg + "\'></img></div><div class=\'descr\'>" + filezillaDesc + "</div></a></li>" +  
		"<li class=\'list-group-item\'><a href=\'" + basePathSetups + pathAdministratorTools + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + admininstratorToolsImg + "\'></img></div><div class=\'descr\'>" + admininstratorToolsDesc + "</div></a></li>" +
		"<li class=\'list-group-item\'><a href=\'" + basePathSetups + pathSecondCopy + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + secondCopyImg + "\'></img></div><div class=\'descr\'>" + secondCopyDesc + "</div></a></li>" +
		"<li class=\'list-group-item\'><a href=\'" + basePathSetups + pathTotalNetworkInventory + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + totalNetworkInventoryImg + "\'></img></div><div class=\'descr\'>" + totalNetworkInventoryDesc + "</div></a></li>" +
		"<li class=\'list-group-item\'><a href=\'" + basePathSetups + pathvmWorkstation + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + vmWorkstationImg + "\'></img></div><div class=\'descr\'>" + vmworkstationDesc + "</div></a></li>" +
		"<li class=\'list-group-item hidden-check-element\'><a href=\'" + basePathSetups + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'photos/checktransparent.png\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
		"</ul></div>");
	});    
});
  

$(document).ready(function(e) {  
  $('.list-group-item a').on("click", function(e) {
    $(this).css('opacity' , '0.5');
  });
});



// Συνάρτηση που καλείται για το άδειασμα της λίστας προγραμμάτων και του τίτλου
function clearTitleList(){
	//Καθαρίζουμε την λίστα πριν την ξαναγεμίσουμε 
	$('#Programs').empty();
	//Καθαρίζουμε τον τίτλο πριν βάλουμε τον νέο
	$('#breadcrumb').empty();	
}