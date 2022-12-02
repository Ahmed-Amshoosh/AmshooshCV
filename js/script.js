var typed= new Typed(".typing",{
    strings:["","Front End","Web Designer"],
    typeSpeed:130,
    BackSpeed:60,
    loop:true
})

//            aside


const nav =document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNaList = navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i =0; i<totalNaList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
           removeBackSection();
            for(let j=0; j<totalNaList;j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    //allSection[j].classList.add("back-section")
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num){
        allSection[num].classList.add("back-section")
    }
    function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }
    function updateNav(element){
        for(let i=0; i<totalNaList;i++){
            navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function(){
        const sectionIndex= this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })


const navTogglerBtn= document.querySelector(".nav-togger"),
    aside= document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () =>{
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i = 0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
    }

/*
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactProject = document.getElementById('contact-project');
const contactMessgae = document.getElementById('contact-message');
*/


function sendMail(){
    var params= {
        contact_name: document.getElementById("contact_name").value,
        contact_email: document.getElementById("contact_email").value,
        contact_project: document.getElementById("contact_project").value,
    }

const serviceID ="service_gfbma57";
const templateID ="template_6hwxdth";

emailjs.send(serviceID,templateID, params)
.then(
    res =>{
         document.getElementById("contact_'name").value = "",
         document.getElementById("contact_email").value = "";
         document.getElementById("contact_project").value = "";
         console.log(res);
         alert("your message send successfully");
    }
)
.catch((err) => console.log(err))

}

/*
const sendEmail=(e) =>{
    e.preventDefault();

    if(contactName.value === '' || contactEmail.value === '' ||contactProject === ''){
        contactMessgae.classList.remove('color-blue');
        contactMessgae.classList.add('color-red');

        contactMessgae.textContent = 'Write all the input fields';
    }
    else{
        emailjs.sendForm('service_gfbma57','template_6hwxdth','#contact-form','lIEMRVwIJmKI2_1t5')
        .then(() => {
            contactMessgae.classList.add('color-blue')
            contactMessgae.textContent= 'Messgae send'
           
        })
    }
};
contactForm.addEventListener('submit', sendEmail);

/*
 for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("back-section");
            }
            */