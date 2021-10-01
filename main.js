const tabItems = document.querySelectorAll('.tabItem');
const tabContentItems = document.querySelectorAll('.tabContentItem');

// Selected tab
function selectItem(e) {
    removeBorder();
    removeShow();
    //Add border to selected Tab
    this.classList.add('tabBorder');
    //Get content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}Content`);
    //Add show class
    tabContentItem.classList.add('show');
}

// Function to remove bottom border from all
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tabBorder'));
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for Click on Tab
tabItems.forEach(item => item.addEventListener('click', selectItem));


//Background Move on Mouse
const showcase = document.getElementById('scaseContainer');
const showContainer = document.querySelector('.showcase');
const title = document.querySelector('.title');
const slogan = document.querySelector('.showcaseContent p');
const watchBtn = document.querySelector('.watchFree');
const logo = document.querySelector('.showcaseTop img');
const smallBtn = document.querySelector('.signIn');


//Mouse Move Effect
showContainer.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
    showcase.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


//Mouse Enter Main Container
showContainer.addEventListener('mouseenter', (e) => {
    showcase.style.transition = "none";
    title.style.transform = "translateZ(75px)";
    slogan.style.transform = "translateZ(125px)";
    watchBtn.style.transform = "translateZ(150px)";
})


//Mouse Exit Container

showContainer.addEventListener('mouseleave', (e) => {
    showcase.style.transition = 'all 0.5s ease';
    showcase.style.transform = 'rotateY(0deg) rotateX(0deg)';
    title.style.transform = 'translateZ(0px)';
    slogan.style.transform = 'translateZ(0px)';
    watchBtn.style.transform = 'translateZ(0px)';
});


//Mouse Enter Btn
const stopTilt = (item) => {
    item.addEventListener('mouseenter', () => {
        showcase.style.transition = 'all 0.5s ease';
        showcase.style.transform = 'rotateY(0deg) rotateX(0deg)';
        title.style.transform = 'translateZ(0px)';
        slogan.style.transform = 'translateZ(0px)';
        watchBtn.style.transform = 'translateZ(0px)';
        smallBtn.classList.add('active');
    });
    item.addEventListener('mouseleave', () => {
        showcase.style.transition = "none";
        title.style.transform = "translateZ(75px)";
        slogan.style.transform = "translateZ(125px)";
        watchBtn.style.transform = 'translateZ(150px)';
        smallBtn.classList.remove('active');
    });
};
stopTilt(watchBtn);


//Alert for Forms

const signIn = document.getElementById('signIn');
const signInBtn = document.querySelector('.signIn');

const signInBox = (trigger, event) => {
    trigger.addEventListener(event, () => {
        alert('Visit the Forms page of my portfolio to view all forms');
    })
};

signInBox(signIn, 'click');
signInBox(signInBtn, 'click');



//Toggle function
const toggle = (trigger, event, item, addClass) => {
    trigger.addEventListener(event, () => {
        item.classList.toggle(addClass);
    });
};


