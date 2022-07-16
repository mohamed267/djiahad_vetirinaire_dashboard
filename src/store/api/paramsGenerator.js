const paramsGenarator = (params, type , special) => {
    let genparamas = {};
    var count = 0
    Object.keys(params).map((key) => {
        if (params[key] !== undefined) {
            
        console.log("key is ", key , type , special)
            if (!special) {
                genparamas[key] = params[key]
            } else {
                genparamas[key] = {[type] : params[key]}
            }
        }

    })
    return genparamas
}


export default paramsGenarator