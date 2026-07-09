// META-CORE / tmp.js

export const tmpCore = {
    lastCube: null,
    lastMatrix: null,
    lastAxes: null,
    lastLAGE: null,
    lastGhost: null
};

export function updateCoreTmp(data) {
    tmpCore.lastCube = data.cube || null;
    tmpCore.lastMatrix = data.matrix || null;
    tmpCore.lastAxes = data.axes || null;
    tmpCore.lastLAGE = data.lage || null;
    tmpCore.lastGhost = data.ghost || null;
}

