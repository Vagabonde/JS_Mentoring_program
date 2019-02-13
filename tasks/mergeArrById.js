let arr1 = [
  {
    'id': 1,
    'first_name': 'Scarlett',
    'last_name': 'Blabber',
  },
  {
    'id': 2,
    'first_name': 'Marita',
    'last_name': 'Conlaund',
  },
  {
    'id': 3,
    'first_name': 'Ofella',
    'last_name': 'Foxcroft',
  },
  {
    'id': 4,
    'first_name': 'Jessika',
    'last_name': 'O\'Roan',
  },
  {
    'id': 5,
    'first_name': 'Tades',
    'last_name': 'Illing',
  },
  {
    'id': 6,
    'first_name': 'Monty',
    'last_name': 'Instrell',
  },
  {
    'id': 7,
    'first_name': 'Bern',
    'last_name': 'Aubury',
  },
  {
    'id': 8,
    'first_name': 'Roddie',
    'last_name': 'Grastye',
  },
  {
    'id': 9,
    'first_name': 'Valina',
    'last_name': 'Petherick',
  },
  {
    'id': 10,
    'first_name': 'Hube',
    'last_name': 'Putman',
  },
];
let arr2 = [
  {
    'id': 1,
    'email': 'sblabber0@ucsd.edu',
    'gender': 'Female',
    'ip_address': '147.119.214.206',
  },
  {
    'id': 2,
    'email': 'mconlaund1@mediafire.com',
    'gender': 'Female',
    'ip_address': '250.229.73.230',
  },
  {
    'id': 3,
    'email': 'ofoxcroft2@mayoclinic.com',
    'gender': 'Female',
    'ip_address': '217.24.193.45',
  },
  {
    'id': 4,
    'email': 'joroan3@tinyurl.com',
    'gender': 'Female',
    'ip_address': '154.253.24.196',
  },
  {
    'id': 5,
    'email': 'tilling4@miitbeian.gov.cn',
    'gender': 'Male',
    'ip_address': '134.130.143.188',
  },
  {
    'id': 6,
    'email': 'minstrell5@printfriendly.com',
    'gender': 'Male',
    'ip_address': '63.186.252.247',
  },
  {
    'id': 7,
    'email': 'baubury6@flickr.com',
    'gender': 'Male',
    'ip_address': '244.237.183.21',
  },
  {
    'id': 8,
    'email': 'rgrastye7@marriott.com',
    'gender': 'Male',
    'ip_address': '102.110.119.97',
  },
  {
    'id': 9,
    'email': 'vpetherick8@taobao.com',
    'gender': 'Female',
    'ip_address': '210.62.202.249',
  },
  {
    'id': 10,
    'email': 'hputman9@smh.com.au',
    'gender': 'Male',
    'ip_address': '98.231.209.109',
  },
];

/* expected result
[{
  "id": 1,
  "first_name": "Scarlett",
  "last_name": "Blabber",
  "info": {
    "id": 1,
    "email": "sblabber0@ucsd.edu",
    "gender": "Female",
    "ip_address": "147.119.214.206"
  }
}, .....]*/

function merge(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    arr2.forEach((arr2el) => {
      if (arr2el.id === arr1[i].id) {
        result.push({...arr1[i], info: arr2el});
      }
    });
  }
  return result;
}


