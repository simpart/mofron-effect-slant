/**
 * @file mofron-effect-slant/index.js
 * @author simpart
 */
let mf = require('mofron');

/**
 * @class mofron.effect.Slant
 * @brief slant componet style effect class
 */
mf.effect.Slant = class extends mf.Effect {
    
    constructor (po) {
        try {
            super();
            this.name('Slant');
            this.prmOpt(po);
            if (null !== this.param()) {
                this.value(po);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable (tgt) {
        try {
            let val = (null === this.value()) ? 0 : this.value();
            tgt.style({
                'transform' : 'rotate('+ val + 'deg)'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disable (tgt) {
        try {
            tgt.style({
                'transform' : null
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Slant;
/* end of file */
