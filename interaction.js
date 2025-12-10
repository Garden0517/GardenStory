const animationSections = document.querySelectorAll('.scene0, .scene1, .scene2, .scene3, .scene4, .scene5, .scene6, .scene7, .scene8, .scene9, .scene10');

const MAX_PROGRESS_THRESHOLD = 0.99;

function updateAnimation() {
    const windowHeight = window.innerHeight;

    animationSections.forEach(animationSection => {
        const rect = animationSection.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        const progress = Math.max(
            0,
            Math.min(
                1,
                -sectionTop / (sectionHeight - windowHeight)
            )
        );

        // 2. 'scroll-out' 클래스 토글 (공통 로직)
        const currentSVG = animationSection.querySelector('svg');
        if (currentSVG) {
            if (progress > 0 && progress < MAX_PROGRESS_THRESHOLD) {
                currentSVG.style.opacity = 1;
                currentSVG.classList.add("active1")
            } else {
                currentSVG.style.opacity = 0;
                currentSVG.classList.add("active")
            }
        }

        // 2. 'scroll-out' 클래스 토글 (고정 해제)
        if (progress >= MAX_PROGRESS_THRESHOLD) {
            animationSection.classList.add('scroll-out');
        } else {
            animationSection.classList.remove('scroll-out');
        }

        // 3. 섹션별 애니메이션 적용
        if (animationSection.classList.contains('scene0')) {
            animateScene0(progress);
        } else if (animationSection.classList.contains('scene1')) {
            animateScene1(progress);
        } else if (animationSection.classList.contains('scene2')) {
            animateScene2(progress);
        } else if (animationSection.classList.contains('scene3')) {
            animateScene3(progress);
        } else if (animationSection.classList.contains('scene4')) {
            animateScene4(progress);
        } else if (animationSection.classList.contains('scene5')) {
            animateScene5(progress);
        } else if (animationSection.classList.contains('scene6')) {
            animateScene6(progress);
        } else if (animationSection.classList.contains('scene7')) {
            animateScene7(progress);
        } else if (animationSection.classList.contains('scene8')) {
            animateScene8(progress);
        } else if (animationSection.classList.contains('scene9')) {
            animateScene9(progress);
        } else if (animationSection.classList.contains('scene10')) {
            animateScene10(progress);
        }
        
    });
}

const scene0Element = document.querySelector('.scene0');
const firstleave = scene0Element.querySelector('.leave1');

function animateScene0(progress) {
    
    if (progress <= 0.4) {
        const stage1Progress = progress / 0.4;

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage1Progress, 3); 

        const startScale = 0;
        const endScale = 1;
        const currentScale = startScale + (endScale - startScale) * eased;

        firstleave.style.opacity = eased;
        firstleave.style.transform = `scale(${currentScale})`;
    }
}

const scene1Element = document.querySelector('.scene1');
const Myseed = scene1Element.querySelector('.Myseed');
const Myseed1 = scene1Element.querySelector('.Myseed1');
const grassesGroup = scene1Element.querySelector('.grasses');
const seedsGroup = scene1Element.querySelector('.seeds');

function animateScene1(progress) {
    
    if (progress <= 0.3) {
        const stage1Progress = progress / 0.3;

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage1Progress, 3); 

        // seeds Y축
        const startY = -84;
        const endY = 0;
        const currentY = startY + (endY - startY) * eased;

        seedsGroup.style.transform = `translateY(${currentY}px)`;

        grassesGroup.style.opacity = 0;
        Myseed1.style.opacity = 0;


    } else if (progress > 0.4 && progress <= 0.6) {
        const stage2Progress = (progress - 0.4) / 0.2; // (progress - 0.3) / (0.6 - 0.3)

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage2Progress, 3); 

        // grasses Scale값
        const startScale = 0.95;
        const endScale = 1;
        const currentScale = startScale + (endScale - startScale) * eased;

        grassesGroup.style.opacity = eased;
        grassesGroup.style.transform = `scale(${currentScale})`;

        // Myseed 위치값 변경
        const startY = 0;
        const endY = -13;
        const currentY = startY + (endY - startY) * eased;
        
        Myseed.style.opacity = 1;
        Myseed.style.transform = `translateY(${currentY}px)`;

    }
    else {
        const stage3Progress = (progress - 0.6) / 0.4; 

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage3Progress, 3);

        // Myseed 위치값 변경
        const startY = -13;
        const endY = 32;
        const currentY = startY + (endY - startY) * eased;
        
        Myseed.style.opacity = 0;
        Myseed1.style.transform = `translateY(${currentY}px)`
        Myseed1.style.opacity = 1;
    }
}

const scene2Element = document.querySelector('.scene2');
const sun = scene2Element.querySelector('.sun');
const Myseed2 = scene2Element.querySelector('.Myseed');
const hole = scene2Element.querySelector('.hole');

function animateScene2(progress) {
    
    if (progress <= 0.2) {
        const stage1Progress = progress / 0.2;

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage1Progress, 3); 

        // Myseed2 Y축
        const startY = -84;
        const endY = 0;
        const currentY = startY + (endY - startY) * eased;

        hole.style.opacity = 0;
        Myseed2.style.transform = `translateY(${currentY}px)`;

        

    } else if (progress > 0.2 && progress <= 0.5) {

        sun.classList.add('sun-move');
        Myseed2.classList.add('seed-move')

    } else if (progress > 0.5 && progress <= 0.7) {
        const stage2Progress = (progress - 0.5) / 0.2; // (progress - 0.3) / (0.6 - 0.3)

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage2Progress, 3); 

        Myseed2.classList.remove('seed-move')

        // hole Scale값
        const startScale = 0;
        const endScale = 1;
        const currentScale = startScale + (endScale - startScale) * eased;

        hole.style.transform = `scale(${currentScale})`;
        hole.style.opacity = 1;

    }
    else {
        const stage3Progress = (progress - 0.7) / 0.3; 

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage3Progress, 3);

        Myseed2.classList.remove('seed-move')

        // hole 위치
        const startY = 0;
        const endY = 20;
        const currentY = startY + (endY - startY) * eased;

        Myseed2.style.transform = `translateY(${currentY}px)`;
    }
}

const scene3Element = document.querySelector('.scene3');
const Myseed3 = scene3Element.querySelector('.seed');

function animateScene3(progress) {
    
    if (progress <= 0.6) {
        const stage1Progress = progress / 0.6;

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage1Progress, 3); 

        // 씨앗 사이즈
        const startScale = 0;
        const endScale = 1;
        const currentScale = startScale + (endScale - startScale) * eased;

        Myseed3.style.transform = `scale(${currentScale})`

    } 
    else {
        const stage3Progress = (progress - 0.6) / 0.4; 

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage3Progress, 3);

        const startY = 0;
        const endY = 50;
        const currentY = startY + (endY - startY) * eased;

        Myseed3.style.transform = `translateY(${currentY}px)`;
    }
}

const scene4Element = document.querySelector('.scene4');
const seedShadow = scene4Element.querySelector('.seedShadow');
const grassShadow = scene4Element.querySelector('.grassShadow');
const water = scene4Element.querySelector('.water');
const Myseed4 = scene4Element.querySelector('.seeds');

function animateScene4(progress) {
    
    if (progress <= 0.2) {
        const stage1Progress = progress / 0.2;

                // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage1Progress, 3); ;

        // water Scale값
        // const startScale = 1;
        // const endScale = 2;
        // const currentScale = startScale + (endScale - startScale) * eased;


        seedShadow.style.opacity = 0;
        grassShadow.style.opacity = 0;
        
        Myseed4.style.transform = `translateY(0px)`
        Myseed4.style.opacity = 0

        water.classList.add('wave-water')

        // water.style.transform = `scale(${currentScale})`;

    } else if (progress > 0.2 && progress <= 0.5) {
        const stage2Progress = (progress - 0.2) / 0.3; // (progress - 0.3) / (0.6 - 0.3)

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage2Progress, 3); 

        seedShadow.style.opacity = 1;

        // seedShadow 위치값 변경
        const startY = -20;
        const endY = 0;
        const currentY = startY + (endY - startY) * eased;

        seedShadow.style.transform = `translateY(${currentY}px)`;


    } else if (progress > 0.5 && progress <= 0.7) {
        const stage3Progress = (progress - 0.5) / 0.2; // (progress - 0.3) / (0.6 - 0.3)

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage3Progress, 3); 

        grassShadow.style.opacity = 1;

        // grassShadow 사이즈
        const startScale = 0;
        const endScale = 1;
        const currentScale = startScale + (endScale - startScale) * eased;

        grassShadow.style.transform = `scale(${currentScale})`

    }
    else {
        const stage4Progress = (progress - 0.7) / 0.3; 

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage4Progress, 3);

        // Myseed4 Y축
        const startY = -84;
        const endY = 25;
        const currentY = startY + (endY - startY) * eased;

        Myseed4.style.opacity = 1
        Myseed4.style.transform = `translateY(${currentY}px)`
    }
}

const scene5Element = document.querySelector('.scene5');
const rain = scene5Element.querySelector('.rain');
const sun5 = scene5Element.querySelector('.sun5');
const Myseed5 = scene5Element.querySelector('.seeds');

function animateScene5(progress) {
    
    if (progress <= 0.3) {
        const stage1Progress = progress / 0.3;

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage1Progress, 3); ;

        // Myseed5 위치값 변경
        const startY = -80;
        const endY = 0;
        const currentY = startY + (endY - startY) * eased;

        Myseed5.style.transform = `translateY(${currentY}px)`;

        rain.style.opacity = 0
        sun5.style.opacity = 0;


    } else if (progress > 0.4 && progress <= 0.6) {
        const stage2Progress = (progress - 0.4) / 0.2; // (progress - 0.3) / (0.6 - 0.3)

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage2Progress, 3); 

        rain.style.opacity = eased

        // rain 위치값 변경
        // const startY = -50;
        // const endY = 0;
        // const currentY = startY + (endY - startY) * eased;
        
        // rain.style.transform = `translateY(${currentY}px)`;

        rain.classList.add('drop-rain')
        sun5.style.opacity = 0;
    }
    else {
        const stage3Progress = (progress - 0.6) / 0.4; 

        rain.style.opacity = 0;
        rain.classList.remove('drop-rain')

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage3Progress, 3);

        // sun5 Scale값
        const startScale = 0;
        const endScale = 1;
        const currentScale = startScale + (endScale - startScale) * eased;
        
        sun5.style.transform = `scale(${currentScale})`;
        sun5.style.opacity = eased;
    }
}

const scene6Element = document.querySelector('.scene6');
const leave1 = scene6Element.querySelector('.leave1');
const leave2 = scene6Element.querySelector('.leave2');
const blueFlower = scene6Element.querySelector('.blueFlower');
const pinkFlower = scene6Element.querySelector('.pinkFlower');
const yellowFlower = scene6Element.querySelector('.yellowFlower');

function animateScene6(progress) {
    
    if (progress <= 0.3) {
        const stage1Progress = progress / 0.3;

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage1Progress, 3); ;

        // leave1 위치값 변경
        const startScale = 0;
        const endScale = 1;
        const currentScale = startScale + (endScale - startScale) * eased;
        
        leave1.style.transform = `scale(${currentScale})`;
        leave1.style.opacity = eased

        leave2.style.opacity = 0;
        blueFlower.style.opacity = 0;
        pinkFlower.style.opacity = 0;
        yellowFlower.style.opacity = 0;


    } else if (progress > 0.4 && progress <= 0.6) {
        const stage2Progress = (progress - 0.4) / 0.2; // (progress - 0.3) / (0.6 - 0.3)

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage2Progress, 3); 

        // leave2 스케일 변경
        const startScale = 0;
        const endScale = 1;
        const currentScale = startScale + (endScale - startScale) * eased;
        
        leave2.style.transform = `scale(${currentScale})`;
        leave2.style.opacity = eased

        blueFlower.style.opacity = 0;
        pinkFlower.style.opacity = 0;
        yellowFlower.style.opacity = 0;
    }
    else {
        const stage3Progress = (progress - 0.6) / 0.4; 
        
        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage3Progress, 3);

        blueFlower.style.opacity = eased;
        pinkFlower.style.opacity = eased;
        yellowFlower.style.opacity = eased;
    }
}

const scene7Element = document.querySelector('.scene7');
const wood = scene7Element.querySelector('.wood');
const deepleave = scene7Element.querySelector('.deepleave');
const shallowleave = scene7Element.querySelectorAll('.shallowleave');
const appleGroup = scene7Element.querySelector('.apple');
const apples = scene7Element.querySelectorAll('circle');
const img01 = scene7Element.querySelector('.img1');

function animateScene7(progress) {
    
    if (progress <= 0.2) {
        const stage1Progress = progress / 0.2;

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage1Progress, 3); ;

        // wood 위치값 변경
        const startScale = 0;
        const endScale = 1;
        const currentScale = startScale + (endScale - startScale) * eased;
        
        wood.style.transform = `scale(${currentScale})`;

        deepleave.style.opacity = 0;
        shallowleave.forEach(leaf => {
            leaf.style.opacity = 0;
        });
        appleGroup.style.opacity = 0;
        img01.style.opacity = 0;


    } else if (progress > 0.2 && progress <= 0.4) {
        const stage2Progress = (progress - 0.2) / 0.2; // (progress - 0.3) / (0.6 - 0.3)

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage2Progress, 3); 

        deepleave.style.opacity = eased
        
        // deepleave 스케일 변경
        const startScale = 0;
        const endScale = 1;
        const currentScale = startScale + (endScale - startScale) * eased;
        
        deepleave.style.transform = `scale(${currentScale})`;
    }
    else if (progress > 0.4 && progress <= 0.7) {
        const stage2Progress = (progress - 0.4) / 0.3; // (progress - 0.3) / (0.6 - 0.3)

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage2Progress, 3); 

        shallowleave.forEach(leaf => {
            leaf.style.opacity = eased;
        });
        img01.style.opacity = eased

        const startScale1 = 0;
        const endScale1 = 1;
        const currentScale1 = startScale1 + (endScale1 - startScale1) * eased;
        
        img01.style.transform = `scale(${currentScale1})`;

        // deepleave 스케일 변경
        const startScale = 0;
        const endScale = 1;
        const currentScale = startScale + (endScale - startScale) * eased;
        
        shallowleave.forEach(leaf => {
            leaf.style.opacity = eased;
            leaf.style.transform = `scale(${currentScale})`;
        });
        appleGroup.style.opacity = eased

        apples.forEach(circle => {
            circle.classList.add('apple-move')
        });
    }
    else {
        const stage3Progress = (progress - 0.7) / 0.3; 
        
        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage3Progress, 3);

        // img1 위치값 변경
        const startY = 0;
        const endY = 70;
        const currentY = startY + (endY - startY) * eased;

        img01.style.transform = `translateY(${currentY}px)`;
    }
}

const scene8Element = document.querySelector('.scene8');
const img1 = scene8Element.querySelector('.img1');
const img2 = scene8Element.querySelector('.img2');
const img3 = scene8Element.querySelector('.img3');
const img4 = scene8Element.querySelector('.img4');
const right = scene8Element.querySelector('.right');
const left = scene8Element.querySelector('.left');

function animateScene8(progress) {
    
    if (progress <= 0.3) {
        const stage1Progress = progress / 0.3;

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage1Progress, 3); ;

        // right  left 위치값 변경
        const startY = 20;
        const endY = 0;
        const currentY = startY + (endY - startY) * eased;

        right.style.transform = `translateY(${currentY}px)`;

        const startY1 = 20;
        const endY1 = 0;
        const currentY1 = startY1 + (endY1 - startY1) * eased;

        left.style.transform = `translateY(${currentY1}px)`;

        img1.style.opacity = 0;
        img2.style.opacity = 0;
        img3.style.opacity = 0;
        img4.style.opacity = 0;


    } else if (progress > 0.4 && progress <= 0.6) {
        const stage2Progress = (progress - 0.4) / 0.2; // (progress - 0.3) / (0.6 - 0.3)

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage2Progress, 3); 

        // img1 위치값 변경
        const startY = -40;
        const endY = 13;
        const currentY = startY + (endY - startY) * eased;

        img1.style.transform = `translateY(${currentY}px) scale(0.7)`;
        img1.style.opacity = eased
    }
    else {
        const stage3Progress = (progress - 0.6) / 0.4; 
        
        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage3Progress, 3);
        img2.style.opacity = eased;
        img3.style.opacity = eased;
        img4.style.opacity = eased;
    }
}

const scene9Element = document.querySelector('.scene9');
const tree = scene9Element.querySelector('.tree');
const flower = scene9Element.querySelector('.flower');
const leave = scene9Element.querySelector('.leave');

function animateScene9(progress) {
    
    if (progress <= 0.3) {
        const stage1Progress = progress / 0.3;

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage1Progress, 3); ;

        const startScale1 = 0;
        const endScale1 = 1;
        const currentScale1 = startScale1 + (endScale1 - startScale1) * eased;
        
        tree.style.transform = `scale(${currentScale1})`;

        tree.style.opacity = eased;
        flower.style.opacity = 0;
        leave.style.opacity = 0;

    } else if (progress > 0.4 && progress <= 0.6) {
        const stage2Progress = (progress - 0.4) / 0.2; // (progress - 0.3) / (0.6 - 0.3)

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage2Progress, 3); 

        const startScale1 = 0;
        const endScale1 = 1;
        const currentScale1 = startScale1 + (endScale1 - startScale1) * eased;
        
        leave.style.transform = `scale(${currentScale1})`;

        leave.style.opacity = eased;
        flower.style.opacity = 0;
    }
    else {
        const stage3Progress = (progress - 0.6) / 0.4; 
        
        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage3Progress, 3);
        const startScale1 = 0;
        const endScale1 = 1;
        const currentScale1 = startScale1 + (endScale1 - startScale1) * eased;
        
        flower.style.transform = `scale(${currentScale1})`;

        flower.style.opacity = eased;
    }
}

const scene10Element = document.querySelector('.scene10');
const leave10 = scene10Element.querySelector('.leave10');
const all = scene10Element.querySelector('.all');

function animateScene10(progress) {
    
    if (progress <= 0.4) {
        const stage1Progress = progress / 0.4;

        // Ease-out 효과 적용
        const eased = 1 - Math.pow(1 - stage1Progress, 3); 

        const startScale = 1;
        const endScale = 0;
        const currentScale = startScale + (endScale - startScale) * eased;

        leave10.style.transform = `scale(${currentScale})`;
    }else {
        all.classList.add("active1")
    }
}

window.addEventListener('scroll', updateAnimation);
updateAnimation(); // 페이지 로드 시 초기 위치 설정