/* =========================================
   CFS GLOBAL JAVASCRIPT
========================================= */

gsap.registerPlugin(ScrollTrigger);


/* ================= NAV ================= */

const nav = document.querySelector(".nav");

if(nav){

    gsap.from(nav,{
        y:-80,
        opacity:0,
        duration:.8,
        ease:"power3.out"
    });

}


/* ================= MOBILE MENU ================= */

const menu = document.querySelector(".menu");
const links = document.querySelector(".nav-links");

if(menu && links){

    menu.addEventListener("click",()=>{

        if(links.classList.contains("mobile-open")){

            links.classList.remove("mobile-open");

            gsap.to(links,{
                opacity:0,
                y:-10,
                duration:.2,
                onComplete:()=>{
                    links.style.display="none";
                }
            });

        }else{

            links.style.display="flex";

            links.style.position="absolute";
            links.style.top="76px";
            links.style.left="0";
            links.style.right="0";

            links.style.padding="25px";

            links.style.flexDirection="column";

            links.style.background="rgba(5,5,5,.96)";

            links.style.backdropFilter="blur(20px)";

            links.classList.add("mobile-open");

            gsap.fromTo(links,
                {
                    opacity:0,
                    y:-10
                },
                {
                    opacity:1,
                    y:0,
                    duration:.3
                }
            );

        }

    });

}


/* ================= HERO ================= */

gsap.from(".hero-kicker",{
    opacity:0,
    y:20,
    filter:"blur(8px)",
    duration:.8,
    delay:.1,
    ease:"power3.out"
});

gsap.from(".hero h1",{
    opacity:0,
    x:-50,
    filter:"blur(12px)",
    duration:1,
    delay:.2,
    ease:"power4.out"
});

gsap.from(".hero-copy",{
    opacity:0,
    y:25,
    duration:.7,
    delay:.65,
    ease:"power3.out"
});

gsap.from(".hero-buttons",{
    opacity:0,
    y:20,
    duration:.7,
    delay:.8,
    ease:"power3.out"
});

gsap.from(".hero-stats",{
    opacity:0,
    y:20,
    duration:.7,
    delay:1,
    ease:"power3.out"
});


/* ================= INNER PAGE HERO ================= */

gsap.from(".inner-content > *",{
    opacity:0,
    y:35,
    filter:"blur(8px)",
    duration:.8,
    stagger:.1,
    ease:"power3.out"
});


/* ================= REVEALS ================= */

document.querySelectorAll(".reveal").forEach((element)=>{

    gsap.to(element,{

        opacity:1,

        y:0,

        duration:.9,

        ease:"power3.out",

        scrollTrigger:{
            trigger:element,
            start:"top 84%",
            once:true
        }

    });

});


document.querySelectorAll(".reveal-left").forEach((element)=>{

    gsap.to(element,{

        opacity:1,

        x:0,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{
            trigger:element,
            start:"top 84%",
            once:true
        }

    });

});


/* ================= PARALLAX ================= */

const heroImage=document.querySelector(".hero-bg img");

if(heroImage){

    gsap.to(heroImage,{

        yPercent:12,

        ease:"none",

        scrollTrigger:{
            trigger:".hero",
            start:"top top",
            end:"bottom top",
            scrub:1
        }

    });

}


/* ================= MARQUEE ================= */

const marquee=document.querySelector(".marquee");

if(marquee){

    gsap.to(marquee,{

        xPercent:-25,

        duration:25,

        repeat:-1,

        ease:"none"

    });

}


/* ================= HORIZONTAL SHOWCASE ================= */

const horizontal=document.querySelector(".horizontal-track");

if(horizontal){

    gsap.to(horizontal,{

        xPercent:-25,

        ease:"none",

        scrollTrigger:{
            trigger:".horizontal-showcase",
            start:"top bottom",
            end:"bottom top",
            scrub:1
        }

    });

}


/* ================= MAGNETIC BUTTONS ================= */

document.querySelectorAll(".magnetic").forEach(button=>{

    button.addEventListener("mousemove",(event)=>{

        const rect=button.getBoundingClientRect();

        const x=
            event.clientX -
            rect.left -
            rect.width/2;

        const y=
            event.clientY -
            rect.top -
            rect.height/2;

        gsap.to(button,{

            x:x*.18,
            y:y*.18,

            duration:.3,

            ease:"power2.out"

        });

    });


    button.addEventListener("mouseleave",()=>{

        gsap.to(button,{

            x:0,
            y:0,

            duration:.7,

            ease:"elastic.out(1,.4)"

        });

    });

});


/* ================= 3D CARD TILT ================= */

document.querySelectorAll(
    ".glass-card,.result-card,.price-card"
).forEach(card=>{

    card.addEventListener("mousemove",(event)=>{

        const rect=card.getBoundingClientRect();

        const x=
            (event.clientX-rect.left)/
            rect.width-.5;

        const y=
            (event.clientY-rect.top)/
            rect.height-.5;

        gsap.to(card,{

            rotateY:x*5,
            rotateX:-y*5,

            transformPerspective:900,

            duration:.45,

            ease:"power2.out"

        });

    });


    card.addEventListener("mouseleave",()=>{

        gsap.to(card,{

            rotateY:0,
            rotateX:0,

            duration:.7,

            ease:"power3.out"

        });

    });

});


/* ================= COUNTERS ================= */

document.querySelectorAll(".counter").forEach(counter=>{

    const target=Number(
        counter.dataset.target
    );

    ScrollTrigger.create({

        trigger:counter,

        start:"top 85%",

        once:true,

        onEnter:()=>{

            gsap.to(counter,{

                innerText:target,

                duration:1.8,

                snap:{
                    innerText:1
                },

                ease:"power4.out"

            });

        }

    });

});


/* ================= FAQ ================= */

document.querySelectorAll(".faq-button")
.forEach(button=>{

    button.addEventListener("click",()=>{

        const item=
            button.closest(".faq-item");

        document
            .querySelectorAll(".faq-item")
            .forEach(other=>{

                if(other!==item){
                    other.classList.remove("open");
                }

            });

        item.classList.toggle("open");

    });

});


/* ================= BEFORE / AFTER ================= */

const transform=
    document.querySelector(".transform-box");

if(transform){

    const before=
        transform.querySelector(".transform-before");

    const after=
        transform.querySelector(".transform-after");

    const line=
        transform.querySelector(".transform-line");

    const handle=
        transform.querySelector(".transform-handle");

    let dragging=false;


    function updateSlider(clientX){

        const rect=
            transform.getBoundingClientRect();

        let position=
            ((clientX-rect.left)/rect.width)*100;

        position=
            Math.max(
                3,
                Math.min(97,position)
            );


        before.style.clipPath=
            `inset(0 ${100-position}% 0 0)`;

        after.style.clipPath=
            `inset(0 0 0 ${position}%)`;

        line.style.left=
            position+"%";

        handle.style.left=
            position+"%";

    }


    transform.addEventListener(
        "pointerdown",
        event=>{

            dragging=true;

            transform.setPointerCapture(
                event.pointerId
            );

            updateSlider(event.clientX);

        }
    );


    transform.addEventListener(
        "pointermove",
        event=>{

            if(dragging){

                updateSlider(
                    event.clientX
                );

            }

        }
    );


    transform.addEventListener(
        "pointerup",
        ()=>{

            dragging=false;

        }
    );

}


/* ================= THREE.JS ================= */

const canvas=
    document.getElementById("hero3d");

if(canvas && typeof THREE!=="undefined"){

    const scene=
        new THREE.Scene();


    const camera=
        new THREE.PerspectiveCamera(
            55,
            canvas.clientWidth/
            canvas.clientHeight,
            .1,
            100
        );


    camera.position.z=5;


    const renderer=
        new THREE.WebGLRenderer({

            canvas:canvas,

            alpha:true,

            antialias:true

        });


    renderer.setPixelRatio(
        Math.min(
            window.devicePixelRatio,
            2
        )
    );


    renderer.setSize(
        canvas.clientWidth,
        canvas.clientHeight,
        false
    );


    /* ================= PARTICLES ================= */

    const particleGeometry=
        new THREE.BufferGeometry();

    const particleCount=700;

    const positions=
        new Float32Array(
            particleCount*3
        );


    for(
        let i=0;
        i<particleCount;
        i++
    ){

        positions[i*3]=
            (Math.random()-.5)*5;

        positions[i*3+1]=
            (Math.random()-.5)*5;

        positions[i*3+2]=
            (Math.random()-.5)*5;

    }


    particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(
            positions,
            3
        )
    );


    const particleMaterial=
        new THREE.PointsMaterial({

            color:0xb7ff19,

            size:.025,

            transparent:true,

            opacity:.7

        });


    const particleSystem=
        new THREE.Points(
            particleGeometry,
            particleMaterial
        );


    scene.add(particleSystem);


    /* ================= CHROME RINGS ================= */

    const ringGroup=
        new THREE.Group();


    for(let i=0;i<4;i++){

        const geometry=
            new THREE.TorusGeometry(
                1.25+i*.13,
                .025,
                16,
                100
            );


        const material=
            new THREE.MeshBasicMaterial({

                color:
                    i%2===0
                    ?0xb7ff19
                    :0xffffff,

                transparent:true,

                opacity:
                    i%2===0
                    ?.45
                    :.16

            });


        const ring=
            new THREE.Mesh(
                geometry,
                material
            );


        ring.rotation.x=
            Math.random()*Math.PI;

        ring.rotation.y=
            Math.random()*Math.PI;


        ringGroup.add(ring);

    }


    scene.add(ringGroup);


    /* ================= CENTRAL OBJECT ================= */

    const knotGeometry=
        new THREE.TorusKnotGeometry(
            1.05,
            .055,
            120,
            16
        );


    const knotMaterial=
        new THREE.MeshBasicMaterial({

            color:0xb7ff19,

            wireframe:true,

            transparent:true,

            opacity:.32

        });


    const knot=
        new THREE.Mesh(
            knotGeometry,
            knotMaterial
        );


    scene.add(knot);


    /* ================= MOUSE ================= */

    let mouseX=0;
    let mouseY=0;

    window.addEventListener(
        "mousemove",
        event=>{

            mouseX=
                event.clientX/
                window.innerWidth-.5;

            mouseY=
                event.clientY/
                window.innerHeight-.5;

        }
    );


    /* ================= ANIMATION ================= */

    function animate(){

        requestAnimationFrame(
            animate
        );


        particleSystem.rotation.y+=.0007;

        particleSystem.rotation.x+=.0002;


        ringGroup.rotation.x+=.001;

        ringGroup.rotation.y+=.002;


        knot.rotation.x+=.003;

        knot.rotation.y+=.004;


        ringGroup.rotation.y+=
            mouseX*.002;

        ringGroup.rotation.x+=
            mouseY*.001;


        renderer.render(
            scene,
            camera
        );

    }


    animate();


    /* ================= RESIZE ================= */

    window.addEventListener(
        "resize",
        ()=>{

            const width=
                canvas.clientWidth;

            const height=
                canvas.clientHeight;


            camera.aspect=
                width/height;

            camera.updateProjectionMatrix();


            renderer.setSize(
                width,
                height,
                false
            );

        }
    );

          }
