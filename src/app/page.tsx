/*import Image from "next/image";*/

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
  urlImage: data.url
}));

export default function homePage() {
  return (
    <div className="flex flex-wrap gap-4">
      {mockImages.map((image) => (
          <div key={image.id} className="w-56">
            <img src={image.urlImage} alt={"image.id"}/>
          </div>
        ))}
    </div>
  );
};