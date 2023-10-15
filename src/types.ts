import lamp from "../public/assets/lamp.svg";

export type ImgSource = {
    src: string;
    text: string;
}

export type TTariffOptions = {
    firstOption: string,
    secondOption: string,
    thirdOption: string
}

export type TTariffCard = {
    tariffTitle: string,
    tariffDescription: string,
    actualPrice: string,
    oldPrice: string,
    monthlyRate: string,
    tariffOptions: TTariffOptions
    backgroundColor: string,
    color?: string,
    src: string
}