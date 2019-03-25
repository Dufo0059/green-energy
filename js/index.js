function preloader() {
        const imagesPaths = [
           "../images/button1.png",
           "../images/button2.png",
           "../images/button3.png"
        ];
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

        
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);



const resources = [
    {
        heading: "Say la vie - Mission 1", 
        imgUrl: "../images/button1.png",
        body: "Seasonal continuum popcorn with brewers yeast mystic stevia, rebirthing trauma-based spoken word acid apple cider vinegar marijuana. Beltane reconnect heartbeat of our ancestors what the planet really needs, spirit animal macrobiotic innate capacity occupy. Mind-body spiral astral plane, all-natural kirlian photography entheogen djembe embodied fluorescent lights Hafiz. Taurus full moon himalayan sea salt, shamanic paleo diet. Dance dome the power of intention co-op, fasting nudist lavender science has proven that birth name world."
    },
    {
        heading: "Say la vie - Mission 2",
        imgUrl: "../images/button2.png",
        body: "Infinite blessings organic nudist, peace forest natural homebirth dead sea minerals with a dash of cayenne pepper. Healing energy ganesh breathwork, backjack transformative. Rain dance tapping feeling deep gratitude, all-encompassing rainbow sound healing. With the dolphins loving kindness beekeeping, yerba matte quinoa blessed blue whale. Nonviolent communication macrobiotic clarity Big Sur vinyasa, mind-body human potential sun salutation hemp seed."
    },
    {
        heading: "Say la vie - Mission 3",
        imgUrl: "../images/button3.png",
        body: "Healing tonic ganja marinese wicca beekeeping, bodyworker papasan. Native american ancestry elder reflexology salvia Whole Earth Catalog workshop, popcorn with brewers yeast radical acceptance positive affirmation integral. Kirlian photography vitamix seventh generation hemp seed, embracing and moving towards Big Sur. My brothers and sisters yerba matte astrological, breatharian shamanic journey. Crystalline raw cacao promoting positive change, rain dance didgeridoo bentonite clay non-attachment gut flora karmic oneness dreamwork rediscovery. Namaste."
    }
];


const btns = document.querySelectorAll("button");
const currentContent = document.querySelector(".current-content");


        currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].imgUrl}">
                                    <p>${resources[0].body}</p>
                                    </article>` ;

/*CREATING EVENT-HANDLER*/
function contentLoader(ev) {
    /*console.log("content loader works");*/
    let eventTarget = ev.target.textContent;
    console.log(eventTarget.textContent);

    if (eventTarget === "button 1") {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].imgUrl}">
                                    <p>${resources[0].body}</p>
                                    </article>` ;
    } else if (eventTarget === "button 2") {
                currentContent.innerHTML = `<article>
                                    <h2>${resources[1].heading}</h2>
                                    <img src="${resources[1].imgUrl}">
                                    <p>${resources[1].body}</p>
                                    </article>` ;
    } else {
                currentContent.innerHTML = `<article>
                                    <h2>${resources[2].heading}</h2>
                                    <img src="${resources[2].imgUrl}">
                                    <p>${resources[2].body}</p>
                                    </article>` ;
    }
      
    
    for(let btn of btns) {
        if (btn.id){
            
            btn.removeAttribute("id");
            
        }
    }
    ev.currentTarget.id = "active";

}

btns[0].addEventListener("click", contentLoader);
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
