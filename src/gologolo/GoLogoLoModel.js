import AppsterModel from '../appster/AppsterModel.js'
import GoLogoLoLogo from './GoLogoLoLogo.js'

export default class GoLogoLoModel extends AppsterModel {
    constructor() {
        super();
        this.currentWork = null;
    }

    createNewWork(workName) {
        let newRandomText = new GoLogoLoText(workName);
        return newRandomText;
    }

    loadWorkData(workToLoad) {
        console.log("load " + workToLoad.getName());
    }

    makeColor(colorData) {
        return "rgb(" + colorData.red + ", " + colorData.green + ", " + colorData.blue + ")";
    }

    buildAppWork(workArray, name) {
        let appWork = new GoLogoLoLogo();

        // FIND THE WORK DATA FROM THE JSON OBJECT
        for (let i = 0; i < workArray.length; i++) {
            let jsonWork = workArray[i];
            if (jsonWork.name === name) {
                // WE'VE FOUND IT, NOW LOAD ALL OF ITS DATA
                appWork.setName(name);
                appWork.setText(jsonWork.text);
                appWork.setFontSize(jsonWork.font_size);
                appWork.setTextColor(jsonWork.text_color);
                appWork.setBackgroundColor(jsonWork.background_color);
                appWork.setBorderColor(jsonWork.border_color);
                appWork.setBorderRadius(jsonWork.border_radius);
                appWork.setBorderThickness(jsonWork.border_thickness);
                appWork.setPadding(jsonWork.padding);
                appWork.setMargin(jsonWork.margin);
            }
        }

        return appWork;
    }

    updateText(newText) {
        if (newText === "") {
            newText = " ";
        }
        this.currentWork.setText(newText);
        this.view.loadWork(this.currentWork);
    }

    updateFontSize(size) {
        this.currentWork.setFontSize(size);
        this.view.loadWork(this.currentWork);
    }

    updateTextColor(color) {
        this.currentWork.setTextColor(color);
        this.view.loadWork(this.currentWork);
    }

    updateBackgroundColor(color) {
        this.currentWork.setBackgroundColor(color);
        this.view.loadWork(this.currentWork);
    }

    updateBorderStyle(style) {
        this.currentWork.setBorderStyle(style);
        this.view.loadWork(this.currentWork);
    }

    updateBorderColor(color) {
        this.currentWork.setBorderColor(color);
        this.view.loadWork(this.currentWork);
    }

    updateBorderRadius(radius) {
        this.currentWork.setBorderRadius(radius);
        this.view.loadWork(this.currentWork);
    }

    updateBorderThickness(thickness) {
        this.currentWork.setBorderThickness(thickness);
        this.view.loadWork(this.currentWork);
    }

    updatePadding(padding) {
        this.currentWork.setPadding(padding);
        this.view.loadWork(this.currentWork);
    }

    updateMargin(margin) {
        this.currentWork.setMargin(margin);
        this.view.loadWork(this.currentWork);
    }

    goList(logoName) {
        console.log(logoName);
        this.prependWork(new GoLogoLoLogo(logoName));
    }

}