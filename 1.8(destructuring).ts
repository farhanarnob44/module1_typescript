{
  // destructuring

  const user = {
    id: 22103440,
    name: {
      firstName: "Farhan",
      middleName: "Alam",
      lastName: "Arnob",
    },
    contactNo: "01213810278",
    address: "Dinajpur",
  };

  const {
    contactNo,
    name: { middleName },
  } = user;

  const myFriends = ["Moin", "Ajmain", "Bappy", "Naim"];

  const [a, bestFriend, ...rest] = myFriends;
}

// constructor er smy declare er smy type declare kora jay na
