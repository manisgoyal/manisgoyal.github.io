var path = anime.path("#loaderLogo #logoBoundary");
const animation = anime.timeline();
animation
    .add({
        targets: "#loaderLogo #logoBoundary",
        delay: 300,
        duration: 1000,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
    })
    .add({
        targets: "#loaderLogo #signature",
        duration: 1000,
        easing: "easeInOutSine",
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: 1,
    })
animation.finished.then(() => {
    document.getElementById('meteor').style.opacity = 1;
    const loop = anime.timeline({
        loop: true,
    });
    loop.add({
        targets: "#meteor",
        translateX: path("x"),
        translateY: path("y"),
        rotate: path("angle"),
        easing: "linear",
        duration: 1500,
    });
});