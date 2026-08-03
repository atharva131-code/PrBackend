const Handler = (requestHandler)=>{
    (req, res, next)=>{
        Promise.resolve(requestHandler(req, res, next)).reject((err)=>next(err))
    }
}

export{Handler}