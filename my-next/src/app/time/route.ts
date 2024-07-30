export const dynamic = "force-"
export default function GET(){
    return Response.json({
        time:new Date().toLocaleDateString(),
    })
}