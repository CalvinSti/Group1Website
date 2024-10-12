window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    const infos = document.querySelectorAll('.info, .info1, .info6, .info7, .info8, .info9, .info10, .info11, .info12, .info13, .info14, .info15, .info16, .info17, .info18');
    const infos1 = document.querySelectorAll('.info1');
    const infos2 = document.querySelectorAll('.info2');
    const infos3= document.querySelectorAll('.info3');
    const infos4 = document.querySelectorAll('.info4');
    const infos5 = document.querySelectorAll('.info5');
    const infos6 = document.querySelectorAll('.info6');
    const infos7 = document.querySelectorAll('.info7');
    const infos8 = document.querySelectorAll('.info8');
    const infos9 = document.querySelectorAll('.info9');
    const infos10 = document.querySelectorAll('.info10');
    const infos11 = document.querySelectorAll('.info11');
    const infos12 = document.querySelectorAll('.info12');
    const infos13 = document.querySelectorAll('.info13');
    const infos14 = document.querySelectorAll('.info14');
    const infos15 = document.querySelectorAll('.info15');
    const infos16 = document.querySelectorAll('.info16');
    const infos17 = document.querySelectorAll('.info17');
    const infos18= document.querySelectorAll('.info18');
    const infos19 = document.querySelectorAll('.info19');
    const yearBlocks = document.querySelectorAll('.year-block');
    const lines = document.querySelectorAll('.line');
    const yearlabel004 = document.querySelectorAll('.year-label2004');
    const yearlabel016 = document.querySelectorAll('.year-label2016');
    
    infos.forEach(info => {
        const speedFactor = -2;
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos1.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos2.forEach(info => {
        const speedFactor = -4;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos3.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos4.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos5.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos6.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos7.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos8.forEach(info => {
        const speedFactor = -4;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos9.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos10.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos11.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos12.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos13.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos14.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos15.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos16.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos17.forEach(info => {
        const speedFactor = -2;  
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos18.forEach(info => {
        const speedFactor = -2; 
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    infos19.forEach(info => {
        const speedFactor = -2;
        info.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });





    
    yearBlocks.forEach(yearBlock => {
        const speedFactor = -2.5;
        yearBlock.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });

    lines.forEach(line => {
        const speedFactor = -0.05;
        line.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    yearlabel004.forEach(yearlabel04 => {
        const speedFactor = -0.07;
        yearlabel04.style.transform = `translateY(${scrollPosition * speedFactor}px)`;
    });
    yearlabel016.forEach(yearlabel06 => {
        const speedFactor = -0.06;
        yearlabel06.style.transform = `translateY(${scrollPosition * speedFactor}px)`;    
    }); // Haha //
});