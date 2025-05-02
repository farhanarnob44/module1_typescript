{
    // nullable type 

    const searchName = (value : string | null) => {
        if(value) {
            console.log("searching")
        }
        else {
            console.log("Threre is nothing to search")
        }
    }
    searchName(null)


    // unknown type of 


    const getSpeedInMeterPerSecond = (value: unknown) => {
        if(typeof value === 'number'){
            const convertedSpeed = (value*1000)/3600
            console.log(`The speed is ${convertedSpeed} ms^-1`)
        }
      else if(typeof value === 'string'){
            const [val , unit] = value.split(' ')
            console.log(val)
            const convertedSpeed = (parseFloat(val)*1000)/3600
            console.log(`The speed is ${convertedSpeed} ms^-1`)
        }
        else {
            console.log("wrong input")
        }
    }
getSpeedInMeterPerSecond (null)



// never type 


const throwError = (msg: string) => {
    throw new Error (msg)
};

throwError("error done")




}