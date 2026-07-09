// META-CORE / bridge_9hoch9.js

import { api9hoch9 } from "../9hoch9/api.js";
import { updateCoreTmp } from "./tmp.js";

export function readCube(Phi, phi, phi2, phiinfty) {
    const cube = api9hoch9(Phi, phi, phi2, phiinfty);

    updateCoreTmp({
        cube: cube,
        axes: cube.axes,
        lage: cube.lage,
        ghost: cube.ghost
    });

    return cube;
}

