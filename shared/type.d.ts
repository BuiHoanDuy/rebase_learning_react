import { ReactElement } from 'react';

type ItemListening = {
    no: number;
    title?: string | boolean | number;
    chooseA?:string;
    chooseB?:string;
    chooseC?:string;
    listWords?:Array<string>;
    answer?: string;
    answer1?: string;
    type?: string;
    fTime?: string;
    tTime?: string;
    userAnswer?: string | null;
    userAnswer1?: string | null;
    check?: boolean | null;
};

type PartListening = {
    title?: string | boolean | number;
    subtitle?: string;
    imgSrc?: string;
    imgSrc1?: string;
    fTime?: string;
    tTime?: string;
    items?: Array<ItemListening>;
};

type DataListening = {
    part1?: PartListening;
    part2?: PartListening;
    part3?: PartListening;
    part4?: PartListening;
};

////
type ItemOnTap = {
    no: number;
    title?: string | boolean | number;
    paragraph?:string;
    pos1?:string;
    pos2?:string;
    pos3?:string;
    pos4?:string;
    pos4?:string;
    listAnswers: any;
    type?: string;
    userAnswer1: string | null;
    userAnswer2?: string | null;
    userAnswer3?: string | null;
    userAnswer4?: string | null;
    userAnswer5?: string | null;
    check?: boolean | null;
};

type PartOnTap = {
    title?: string | boolean | number;
    subtitle?: string;
    imgSrc?: string;
    imgSrc1?: string;
    items?: Array<ItemOnTap>;
};
type DataOnTap = {
    part1?: PartOnTap;
    part1?: PartOnTap;
};

type BlankTextProp = {
    text?:string;
    blanks?:Array<number>;
}

type ParagraphProp = {
    paragraph?:string;
}