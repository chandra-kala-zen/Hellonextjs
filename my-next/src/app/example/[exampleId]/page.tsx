
'use client'
export default  function exampleId({params,}:{
    params : {exampleId : string};
})

{
    return(
        <div className="font-bold">
            <h1 className="text-center">Details about Example {params.exampleId}</h1>
        </div>
    )
}
