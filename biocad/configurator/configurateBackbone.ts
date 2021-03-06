

import BackboneDepiction from "biocad/cad/BackboneDepiction";

import backboneStrategy from './strategy/backboneStrategy'
import Depiction from "biocad/cad/Depiction";
import LabelDepiction from "biocad/cad/LabelDepiction";
import InstructionSet from "biocad/cad/layout-instruction/InstructionSet";

export default function configurateBackbone(depiction:BackboneDepiction, instructions:InstructionSet): void {

    console.warn('configurating backbne ' + depiction.debugName)

    const padding = 1
    backboneStrategy(depiction, depiction.children, padding)

}
