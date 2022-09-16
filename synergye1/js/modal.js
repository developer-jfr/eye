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
 
 let videoStopper = function(id) {
    let containerElement = document.getElementById(id);
    let iframe_tag = containerElement.querySelector( 'iframe');
    let video_tag = containerElement.querySelector( 'video' );
    if ( iframe_tag) {
        let iframeSrc = iframe_tag.src;
        iframe_tag.src = iframeSrc; 
    }
    if ( video_tag) {
        video_tag.pause();
    }

}

 function closeModal(){
    videoStopper('video-iframe-pl')
     const modalContainer = document.getElementById('modal-container')
     modalContainer.classList.remove('show-modal')
     
 }


 closeBtn.forEach(c => c.addEventListener('click', closeModal))