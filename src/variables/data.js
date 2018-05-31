const bills = [{
    "date": "2018/04/02",
    "instance": 1,
    "amount": "23"
  },
  {
    "date": "2018/04/12",
    "instance": 1,
    "amount": "12"
  },
  {
    "date": "2018/04/22",
    "instance": 1,
    "amount": "26"
  },
  {
    "date": "2018/05/02",
    "instance": 1,
    "amount": "5"
  },
  {
    "date": "2018/05/12",
    "instance": 1,
    "amount": "45"
  },
  {
    "date": "2018/05/22",
    "instance": 1,
    "amount": "23"
  },
  {
    "date": "2018/06/02",
    "instance": 1,
    "amount": "26"
  }
];

const instances = [{
    "id": 1,
    "name": "Site vitrine",
    "categorie": "Serveurs",
    "type": "VPS SSD-8",
    "status": "on",
    "creationDate": ""
  },
  {
    "id": 2,
    "name": "Gitlab",
    "categorie": "Serveurs",
    "type": "VPS SSD-42",
    "status": "off",
    "creationDate": "2018/06/23"
  },
  {
    "id": 3,
    "name": "API LB",
    "categorie": "Load Balancer",
    "type": "",
    "status": "on",
    "creationDate": "2018/03/02"
  },
  {
    "id": 4,
    "name": "API S1",
    "categorie": "Serveurs",
    "type": "Dedicated",
    "status": "on",
    "creationDate": "2018/03/02"
  },
  {
    "id": 5,
    "name": "Api S2",
    "categorie": "Serveurs",
    "type": "Dedicated",
    "status": "on",
    "creationDate": "2018/03/02"
  },
  {
    "id": 6,
    "name": "Api S3",
    "categorie": "Serveurs",
    "type": "Dedicated",
    "status": "on",
    "creationDate": "2018/03/02"
  },
  {
    "id": 7,
    "name": "Api Dev",
    "categorie": "Serveurs",
    "type": "VPS SSD-8",
    "status": "on",
    "creationDate": ""
  },
  {
    "id": 8,
    "name": "Ip api",
    "categorie": "Ip failover",
    "type": "",
    "status": "on",
    "creationDate": ""
  }
];

const user = [{
    "id": "42",
    "mail": "contact@hoistthecolor.fr",
    "group": "admin"
  },
  {
    "id": "1337",
    "mail": "qlamamy@alacrite.fr",
    "group": "informagicien"
  }
];

const budgets = [{
    "name": "Projet 1",
    "seuilAlert": "666",
    "seuilMaximum": "1000",
    "instances": [
      1,
      4,
      6,
      8
    ]
  },
  {
    "name": "Projet 2",
    "seuilAlert": "300",
    "seuilMaximum": "800",
    "instances": [
      2,
      3,
      5,
      7
    ]
  }
];


export {
  bills,
  budgets,
  user,
  instances
};