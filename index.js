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

    $('.list-group-item').hover(function(e) {
      $('#overlay').css('opacity' , '0.5');
      $('#overlay').css('box-shadow' , '0px 0px 10px 10px red');
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
        var greekLanguageDesc = "Greek Language";

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

        //TODO: ALLAXE TA PATHS TWN EXE 
        if ($(this).is('#Windows7_32bit')){
            $('#Programs').append("<div class='\container'\><ul class='\list-group list-group-horizontal row'\>" +
            "<li class=\'list-group-item\ id=\'overlay\'><a href=\'" + basePathSetups + bit32Path + pathNetFramework + "\'><div \ class='\image-wrapper'\><img src=\'" + basePathPhotos + netFrameworkImg + "\'></img></div><br>" + netFrameworkdDesc + "</a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathDriverpack + "\'><div class='\image-wrapper'\><img src=\'" + basePathPhotos + driverpackImg + "\'></img></div><br>" + driverpackDesc + "</a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathGreekLanguage + "\'><div class='\image-wrapper'\><img src=\'" + basePathPhotos + greekLanguageImg + "\'></img></div><br>" + greekLanguageDesc + "</a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathChrome + "\'><div class='\image-wrapper'\><img src=\'" + basePathPhotos + chromeSetupImg + "\'></img></div><br>" + chromeDesc + "</a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathVLC + "\'><div class='\image-wrapper'\><img src=\'" + basePathPhotos + vlcImg + "\'></img></div><br>" + vlcDesc + "</a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathWinrar + "\'><div class='\image-wrapper'\><img src=\'" + basePathPhotos + winrarImg + "\'></img></div><br>" + winrarDesc + "</a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathEset + "\'><div class='\image-wrapper'\><img src=\'" + basePathPhotos + esetImg + "\'></img></div><br>" + esetDesc + "</a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathRadmin + "\'><div class='\image-wrapper'\><img src=\'" + basePathPhotos + radminImg + "\'></img></div><br>" + radminDesc + "</a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathRadminCrack + "\'><div class='\image-wrapper'\><img src=\'" + basePathPhotos + radmincrackImg + "\'></img></div><br>" + radminCrackDesc + "</a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathOffice + "\'><div class='\image-wrapper'\><img src=\'" + basePathPhotos + officeImg + "\'></img></div><br>" + officeDesc + "</a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathFirefox + "\'><div class='\image-wrapper'\><img src=\'" + basePathPhotos + firefoxImg + "\'></img></div><br>" + firefoxDesc + "</a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathNitro + "\'><div class='\image-wrapper'\><img src=\'" + basePathPhotos + nitroImg + "\'></img></div><br>" + nitroDesc + "</a></li>" +
            "<li class=\'list-group-item\'><a href=\'" + basePathSetups + bit32Path + pathNitroKeygen + "\'><div class='\image-wrapper'\><img src=\'" + basePathPhotos + nitroKeygenImg + "\'></img></div><br>" + nitroKeygenDesc + "</a></li>" +
            "</ul></div>");   
        }
        else{
            $('#Programs').empty();
            $('#Programs').css('background-color', '#7a1b33'); 
        }
        });
});
  