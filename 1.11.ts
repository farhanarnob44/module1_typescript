{
  // ternary operator  || optional chaining

  const age: number = 15;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }


//   nalishing operator 


const isAuthenticated = null;

const result1 = isAuthenticated ?? "Guest";
const result2 = isAuthenticated ? isAuthenticated : "Guest"
console.log({result1},{result2})
console.log(result1, result2)


// optonal chaining 

type User = {
   name : string;
   address : {
      city : string;
      road : string;
      presentaddress ? : string;
      permanentAddres  : string;
   }
}

const user : User = {
   name : "Farhan",
   address : {
      city: 'dinj',
      road : 'avsj',
      permanentAddres : "sjdgfjug"
   }
}

const presentaddress = user?.address?.presentaddress ?? "No permanent"
console.log(presentaddress);

  //  1.11(Ternary Operator).ts

  //  ts-node-dev --respawn --transpile-only
}
