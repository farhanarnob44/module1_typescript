{
    // nullable type 

    const searchName = (value : string) => {
        if(value) {
            console.log("searching")
        }
        else {
            console.log("Threre is nothing to search")
        }
    }
    searchName("farhan")
}