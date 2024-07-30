
export default function DefaultDashboard(
    {children,revenue,notifications,user} :{
        children : React.ReactNode;
        revenue : React.ReactNode;
        notifications : React.ReactNode;
        user : React.ReactNode;
    }
){
    return(
        <div>
            {children}
            <div style={{display:"flex"}}>
                <div style={{display:"flex", flexDirection:"column", marginTop:"10px"}}>
                    <div className="bg-blue-400">{user}</div>
                    <h1>hello world</h1>
                    <div>{revenue}</div>
                </div>
                <div style={{display:"flex",flex:1}}>{notifications}</div>
            </div>
        </div>
    )
}