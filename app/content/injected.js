import {ContentController} from "../../src/content/ContentController";

(function(){
    console.log('Running injected code');
    const controller = new ContentController();
    controller.initialize();
})();
