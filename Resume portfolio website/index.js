
// home js //

var typed = new Typed(".auto-type",{strings: ["Full Stack Web Development","coding","javascript","React"],
typeSpeed : 40,
backSpeed : 40,
loop : true

})
// **********///


// **** about js ***//
var typed = new Typed(".auto",{strings: ["Web Developer"],
typeSpeed : 40,
backSpeed : 40,
loop : true
})
// end //


function openAndDownload() {
    // Open Google Drive preview in new tab
    window.open("https://drive.google.com/file/d/1VBRqbRHYs3xIblbtaDOzNTizxBoOXv_m/view", "_blank");
    
    // Trigger file download
    const a = document.createElement("a");
    a.href = "https://drive.google.com/uc?export=download&id=1VBRqbRHYs3xIblbtaDOzNTizxBoOXv_m";
    a.download = "Nishu_Resume.pdf"; // Optional: rename the downloaded file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }



