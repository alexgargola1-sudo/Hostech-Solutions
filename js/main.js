window.addEventListener('scroll', () => {

const header = document.querySelector('header');

if(window.scrollY > 50){
header.style.background = '#020812';
}else{
header.style.background = '#05101d';
}

});
const counters = document.querySelectorAll('.counter');

const animateCounters = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute('data-target');

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if(count < target){

                count += increment;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target + '+';

            }

        };

        updateCounter();

    });

};

const statsSection = document.querySelector('.stats');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            animateCounters();

            observer.disconnect();

        }

    });

});

observer.observe(statsSection);
