/**
 * @file mofron-effect-slant/index.js
 * @author simpart
 */
const mf = require('mofron');

/**
 * @class mofron.effect.Slant
 * @brief slant componet style effect class
 */
mf.effect.Slant = class extends mf.Effect {
    /**
     * initialize effect
     *
     * @param p1 (string) enable degree value
     * @param p1 (arrow) enable,disable degree value
     */
    constructor (po) {
        try {
            super();
            this.name('Slant');
            this.prmMap('value');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * execute enable degree
     *
     * @note private method
     */
    enable (tgt) {
        try {
            let val = (null !== this.value()[0]) ? 'rotate('+ this.value()[0] + 'deg)' : null;
            tgt.style({ 'transform' : val });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * execute disable degree
     *
     * @note private method
     */
    disable (tgt) {
        try {
            let val = (null !== this.value()[1]) ? 'rotate('+ this.value()[1] + 'deg)' : null;
            tgt.style({ 'transform' : val });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * degree value setter/getter
     *
     * @param p1 (string) set enable degree
     * @param p1 (undefined) call as getter
     * @param p2 (string) set disable degree
     * @return (array) enable,disable degree [en,dis]
     */
    value (prm, dis) {
        try {
            if ( (undefined !== prm) && (null !== prm) ) {
                 if ( ('number' !== typeof prm) && ('string' !== typeof prm) ) {
                     throw new Error('invalid parameter');
                 }
            }
            if ( (undefined !== dis) && (null !== dis) ) {
                 if ( ('number' !== typeof dis) && ('string' !== typeof dis)) {
                     throw new Error('invalid parameter');
                 }
            }
            return this.execConfig('value', prm, dis, false);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Slant;
/* end of file */
