const header = document.querySelector('header');
const sectionOne = document.querySelector('.landing-page');
const navList =document.querySelector('.navbar-list')


const secOneOptions = {
    rootMargin:"-200px 0px 0px 0px"
};

const secOneObserver= new IntersectionObserver((entries,secOneObserver)=>{

        entries.forEach(entry=>{
            if(!entry.isIntersecting)
            {
                header.classList.add('scroll-theme');
                navList.classList.add('black');
            }
            else{
                header.classList.remove('scroll-theme');
                navList.classList.remove('black');

            }
        })
},secOneOptions);

secOneObserver.observe(sectionOne);