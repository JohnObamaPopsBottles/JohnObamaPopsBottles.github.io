particlesJS("particles", {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 1200
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "star",
            stroke: {
                width: 1,
                color: "#ffffff"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 2,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        eventd: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

window.addEventListener('scroll', function() {
    var scrollTopButton = this.document.querySelector('.scroll-Top');
    if(this.window.pageYOffset > 200){
        scrollTopButton.computedStyleMap.display = 'block';
    }else{
        scrollTopButton.style.display = 'none';
    }
});