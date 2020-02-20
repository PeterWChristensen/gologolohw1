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

    processBackgroundColor = () => {
        console.log("processBackgroundColor");
        this.model.updateBackgroundColor(document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER).value);
    }

    processBorderNone = () => {
        console.log("processBorderNone");
        this.model.updateBorderStyle(document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_NONE).value);
    }

    processBorderSolid = () => {
        console.log("processBorderSolid");
        this.model.updateBorderStyle(document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_SOLID).value);
    }

    processBorderColor = () => {
        console.log("processBorderColor");
        this.model.updateBorderColor(document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER).value);
    }

    processBorderRadius = () => {
        console.log("processBorderRadius");
        this.model.updateBorderRadius(document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER).value);
    }

    processBorderThickness = () => {
        console.log("processBorderThickness");
        this.model.updateBorderThickness(document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER).value);
    }

    processPadding = () => {
        console.log("processPadding");
        this.model.updatePadding(document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER).value);
    }

    processMargin = () => {
        console.log("processMargin");
        this.model.updateMargin(document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER).value);
    }

    registerAppEventHandlers() {
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_TEXT]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CANCEL_NEW_TEXT]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CONFIRM_NEW_TEXT]);

        // Handlers for logo manipulation
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_FONT_SLIDER]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_TEXT_COLOR]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_BACKGROUND_COLOR]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_NONE, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_BORDER_NONE]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_SOLID, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_BORDER_SOLID]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_BORDER_COLOR]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_BORDER_RADIUS]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_BORDER_THICKNESS]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_PADDING]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_MARGIN]);
    }

}