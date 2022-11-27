export class BaseUI {
    constructor(label="Base", category="base") {
        console.log("BaseUI.constructor()");

        var instance = this;
        this.config = {
            category: category,
            defaults: {
                name:      { value: "" },
                inputs:    { value: 1 },
                outputs:   { value: 1 }
            },
            label: function() {
                return this.name||label;
            },
            paletteLabel: label,
            oneditprepare: function() { instance.onEditPrepare(this) },
            oneditsave:    function() { instance.onEditSave(this) },
            oneditcancel:  function() { instance.onEditCancel(this) },
        }

        this.help = this.buildHelp();
    }

    buildHelp() {
        return {
            "intro": "",
            "Settings": "",
            "Input": "",
            "Outputs": "",
            "Details": ""
        }
    }

    ui() {
        console.log("BaseUI.ui()");
        var text = "";
        text += this.uiTextInput("name","Name");
        return text;
    }

    uiTextInput(id,label) {
        console.log("BaseUI.uiTextInput("+id+")");
        var item = document.createElement("div");
        item.setAttribute("class","form-row");
        item.setAttribute("id","node-container-" + id);
        item.innerHTML = '\
            <label for="node-input-'+ id +'"><i class="fa fa-tag"></i> '+ label +'</label>\
            <input type="text" id="node-input-'+ id + '">';
        return item.outerHTML;
    }

    uiNumberInput(id,label) {
        console.log("BaseUI.uiNumberInput("+id+")");
        var item = document.createElement("div");
        item.setAttribute("class","form-row");
        item.setAttribute("id","node-container-" + id);
        item.innerHTML = '\
            <label for="node-input-'+ id +'"><i class="fa fa-tag"></i> '+ label +'</label>\
            <input type="number" id="node-input-'+ id + '">';
        return item.outerHTML;
    }

    uiCheckboxInput(id,label) {
        console.log("BaseUI.checkboxInput("+id+")");
        var item = document.createElement("div");
        item.setAttribute("class","form-row");
        item.setAttribute("id","node-container-" + id);
        item.innerHTML = '\
            <div style="display: inline-flex; width: calc(100% - 105px)">\
                <div id="input-select-'+ id +'" style="flex-grow: 1;">\
                    <input type="checkbox" id="node-input-'+ id +'" style="flex: 15px;">\
                </div>\
                <span style="width: 100%; margin-left: 10px;">\
                    '+ label +'\
                </span>\
            </div>';
        return item.outerHTML;
    }

    uiSelectInput(id,label) {
        console.log("BaseUI.uiSelectInput("+id+")");
        var item = document.createElement("div");
        item.setAttribute("class","form-row");
        item.setAttribute("id","node-container-" + id);
        item.innerHTML = '\
            <label for="node-input-'+ id +'"><i class="fa fa-tag"></i> '+ label +'</label>\
            <div style="display: inline-flex; width: calc(100% - 105px)">\
                <div id="input-select-'+ id +'" style="flex-grow: 1;">\
                    <input type="text" id="node-input-'+ id +'" style="width: 100%">\
                </div>\
                <button id="input-select-'+ id +'-search" type="button" class="red-ui-button" style="margin-left: 10px;">\
                    <i class="fa fa-search"></i>\
                </button>\
            </div>';
        return item.outerHTML;
    }
    
    manual() {
        var text = "";
        Object.keys(this.help).forEach((key)=>{
            if ((this.help[key]) && (this.help[key]!="")) {
                if (key != "intro") {
                    text += "\n### " + key + "\n";
                }
                text += this.help[key];
            }
        });
        return text;
    }

    onEditPrepare(config) {
        console.log("BaseUI.onEditPrepare()");
    }

    onEditSave(config) {
        console.log("BaseUI.onEditSave()");
    }

    onEditCancel(config) {
        console.log("BaseUI.onEditCancel()");
    }
}
