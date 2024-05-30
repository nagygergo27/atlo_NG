"use strict";
// File: app.ts
// Author: Nagy Gergő
// Copyright: 2024, Nagy Gergő
// Group: I-2-N
// Date: 2024-05-30
// Github: https://github.com/nagygergo27/
// Licenc: GNU GPL
class Atlo {
    aSide?: HTMLInputElement | null;
    bSide?: HTMLInputElement | null;
    Calc?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.handleEvent();
    }
    bindHtml() {
        this.aSide = document.querySelector('#aSide');
        this.bSide = document.querySelector('#bSide');
        this.Calc = document.querySelector('#Calc');
        this.calcButton = document.querySelector('#calcButton');
    }
    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        })
    }
    startCalc() {
        const aSide = Number(this.aSide?.value);
        const bSide = Number(this.bSide?.value)
        const perimeter = this.calcAtlo(aSide, bSide);
        this.Calc!.value = String(perimeter);
    }
    calcAtlo(aSide: number, bSide:number):number {
        return Math.sqrt(aSide * aSide + bSide * bSide);
    }
}
new Atlo();