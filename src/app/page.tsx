/*import Image from "next/image";*/

import { db } from "~/server/db";
export const dynamic = "force-dynamic";

const mockUrls = [
{url:"https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZjJkLU35oGgHOkAyemLFWaBDx6Pw3SR2Tfzrn"},
{url: "https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZuWBmchSobtdQY47URKzX0MaICAkNv3PmF58g"},
{url:"https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZjJkLU35oGgHOkAyemLFWaBDx6Pw3SR2Tfzrn"},
{url: "https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZuWBmchSobtdQY47URKzX0MaICAkNv3PmF58g"},
{url:"https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZjJkLU35oGgHOkAyemLFWaBDx6Pw3SR2Tfzrn"},
{url: "https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZuWBmchSobtdQY47URKzX0MaICAkNv3PmF58g"},
{url:"https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZjJkLU35oGgHOkAyemLFWaBDx6Pw3SR2Tfzrn"},
{url: "https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZuWBmchSobtdQY47URKzX0MaICAkNv3PmF58g"},
{url:"https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZjJkLU35oGgHOkAyemLFWaBDx6Pw3SR2Tfzrn"},
{url: "https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZuWBmchSobtdQY47URKzX0MaICAkNv3PmF58g"},
{url:"https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZjJkLU35oGgHOkAyemLFWaBDx6Pw3SR2Tfzrn"},
{url: "https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZuWBmchSobtdQY47URKzX0MaICAkNv3PmF58g"},
{url:"https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZjJkLU35oGgHOkAyemLFWaBDx6Pw3SR2Tfzrn"},
{url: "https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZuWBmchSobtdQY47URKzX0MaICAkNv3PmF58g"},
{url:"https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZjJkLU35oGgHOkAyemLFWaBDx6Pw3SR2Tfzrn"},
{url: "https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZuWBmchSobtdQY47URKzX0MaICAkNv3PmF58g"},
];

const mockImages = mockUrls.map((data, index) => ({
  id: index + 1,
  url: data.url
}));

export default async function homePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <div className="flex flex-wrap gap-4">
      
      {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
      ))}


      {mockImages.map((image, index) => (
          <div key={image.id + "-" + index} className="w-56">
            <img src={image.url} alt={"image.id"}/>
          </div>
        ))}
    </div>
  );
};