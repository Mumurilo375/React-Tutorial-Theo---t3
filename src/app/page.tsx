/*import Image from "next/image";*/

import { db } from "~/server/db";
export const dynamic = "force-dynamic"; // nao deixa a pagina guardar cache

export default async function homePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto w-full max-w-4xl overflow-hidden">
        {images.map((image, index) => (
        <div key={image.id + "-" + index} className="w-full px-2" >
          <img src={image.url} alt={"image.id"} className="w-full h-auto object-cover rounded-lg"/>
          <div>
            <h3>{image.name}</h3>
          </div>
        </div>
      ))}</div>
    </div>
  );
};