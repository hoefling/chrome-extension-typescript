import {HelloBrowserActionController} from "./action_browser/HelloBrowserActionController";
import {HelloPageActionController} from "./action_page/HelloPageActionController";
import {SimpleOptionsController} from "./options/SimpleOptionsController";

window.addEventListener('load', () => {

    let view: HTMLElement;

    if (view = document.querySelector('body.hello-browser-action-view')) {
        let controller = new HelloBrowserActionController();
        controller.initialize(view);
        return;
    }


    if (view = document.querySelector('body.hello-page-action-view')) {
        let controller = new HelloPageActionController();
        controller.initialize(view);
        return;
    }

    if (view = document.querySelector('body.options')) {
        let controller = new SimpleOptionsController();
        controller.initialize(view);
        return;
    }


    console.log('Could not find Action controller to initialize for DOM');

});
