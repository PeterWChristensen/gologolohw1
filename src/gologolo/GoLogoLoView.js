import {GoLogoLoGUIClass, GoLogoLoGUIId, GoLogoLoText} from './GoLogoLoConstants.js'
import {AppsterHTML, AppsterSymbols, AppsterText, AppsterGUIClass, AppsterGUIId} from '../appster/AppsterConstants.js'
import AppsterView from '../appster/AppsterView.js'

export default class GoLogoLoView extends AppsterView {
    constructor() {
        super();
    }

    fillAppWorkspace(workspace) {
        let colorPickerAttributes = [];
        colorPickerAttributes[AppsterHTML.TYPE] = AppsterHTML.COLOR;
        let rangeAttributes = [];
        rangeAttributes[AppsterHTML.TYPE] = AppsterHTML.RANGE;

        // FIRST MAKE THE TOOLBAR
        let toolbar = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TOOLBAR);
        let logoName = this.buildElement(AppsterHTML.P, GoLogoLoGUIId.GOLOGOLO_EDITING_LOGO_NAME);
        let editTextButton = this.buildElement(AppsterHTML.BUTTON, GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, [], [], GoLogoLoText.GOLOGOLO_EDIT_TEXT_TEXT);
        let fontSizeSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, [], rangeAttributes);
        let textColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, [], colorPickerAttributes);
        let backgroundColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, [], colorPickerAttributes);
        let borderStyleRadioButtonNone = this.buildRadioButton(GoLogoLoGUIId.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_NONE, GoLogoLoGUIId.GOLOGOLO_BORDER_STYLE_GROUP, GoLogoLoText.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_NONE_TEXT);
        let borderStyleRadioButtonSolid = this.buildRadioButton(GoLogoLoGUIId.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_SOLID, GoLogoLoGUIId.GOLOGOLO_BORDER_STYLE_GROUP, GoLogoLoText.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_SOLID_TEXT);
        let borderStyleRadioButtonDashed = this.buildRadioButton(GoLogoLoGUIId.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_DASHED, GoLogoLoGUIId.GOLOGOLO_BORDER_STYLE_GROUP, GoLogoLoText.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_DASHED_TEXT);
        let borderColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, [], colorPickerAttributes);
        let borderRadiusSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, [], rangeAttributes);
        let borderThicknessSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, [], rangeAttributes);
        let paddingSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, [], rangeAttributes);
        let marginSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, [], rangeAttributes);
        let textDiv = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TEXT);
        let promptClass = [GoLogoLoGUIClass.GOLOGOLO_CONTROL_PROMPT];
        toolbar.appendChild(logoName);
        toolbar.appendChild(editTextButton);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_FONT_SIZE_TEXT));
        fontSizeSlider.setAttribute("max", 150);
        fontSizeSlider.setAttribute("min", 10);
        toolbar.appendChild(fontSizeSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_TEXT_COLOR_TEXT));
        toolbar.appendChild(textColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BACKGROUND_COLOR_TEXT));
        toolbar.appendChild(backgroundColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.FORM));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_STYLE_RADIO_BUTTONS_TEXT));
        toolbar.appendChild(borderStyleRadioButtonNone); 
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, GoLogoLoGUIId.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_NONE_LABEL, [], [], GoLogoLoText.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_NONE_TEXT));
        toolbar.appendChild(borderStyleRadioButtonSolid); 
        borderStyleRadioButtonSolid.setAttribute("checked", "true");
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, GoLogoLoGUIId.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_SOLID_LABEL, [], [], GoLogoLoText.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_SOLID_TEXT));
        toolbar.appendChild(borderStyleRadioButtonDashed); 
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, GoLogoLoGUIId.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_DASHED_LABEL, [], [], GoLogoLoText.GOLOGOLO_BORDER_STYLE_RADIO_BUTTON_DASHED_TEXT));
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_COLOR_TEXT));
        toolbar.appendChild(borderColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_RADIUS_TEXT));
        toolbar.appendChild(borderRadiusSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        //let borderThicknessText = this.buildElement(AppsterHTML.SPAN, GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER_TEXT, promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_THICKNESS_TEXT);
        //borderThicknessText.style.opacity = 0.4;
        //borderThicknessSlider.disabled = true;
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER_TEXT, promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_THICKNESS_TEXT));
        toolbar.appendChild(borderThicknessSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_PADDING_TEXT));
        toolbar.appendChild(paddingSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_MARGIN_TEXT));
        toolbar.appendChild(marginSlider);

        workspace.appendChild(toolbar);
        workspace.appendChild(textDiv);
        workspace.style.padding = 0;
        return workspace;
    }

    loadWork(work) {
        let logoName = document.getElementById(GoLogoLoGUIId.GOLOGOLO_EDITING_LOGO_NAME);
        logoName.innerHTML = work.getName();
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.innerHTML = work.getText();
        let fontSizeSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
        fontSizeSlider.value = work.getFontSize();
        let textColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER);
        textColorPicker.value = work.getTextColor();
        let backgroundColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER);
        backgroundColorPicker.value = work.getBackgroundColor();
        let borderColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER);
        borderColorPicker.value = work.getBorderColor();
        let borderRadiusSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER);
        borderRadiusSlider.value = work.getBorderRadius();
        let borderThicknessSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER);
        borderThicknessSlider.value = work.getBorderThickness();
        let paddingSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER);
        paddingSlider.value = work.getPadding();
        let marginSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER);
        marginSlider.value = work.getMargin();
        this.loadWorkStyle(work);
    }

    loadWorkStyle(work) {
        let logoName = document.getElementById(GoLogoLoGUIId.GOLOGOLO_EDITING_LOGO_NAME);
        logoName.style.textAlign = "center";
        logoName.style.fontSize = "20px";
        logoName.style.fontWeight = "900";
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.style.textAlign = "center";
        textDiv.style.fontSize = work.getFontSize() + "px";
        textDiv.style.color = work.getTextColor();
        textDiv.style.backgroundColor = work.getBackgroundColor();
        textDiv.style.borderStyle = work.getBorderStyle();
        textDiv.style.borderColor = work.getBorderColor();
        textDiv.style.borderRadius = work.getBorderRadius() + "px";
        textDiv.style.borderWidth = work.getBorderThickness() + "px";
        textDiv.style.padding = work.getPadding() + "px";
        textDiv.style.margin = work.getMargin() + "px";
    }

    disableBorderStyleOptions() {
        let thicknessSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER);
        thicknessSlider.disabled = true;
        let thicknessSliderText = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER_TEXT);
        thicknessSliderText.style.opacity = 0.4;
        console.log("disableBorderStyleOptions");
    }

    enableBorderStyleOptions() {
        let thicknessSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER);
        thicknessSlider.disabled = false;
        let thicknessSliderText = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER_TEXT);
        thicknessSliderText.style.opacity = 1;
        console.log("enableBorderStyleOptions");
    }

    buildAppsterEditTextModal() {
        let textModal = this.buildElement(  AppsterHTML.DIV, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL,
                                            [AppsterGUIClass.APPSTER_MODAL],
                                            [],
                                            null,
                                            AppsterGUIClass.MODAL_ANIMATION_LEFT);
        let textFrame = this.buildElement( AppsterHTML.DIV, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_FRAME,
                                            [AppsterGUIClass.APPSTER_MODAL_FRAME]);
        let header = this.buildElement( AppsterHTML.HEADER, 
                                        GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_HEADER,
                                        [AppsterGUIClass.APPSTER_MODAL_HEADER]);
        let section = this.buildElement(    AppsterHTML.SECTION, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_SECTION,
                                            [AppsterGUIClass.APPSTER_MODAL_SECTION]);
        let p = this.buildElement(AppsterHTML.P);
        let strong = this.buildElement(    AppsterHTML.STRONG, 
                                                "",
                                                [],
                                                [],
                                                );
        let textFieldAttributes = [];
        textFieldAttributes[AppsterHTML.TYPE] = AppsterHTML.TEXT;
        let textField = this.buildElement(  AppsterHTML.INPUT,
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD,
                                            [AppsterGUIClass.APPSTER_MODAL_TEXTFIELD],
                                            textFieldAttributes);
        let enterButton = this.buildElement(   AppsterHTML.BUTTON, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON,
                                            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
                                            [],
                                            GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON_TEXT);
        let cancelButton = this.buildElement(AppsterHTML.BUTTON, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON,
                                            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
                                            [],
                                            GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON_TEXT);
        let footer = this.buildElement(     AppsterHTML.FOOTER, 
                                            "", 
                                            [AppsterGUIClass.APPSTER_MODAL_FOOTER],
                                            [],
                                            GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_FOOTER_TEXT);
        p.appendChild(strong);
        section.appendChild(p);
        textFrame.appendChild(header);
        textFrame.appendChild(section);
        section.appendChild(textField);
        section.appendChild(enterButton);
        section.appendChild(cancelButton);
        textFrame.appendChild(footer);
        textModal.appendChild(textFrame);
        textFrame.style.overflow = "hidden";
        return textModal;
    }

    addListItem(initText) {
        let textList = document.getElementById(RTA_GUIId.RTA_TEXT_LIST);
        let listItemCount = textList.childNodes.length;
        let newListItem = this.buildElement(AppsterHTML.LI, RTA_GUIId.RTA_TEXT_LIST_ITEM 
            + listItemCount);
        newListItem.innerHTML = initText;
        textList.appendChild(newListItem);
    }

    appendLetter(listItemId, letterToAppend) {
        let textList = document.getElementById(listItemId);
        textList.innerHTML += textList.innerHTML + letterToAppend;
    }

    showEditTextModal() {
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL);
        text.classList.add(AppsterGUIClass.IS_VISIBLE);
    }

    hideEditTextModal() {
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL);
        text.classList.remove(AppsterGUIClass.IS_VISIBLE);
    }
}