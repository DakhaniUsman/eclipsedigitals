const hiddenElements = document.querySelectorAll(".hidden");

console.log(hiddenElements);

// create an Intersection Observer

const observer = new IntersectionObserver(
    (enteries, observer) => {
        enteries.forEach(entry => {
            if(entry.isIntersecting){
                console.log("is Intersecting")

                // add the animate class to trigger animation
                entry.target.classList.add("animate");

                observer.unobserve(entry.target);
            }
        });
    },{threshold : 0.35} // trigger when 20% of the element is visible
);

hiddenElements.forEach(element => {
    observer.observe(element);
});
