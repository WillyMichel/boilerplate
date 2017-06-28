var $inputImage = $('#profile-picture')
,   $imageDisplay = $("#picture-display")
,   $btnSend = $("#send-picture")
,   $error = $(".error-media")
,   URL = window.URL || window.webkitURL;


$inputImage.on("change", function(e){
    var target = e.target;

    var $this = $(this);

    var $displayZone = $(".challenge-media-display-"+$this.data("id"));

    if(!$("html").hasClass("ie9")){
        if(target.files[0] != undefined){
            var tarFile = target.files[0]
            ,   type = tarFile.type
            ,   name = tarFile.name
            ,   size = tarFile.size
            ,   testImg = new Image();

            $error.hide();

            if(type == "image/jpeg" || type == "image/jpg" || type == "image/png") {
                testImg.src = window.URL.createObjectURL( tarFile );
                testImg.onload = function() {
                    var testWidth = testImg.naturalWidth,
                        testHeight = testImg.naturalHeight;
                    window.URL.revokeObjectURL( testImg.src );
                    if(testWidth >= 260 && testHeight >= 480) {
                        if(size < 10000000){
                        	$btnSend.attr('disabled', false);
                            $displayZone.html("<img src='"+ URL.createObjectURL(tarFile) + "'>");
                        } else {
                        	$btnSend.attr('disabled', true);
                            if(!$imageDisplay.hasClass("keepDisplay")){
                                $imageDisplay.fadeOut();
                            }
                            return $error.show();
                        }
                    } else {
                        $btnSend.attr('disabled', true);
                        return $error.show();
                    }
                };
            } else {
            	$btnSend.attr('disabled', true);
                if(!$imageDisplay.hasClass("keepDisplay")){
                    $imageDisplay.fadeOut();
                }
                return $error.show();
            }
        }
    } else { // IF IE9
    	$btnSend.attr('disabled', false);
        $displayZone.html(target.value.match(/[^\/\\]+$/));
    }
});