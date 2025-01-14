import Link from "next/link";

const mockUrls = [
  "https://1s4hkaq8p0.ufs.sh/f/aVXY8AepEnNBZeA4FEOUGfq38tgC54HR96SsLeIhyFQ2vnld",
  "https://1s4hkaq8p0.ufs.sh/f/aVXY8AepEnNBauKsMFpEnNBY9KyRAPagSO43qmpjFwT1iJ5r",
  "https://1s4hkaq8p0.ufs.sh/f/aVXY8AepEnNBVkGhoM6iFdyKbENewVkgfWh8rDAaZGtMxl0T",
  "https://1s4hkaq8p0.ufs.sh/f/aVXY8AepEnNBXOeegTOWix5UbVQzTWsPhG0jEH2DROZLrvNp",
  "https://1s4hkaq8p0.ufs.sh/f/aVXY8AepEnNBXaVFwYWix5UbVQzTWsPhG0jEH2DROZLrvNpd",
  "https://1s4hkaq8p0.ufs.sh/f/aVXY8AepEnNBauKsMFpEnNBY9KyRAPagSO43qmpjFwT1iJ5r",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="grid max-w-2xl grid-cols-3 gap-4">
        {mockImages.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
