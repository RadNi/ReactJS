let head = main.getElementsByClassName("head-div");



function animate({duration,draw,timing}) {
    let start=performance.now();
    requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) {
                timeFraction = 1;
            }
            let progress = timing(timeFraction);
            draw(progress);
            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        }
    );
}




function mouseover() {
    animate({
        duration: 1000,
        timing: function (timeFraction) {
            return timeFraction*0.2 + 0.1;
        },
        draw: function (progress) {
            head[0].style.height = progress*100+"%" ;
            head[0].style.color = `rgba(0,0,0,${(progress - 0.1) * 5})`;
            credential.style.height =100 - progress * 100 + "%"
        }
    });
}






function animate2({duration, draw,timing}) {
    let start=performance.now();
    requestAnimationFrame(function animate2(time) {
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) {
                timeFraction = 1;
                console.log(head[0].style.height)
            }
            let progress = timing(timeFraction);
            draw(progress);
            if (timeFraction < 1) {
                requestAnimationFrame(animate2);
            }
        }
    );
}



function mouseout() {
    animate2({
        duration: 1000,
        timing: function (timeFraction) {
            return timeFraction * 0.2
        },
        draw: function (progress) {
            head[0].style.height = 30 - progress * 100 + '%';
            head[0].style.color = `rgba(0,0,0,${1 - 5*progress})`;
            credential.style.height = 70 + progress * 100 + "%"
        }
    });
}


head[0].addEventListener("mouseover", mouseover)

head[0].addEventListener("mouseout", mouseout)

