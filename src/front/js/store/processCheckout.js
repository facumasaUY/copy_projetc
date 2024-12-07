//  import express from "express";
//  import cors from "cors";

//  import { MercadoPagoConfig, Preference } from "mercadopago";

//  const client = new MercadoPagoConfig({
//     accessToken: "TEST-7033493027347872-120109-447e5e8cbdd1b8f28a34bcd75ac8f9b0-71923886",
//  });

//  const app = express ();
//  const port = 3000;

//  app.use(cors());
//  app.use(express.json());

//  app.get("/", (req, res)=>{
//     res.send("Soy el server :)");
//  });

//  app.post("/create_preference", async (req, res)=>{
//     try {
//         const body = {
//             items: [
//                 {   
//                 title: req.body.title,
//                 quantity: Number(req.body.quantity),
//                 unit_price: Number(req.body.price),
//                 currency_id: "URY",
//             },
//             ],
//             back_urls: {
//                 success: "https://anda.com.uy/",
//                 failure: "https://anda.com.uy/",
//                 pending: "https://anda.com.uy/",
//                 },
//                 auto_return: "approved",
//             };

//             const preference = new Preference(client);
//             const result = await preference.create({body});
//             res.json({
//                 id: result.id,
//             });
//         } catch (error) {
//             console.log(error);
//             res.status(500).json({
//                 error: "Error al crear preferencia :(",
//             });
//         }
//  })

//  app.listen(port, ()=>{
//     console.log(`El servidor esta corriendo en el puerto ${port}`);
//  })

