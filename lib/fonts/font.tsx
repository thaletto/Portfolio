import localFont from "next/font/local";

const tnw = localFont({
  src: '/TheNightWatch.ttf',
  display: 'swap',
});

const acornLight = localFont({
  src: '/Acorn/light.ttf',
  display: 'swap',
});

const acornRegular = localFont({
  src: '/Acorn/regular.ttf',
  display: 'swap',
});

const acornSemiBold = localFont({
  src: '/Acorn/semiBold.ttf',
  display: 'swap',
});

const gtPlanarRegular = localFont({
  src: '/gtPlanarRegular.otf',
  display: 'swap',
})

export { tnw, acornLight, acornRegular, acornSemiBold, gtPlanarRegular };