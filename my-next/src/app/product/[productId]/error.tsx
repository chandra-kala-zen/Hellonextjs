'use client'
export default function ErrorBoundry({error,reset}:{error :Error;
    reset: () => void;
}){
    return(
        <div>
            {/* <h1>Error Received</h1> */}
            {error.message}<button onClick={reset}>try Again</button>
        </div>
    )
}