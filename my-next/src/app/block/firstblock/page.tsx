import { Metadata } from "next";

export const metadata : Metadata = {
    title : "Blog",
};

function block(){
    return(
        <div>
            <h1 className="text-center">First Block Post</h1>
        </div>
    )
}
export default block;