import Link from "next/link";

const mockUrls = [
  "https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZjJkLU35oGgHOkAyemLFWaBDx6Pw3SR2Tfzrn",
  "https://wop051lmme.ufs.sh/f/OPsIdbYoKx9ZuWBmchSobtdQY47URKzX0MaICAkNv3PmF58g"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index +1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">{
        mockImages.map((image) => (
          <div key={image.id} className="w-1/2 p-4">
            <img src={image.url} />
          </div>
        ))
        }
      </div>
    </main>
  );
}
