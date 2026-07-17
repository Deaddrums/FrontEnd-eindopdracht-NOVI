import boodschappenImage from './../../images/Broodschaap doet boodschappen.png'
import keukenImage from './../../images/Broodschaap in de keuken.png'
import bankImage from './../../images/Broodschaap op bank 2.png'
import registerImage from './../../images/Broodschaap Register.png'

export const ImagePreRender = () => {
    [
        boodschappenImage,
        keukenImage,
        bankImage,
        registerImage,
    ].forEach(src => {
        const img = new Image();
        img.src = src;
    });

};

