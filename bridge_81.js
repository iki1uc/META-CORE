// META-CORE / bridge_81.js

import { getCube, getAllCubes } from "../81_81_1/api.js";
import { updateCoreTmp } from "./tmp.js";

export function readMatrix() {
    const matrix = getAllCubes();

    updateCoreTmp({
        matrix: matrix
    });

    return matrix;
}

