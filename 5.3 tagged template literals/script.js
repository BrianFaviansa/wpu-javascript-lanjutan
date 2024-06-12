// tagged template literals adalah bentuk yang lebih kompleks dari template literals, memungkinkan kita untuk membaca template literals melalui sebuah function

// const nama = 'Hibou';
// const umur = 20;

// function coba(strings, ...values){
//     // let result = '';
//     // strings.forEach((string, i) => {
//     //     result += `${string}${values[i] || ''}`;
//     // });

//     // return result;

//     return strings.reduce((result, string, i) => `${result}${string}${values[i] || ''}`, '')
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;

const nama = 'Hibou';
const umur = 20;
const email = 'hibou@gmail.com'

function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => `${result}${string}<span class="hl">${values[i] || ''}</span>`, '')
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah ${email}.`;

document.body.innerHTML = str;
