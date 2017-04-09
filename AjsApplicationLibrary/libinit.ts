/*! ************************************************************************
License
Copyright (c)Year, Company. All rights reserved.
**************************************************************************** */

namespace $safeprojectname$.libinit {

    "use strict";

    export let libinitdone: boolean;

    function init(): void {
       /*
          Place library initialization code here in the correct order
       */
    }

    /**
     * This function is called automatically once the web page is loaded
     */
    function initLib(): void {
        if (!libinitdone) {
            libinitdone = true;
            init();
        }
    }

    window.addEventListener("load", initLib);

}