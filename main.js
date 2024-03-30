var share = document.getElementById("sharetab") ; 

var url ;
var extra ;
function shareurl(){
    url = window.location.href ;
    extra = "Here is the Contact Form of Sri Lakshmi Narasimha. "
    share.style.display="revert" ;
    document.getElementById("editlink").value = url ;
    
}
function shareonws(){
    var text = extra + "\n" + url ;
    var encode = encodeURIComponent(text) ;
    var whatsappURL = "https://wa.me/?text=" + encode ;
    window.open(whatsappURL , "_blank") ;
}
function shareonlinkedin(){
    var text = extra +"\n" + url ;
    var encode = encodeURIComponent(text) ;
    var linkedinURL = "https://www.linkedin.com/messaging/compose/?body=" + encode;
    window.open(linkedinURL , "_blank");
}
function leetcode(){
    share.style.display="revert" ;
    
    extra="Here is the leetcode profile of Sri Lakshmi Narasimha" ;
    url = "https://leetcode.com/Narasimha-png/" ;
    document.getElementById("editlink").value = url ;
}
function codeforces(){
    share.style.display="revert" ;
    
    extra="Here is the CodeForces profile of Sri Lakshmi Narasimha" ;
    url = "https://codeforces.com/profile/NarasimhaTiger" ;
    document.getElementById("editlink").value = url ;
}
function github(){
    share.style.display="revert" ;
   
    extra="Here is the GitHub profile of Sri Lakshmi Narasimha" ;
    url = "https://github.com/Narasimha-png" ;
    document.getElementById("editlink").value = url ;
}
function shareoninsta(){
    var text = extra +"\n" + url ;
    var encode = encodeURIComponent(text) ;
    var instaURL = "https://www.instagram.com/direct/new/?text=" + encode;
    window.open(instaURL , "_blank");
}

function shareongmail(){
    alert("vame") ;
    var subj = "Sri Lakshmi Narasimha's Contact Form" ;
    var to="" ;
    var text = extra +"\n" + url ;
    var encodedBody = encodeURIComponent(text) ;
    var encodedSubj = encodeURIComponent(subj) ;
    var gmailURL = "https://mail.google.com/mail/?view=cm&to=" + to + "&su=" + encodedSubj + "&body=" + encodedBody;
    window.open(gmailURL , "_blank") ;
}
function redirectgit(){
    location.href="https://github.com/Narasimha-png" ;
}

function copylink(){

   var text = document.getElementById("editlink") ;
   
   navigator.clipboard.writeText(text.value) ;
   document.getElementById("copyani").style.display="revert" ;
   setTimeout(()=>{
    document.getElementById("copyani").style.display="none" ;
   
   } , 1500) ;
  
}


function func() {
    var profileDiv = document.getElementById("profile");
    var rect = profileDiv.getBoundingClientRect();

    if (rect.top > window.innerHeight || rect.bottom < 0) {
        
        document.getElementById("navbar").style.display="revert" ;
    }
    else{
        
        document.getElementById("navbar").style.display="none" ;
    }

}

window.addEventListener("scroll", func);
