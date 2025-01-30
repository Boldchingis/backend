// import { console } from "inspector";

// export default function Auth() {
//   const auth = async (req, res, next) => {
//     const token = req.get("authentication");

// try{
//     const verified = await verifyToken(token, {
//         secretKey: process.env.CLERK_SECRET_KEY,
//     });
//     consr userId = verified.sub;
//     req.userId = userId;
//     next();
// } catch {
//     res.json({ status: "forbidden"})
// }

//   };
//   app.get(/categories, auth , async (req, res)=>{
//     console.log(req.userId);
//     const data = fstat.readFileSync()
//   })
// }
