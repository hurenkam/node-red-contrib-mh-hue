ServiceNode = require("./ServiceNode");

class ButtonNode extends ServiceNode {
    constructor(config) {
        super(config);
        console.log("ButtonNode[" + this.logid() + "].constructor()");

        this.fill = "grey";
    }

    onUpdate(event) {
        this.fill = "blue";
        
        var instance = this;
        setTimeout(()=>{
            instance.fill = "grey";
            instance.updateStatus();
        },3000);

        this.updateStatus();
        super.onUpdate(event);
    }

    updateStatus() {
        super.updateStatus();

        var fill = this.fill;
        var shape = "dot";
        var text = "";

        if (this.resource.item.button) {
            if (this.resource.item.button.last_event!=null) {
                text = this.resource.item.button.last_event;
            }
        }

        this.status({fill: fill, shape: shape, text: text});
    }
}

module.exports = ButtonNode;
