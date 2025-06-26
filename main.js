const navItems = document.querySelector('.nav_items');
const openNavBtn = document.querySelector('#open_nav_button');
const closeNavBtn = document.querySelector('#close_nav_button');

const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
};

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
};

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);



//Dashboard side bar mobile 

const sidebar = document.querySelector('aside');
const showsidebarBtn = document.querySelector('#show_sidebar-btn');

const hideSidebarBtn = document.querySelector('#hide_sidebar-btn');

const showsidebar = () => {
    sidebar.style.left = '0';
    showsidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';

}


const hidesidebar = () => {
    sidebar.style.left = '100%';
    showsidebarBtn.style.display = 'inline-block';
    hideSidebarBtn.style.display = 'none';
}


showsidebarBtn.addEventListener('click', showsidebar);
hideSidebarBtn.addEventListener('click', hidesidebar)