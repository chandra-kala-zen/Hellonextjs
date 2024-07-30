'use client'
function getRandomInt(count : number){
    return Math.floor(Math.random() * count);
}
export default  function productId({params,}:{
    params : {productId : string};
})

{
    const random = getRandomInt(2)
    if(random === 1){
        console.log("error occured")
        throw new Error ("Error Loading happening")
    }
    return(
        <div className="font-bold">
            <h1 className="text-center">Details about products{params.productId}</h1>
        </div>
    )
}
