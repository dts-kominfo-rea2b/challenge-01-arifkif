// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//Favorite Color
const favoriteColorMonica = new Set([
    'Yellow',
    'Pink',
    'White',
    'Purple'
])

const favoriteColorWendy = new Set([
    'Blue',
    'Black',
    'Grey'
])


//is Have Pet
const isHavePet = new Map();
isHavePet.set('Monica',true);
isHavePet.set('Wendy',false);


//Education
const educationMonica = [
    {
        name: 'SD 01',
        city: 'Jakarta',
        graduate: 2016
    },
    {
        name: 'SMP 02',
        city: 'Jakarta',
        graduate: 2019
    },
    {
        name: 'SMA 03',
        city: 'Tangerang'
    }
]

const educationWendy = [
    {
        name: 'SD 02',
        city: 'Jakarta',
        graduate: 2010
    },
    {
        name: 'SMP 03',
        city: 'Bogor',
        graduate: 2013
    },
    {
        name: 'SMA 01',
        city: 'Surabaya',
        graduate: 2016
    },
    {
        name: 'Universitas Maju',
        city: 'Tangerang'
    }
]

//Favorite Restaurant

const favoriteRestauranMonica = new Set([
    'Bento',
    'Sushi',
    'Pancake',
    'Eggy',
    'Tempura',
    'Bento',
    'Eggy',
    'Padang',
    'Tteok',
    'Sushi',
    'Sushi'
])

const favoriteRestauranWendy = new Set([
    'Tempura',
    'Bento',
    'Sushi',
    'Pancake',
    'Padang',
    'Katsu',
    'Geprek',
    'Pancake',
    'Eggy'
])


const monicaUser = {
    name: 'Monica',
    gender: 'Female',
    age: 17,
    email: 'monica@dingdong.com',
    favoriteColor: favoriteColorMonica,
    isHavePet: isHavePet.get('Monica'),
    education: educationMonica,
    favoriteRestaurant: favoriteRestauranMonica
};

const wendyUser = {
    name: 'Wendy',
    gender: 'Male',
    age: 23,
    email: 'wendy@dingdong.com',
    favoriteColor: favoriteColorWendy,
    isHavePet: isHavePet.get('Wendy'),
    education: educationWendy,
    favoriteRestaurant: favoriteRestauranWendy
};


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [monicaUser, wendyUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};