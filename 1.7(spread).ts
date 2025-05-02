{
    // spread operator || rest operator
    // destructuring 


    // lear spread operator 

    const bros1: string [] = ['Farhan', 'Ruba']
    const bros2: string [] = ['Nazmul' , 'Nijhum']
 
    bros1.push(...bros2)   // ... is the spade operator here

    const mentors1 = {
        typescript : 'Suzad Mahmud',
        redux : 'Istiak Ahmed',
        dms : 'Jannatul Ferdous'
    }

    const mentors2 = {
        prisma : 'Suhala Lamia',
        next : 'Saidur Rahman',
        cloud : 'Rashedur Islam Rana'
    }


    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    // learn rest operator 


    const greetFriends = (...friends : string [])  => {
        // console.log(`hi ${friend1} hello ${friend2} hola ${friend3}` )

        friends.forEach( (friend : string) => {
            console.log(` hi ${friend}`)
        });
    }


    // sob gula k friends e add kora jete pare and output pete console log korte hbe... etai rest operator er kaj


    greetFriends('Arnob', 'Amit', 'Ajmain', 'Moin')



}