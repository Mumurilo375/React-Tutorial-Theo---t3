/*import Image from "next/image";*/

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
export const dynamic = "force-dynamic"; // nao deixa a pagina guardar cache

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  })
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto w-full max-w-4xl overflow-hidden">
          {images.map((image) => (
            <div key={image.id} className="w-full px-2" >
              <img src={image.url} alt={"image.id"} className="w-full h-50 object-cover rounded-lg"/>
              <div>
                <h3>{image.name}</h3>
              </div>
            </div>))}
    </div>
  );
}

export default async function homePage() {
  return (
    <div className="flex flex-wrap gap-4">
      <SignedOut>
        <div className="w-full h-full text-center text-2x1 font-bold">
          Please sign in to view the gallery
        </div>
      </SignedOut> 
      <SignedIn>
        <Images />
      </SignedIn>
    </div>
  );
};