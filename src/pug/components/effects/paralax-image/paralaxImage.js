const transformationValues = (type) => {
    switch (type) {
        case 'tablet':
            return {
                from: {
                    y: 0,
                },
                to: {
                    y: 0,
                }
            }

        default:
            return {
                from: {},
                to: {}
            }
    }
}

/**
 * 
 * @param {HTMLElement} container - must be with 
 * .paralax-image-wrapper-transform>.paralax-image-wrapper-scale>img Elements in
 * @param {string} deviceType  - dektop|tablet|mobile
 * @param {Function} gsap - must be with registered Scrolltrigger
 */
export function paralaxImage(container, deviceType = 'desktop', gsap) {
    const el = container;
    gsap.timeline({
        defaults: {
            ease: 'none'
        },
        scrollTrigger: {
            trigger: container,
            scrub: true,
        }
    })
        .fromTo(el.querySelector('.paralax-image-wrapper-transform'), {
            y: -300,
            ...transformationValues(deviceType).from
        }, {
            y: 300,
            ...transformationValues(deviceType).to
        })
        .fromTo(el.querySelector('.paralax-image-wrapper-scale'), {
            scale: 1.4
        }, {
            scale: 1
        }, '<')
}