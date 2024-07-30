
type user = {
    id:number;
    name:string;
    email:string;
    phone:string;
}

async function Users(){
<<<<<<< HEAD
    
=======
>>>>>>> 865673a (2 days learnings)
    await new Promise ((resolve) => setTimeout(resolve,2000));
    const response = await fetch ("https://jsonplaceholder.typicode.com/users") ;
    const users = await response.json()
    console.log(users);
    return(
        <div>
            {
                users.map((user : user) => (
                    <div key={user.id}>
                    <h1>{user.name}</h1>
                    <div>
                           <h1>{user.email}</h1>
                    </div>
                 
                    <h1>{user.phone}</h1>
                    </div>


                ))
            };
            <h1>Users</h1>

        </div>
    )
}
export default Users;