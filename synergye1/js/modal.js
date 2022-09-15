/*=============== SHOW MODAL ===============*/

document.addEventListener("click", (e) => {
    let modalContainer = document.getElementById('modal-container');
     if (e.target.classList.contains("open-modal")) {
         document.getElementById('modal-iframe').src = e.target.alt
         modalContainer.classList.add('show-modal')
     }
   });
 
 /*=============== CLOSE MODAL ===============*/
 const closeBtn = document.querySelectorAll('.close-modal')
 
 function closeModal(){
     const modalContainer = document.getElementById('modal-container')
     modalContainer.classList.remove('show-modal')
 }
 closeBtn.forEach(c => c.addEventListener('click', closeModal))