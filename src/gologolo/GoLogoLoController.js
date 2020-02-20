import AppsterController from '../appster/AppsterController.js'
import { GoLogoLoGUIId, GoLogoLoCallback } from './GoLogoLoConstants.js';
import { AppsterHTML } from '../appster/AppsterConstants.js';

export default class GoLogoLoController
 extends AppsterController {
    constructor() {
        super();
    }

    processEditText = () => {
        console.log("processEditText");
        this.model.view.showEditTextModal();
    }

    processCancelNewText = () => {
        console.log("processCancelNewText");
        this.model.view.hideEditTextModal();
    }

    processConfirmNewText = () => { 
        console.log("processConfirmNewText");
        this.model.updateText(document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD).value);
        this.model.view.hideEditTextModal();
    }

    processFontSlider = () => {
        console.log("processFontSlider");
        console.log(document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER).value);
        this.model.updateFontSize(document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER).value);
    }

    processTextColor = () => {
        console.log("processTextColor");
        this.model.updateTextColor(document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER).value);
    }

    registerAppEventHandlers() {
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_TEXT]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CANCEL_NEW_TEXT]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CONFIRM_NEW_TEXT]);

        // Handlers for logo manipulation
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_FONT_SLIDER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_TEXT_COLOR]);

    }

}