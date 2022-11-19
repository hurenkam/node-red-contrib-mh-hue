module.exports = function(RED) {
    "use strict";

    const BaseNode = require('./nodes/BaseNode');
    BaseNode.nodeAPI = RED;

    const BridgeConfigNode = require('./nodes/BridgeConfigNode');

    const DeviceNode = require('./nodes/DeviceNode');
    const DimmerSwitchNode = require('./nodes/DimmerSwitchNode');
    const LightNode = require('./nodes/LightNode');
    const LutronAuroraNode = require('./nodes/LutronAuroraNode');
    const MotionSensorNode = require('./nodes/MotionSensorNode');
    const WallSwitchModuleNode = require('./nodes/WallSwitchModuleNode');

    const DevicePowerNode = require('./nodes/DevicePowerNode');
    const LightLevelNode = require('./nodes/LightLevelNode');
    const MotionNode = require('./nodes/MotionNode');
    const TemperatureNode = require('./nodes/TemperatureNode');
    const ZigbeeConnectivityNode = require('./nodes/ZigbeeConnectivityNode');
    const ServiceNode = require('./nodes/ServiceNode');
    
    const SceneNode = require('./nodes/SceneNode');

    const MotionBehaviorNode = require('./nodes/MotionBehaviorNode');
    const SceneCyclerNode = require('./nodes/SceneCyclerNode');

    var nodes = {
        "BridgeConfigNode": BridgeConfigNode,

        "DeviceNode": DeviceNode,
        "DimmerSwitchNode": DimmerSwitchNode,
        "LightNode": LightNode,
        "LutronAuroraNode": LutronAuroraNode,
        "MotionSensorNode": MotionSensorNode,
        "WallSwitchModuleNode": WallSwitchModuleNode,

        "DevicePowerNode": DevicePowerNode,
        "LightLevelNode": LightLevelNode,
        "MotionNode": MotionNode,
        "TemperatureNode": TemperatureNode,
        "ZigbeeConnectivityNode": ZigbeeConnectivityNode,
        "ServiceNode": ServiceNode,

        "RoomNode": LightNode,
        "SceneNode": SceneNode,
        "ZoneNode": LightNode,

        "MotionBehaviorNode": MotionBehaviorNode,
        "SceneCyclerNode": SceneCyclerNode
    }

    Object.keys(nodes).forEach((id) => {
        RED.nodes.registerType(id,nodes[id]);
    });
}
