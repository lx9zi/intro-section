






const feature = document.getElementById('feature');
const FeatureAroow = document.getElementById('first');
const FeatureList = document.getElementById('FeatureList');

const company = document.getElementById('company')
const CompanyAroow = document.getElementById('second');
const CompanyList = document.getElementById('CompanyList');


const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');


const ExitButton = document.getElementById('exit-button');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('closeBar')
    nav.classList.toggle('OpenNav')
})


feature.addEventListener('click', () => {
    FeatureAroow.classList.toggle('rotate')
    FeatureAroow.classList.add('transmation')
    FeatureList.classList.toggle('active');
    feature.style.paddingBottom = '50px'
})

company.addEventListener('click', () => {
    CompanyAroow.classList.toggle('rotate')
    CompanyAroow.classList.add('transmation')
    CompanyList.classList.toggle('active');
})



















