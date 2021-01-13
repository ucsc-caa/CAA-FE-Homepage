/*
 * loginpage.component.js
 *
 * This file provides loginpage component.
 *
 * @author: Peter Cai
 * Revised: 12/23/2020 Created this file
 */


var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
