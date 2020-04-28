function onPageLoaded() {
    const images = document.querySelectorAll(".slider img");
    const prevBtn = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");
    const slider = document.getElementById("sliderid");

    let count = 1;
    let size = images[0].clientWidth;
    slider.style.transform = 'translateX(' + (-size * count) + 'px)';

    nextButton.addEventListener("click", function() {
        if (count >= 8) return;
        count++;
        slider.style.transform = 'translateX(' + (-size * count) + 'px)';
        slider.style.transition = "transform 1s ease-in-out";
    });

    prevBtn.onclick = function() {
        if (count <= 0) return;
        count--;
        slider.style.transform = 'translateX(' + (-size * count) + 'px)';
        slider.style.transition = "transform 1s ease-in-out";
    };

    slider.addEventListener("transitionend", () => {
        if (images[count].id == "firstImg") {
            slider.style.transition = "none";
            count = 7;
            slider.style.transform = 'translateX(' + (-size * count) + 'px)';
        }

        if (images[count].id == "lastImg") {
            slider.style.transition = "none";
            count = 1;
            slider.style.transform = 'translateX(' + (-size * count) + 'px)';
        }

    })
}

window.addEventListener("load", onPageLoaded);
