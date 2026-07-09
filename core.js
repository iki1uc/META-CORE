// META-CORE / core.js

import { readCube } from "./bridge_9hoch9.js";
import { readMatrix } from "./bridge_81.js";

export function interpretSystem(Phi, phi, phi2, phiinfty) {

    const cube = readCube(Phi, phi, phi2, phiinfty);
    const matrix = readMatrix();

    return {
        core: "META-CORE",
        cube,
        matrix,
        status: "ready"
    };
}

