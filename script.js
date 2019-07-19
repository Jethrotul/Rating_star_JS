/*class starRating extends HTMLElement {
    constructor(){
        super();

        this.stars = [];

        for (let i=0; i<5; i++) {
            let s = document.createElement ('i');
            s.className = 'fas';
            this.appendChild(s);
            this.stars.push(s);
        }
    }
}*/
var registro = document.customElements.define('x-ratingestrellas', pol); 
