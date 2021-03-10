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
    
        if (!$(this).next('div').hasClass('show')) {
          $(this).next('div').addClass('show');
        } else {
          $(this).next('div').removeClass('show');
        }
    
    });

    
});

$(document).ready(function() {
    $('.dropdown-item').on("click", function() {
        //Καθαρίζουμε την λίστα πριν την ξαναγεμίσουμε 
        $('#Programs').empty();

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

        //Firefox
        var pathFirefox = "ChromeSetup.exe";
        var firefoxImg = "firefox.jpg";
        var firefoxDesc = "Firefox";

        //Nitro
        var pathNitro = "ChromeSetup.exe";
        var nitroImg = "nitro.png";
        var nitroDesc = "Nitro PDF";

        //Nitro Keygen
        var pathNitroKeygen = "ChromeSetup.exe";
        var nitroKeygenImg = "nitro_keygen.jpg";
        var nitroKeygenDesc = "Nitro Keygen";

        var successImg = "nitro_keygen.jpg";
		
        //TODO: ALLAXE TA PATHS TWN EXE 
        if ($(this).is('#Windows7_32bit')){
            $('#Programs').append("<div class='\container'\><ul class='\list-group list-group-horizontal row'\>" +
            "<li class=\'list-group-item\ id=\'overlay\'><a href=\'" + basePathSetups + bit32Path + pathNetFramework + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + netFrameworkImg + "\'></img></div><div class=\'descr\'>" + netFrameworkdDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathDriverpack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + driverpackImg + "\'></img></div><div class=\'descr\'>" + driverpackDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathGreekLanguage + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + greekLanguageImg + "\'></img></div><div class=\'descr\'>" + greekLanguageDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathKmspico + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + kmspicoImg + "\'></img></div><div class=\'descr\'>" + kmspicoDesc + "</div></a></li>" +  
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathChrome + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + chromeSetupImg + "\'></img></div><div class=\'descr\'>" + chromeDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathVLC + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + vlcImg + "\'></img></div><div class=\'descr\'>" + vlcDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathWinrar + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + winrarImg + "\'></img></div><div class=\'descr\'>" + winrarDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathEset + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + esetImg + "\'></img></div><div class=\'descr\'>" + esetDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathRadmin + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + radminImg + "\'></img></div><div class=\'descr\'>" + radminDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathRadminCrack + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + radmincrackImg + "\'></img></div><div class=\'descr\'>" + radminCrackDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathOffice + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + officeImg + "\'></img></div><div class=\'descr\'>" + officeDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathFirefox + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + firefoxImg + "\'></img></div><div class=\'descr\'>" + firefoxDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathNitro + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroImg + "\'></img></div><div class=\'descr\'>" + nitroDesc + "</div></a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'" + basePathPhotos + nitroKeygenImg + "\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"<li class=\'list-group-item hidden-check-element\'><a href=\'" + basePathSetups + bit32Path + pathNitroKeygen + "\'><div class=\'image-wrapper\'><img src=\'photos/checktransparent.png\'></img></div><div class=\'descr\'>" + nitroKeygenDesc + "</div></a></li>" +
			"</ul></div>");   

            $('.list-group-item a').on("click", function(e) {
              //$(this).css('opacity' , '0.1');
              $(this).first().append("<div class=\'downloaded\'><img src=\'"+ 'photos/checktransparent.png' + "\'></img></div>");
              $(this).parent().css('pointer-events', 'none');
            });
           
        }
        else{
            $('#Programs').empty();
        }
        });
});
  

$(document).ready(function(e) {  
  $('.list-group-item a').on("click", function(e) {
    $(this).css('opacity' , '0.5');
  });
});