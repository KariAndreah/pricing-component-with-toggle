const toggle = document.getElementById('checkbox');
const costBasic = document.getElementById('costBasic');

const costProfessional = document.getElementById('costProfessional');

const costMaster = document.getElementById('costMaster');

function checkBoxToggle() {
    if (toggle.checked === true) {
        costBasic.innerHTML = '&dollar;19.99';
        costProfessional.innerHTML = '&dollar;24.99';
        costMaster.innerHTML = '&dollar;39.99';
    }
    else {
        costBasic.innerHTML = '&dollar;199.99';
        costProfessional.innerHTML = '&dollar;249.99';
        costMaster.innerHTML = '&dollar;399.99';
    }
}
