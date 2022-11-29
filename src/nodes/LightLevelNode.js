ServiceNode = require("./ServiceNode");

class LightLevelNode extends ServiceNode {
    constructor(config) {
        super(config);
        console.log("LightLevelNode[" + this.logid() + "].constructor()");
    }

    onUpdate(event) {
        this.updateStatus();
        super.onUpdate(event);
    }

    updateStatus() {
        super.updateStatus();

        var fill = "grey";
        var shape = "dot";
        var text = "";

        var resource = this.getResource(this.config.uuid);
        if (resource.item.light) {
            if (resource.item.light.light_level!=null) {
                fill = "green";
                text = ""+resource.item.light.light_level;
            }
        }

        this.status({fill: fill, shape: shape, text: text});
    }
}

module.exports = LightLevelNode;
