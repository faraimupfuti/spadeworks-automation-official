// Builds the points and lines of the vector face used on the facial recognition page.
// Everything is drawn from maths, so it stays sharp at any size.
const arc = (cx, cy, rx, ry, a0, a1, n) =>
  Array.from({ length: n }, (_, i) => {
    const a = ((a0 + ((a1 - a0) * i) / (n - 1)) * Math.PI) / 180;
    return [Math.round(cx + rx * Math.cos(a)), Math.round(cy + ry * Math.sin(a))];
  });
const line = (x0, y0, x1, y1, n) =>
  Array.from({ length: n }, (_, i) => [Math.round(x0 + ((x1 - x0) * i) / (n - 1)), Math.round(y0 + ((y1 - y0) * i) / (n - 1))]);

const jaw = arc(200, 240, 92, 185, 180, 0, 13);
const brow = [...line(128, 178, 182, 166, 5), ...line(218, 166, 272, 178, 5)];
const eyes = [...arc(155, 207, 24, 10, 0, 360, 8).slice(0, 7), ...arc(245, 207, 24, 10, 0, 360, 8).slice(0, 7)];
const nose = [...line(200, 195, 200, 282, 4), [176, 292], [188, 299], [200, 302], [212, 299], [224, 292]];
const mouth = [...arc(200, 346, 40, 14, 0, 180, 7), ...arc(200, 346, 40, 7, 180, 360, 5).slice(1, 4)];
const forehead = arc(200, 232, 92, 168, 200, 340, 6);
const cheeks = [[132, 280], [268, 280], [150, 330], [250, 330], [200, 240]];

export const points = [...jaw, ...forehead, ...brow, ...eyes, ...nose, ...mouth, ...cheeks];

// Join every pair of points that sit close together, which gives the "mesh" look.
export const edges = (() => {
  const out = [];
  for (let i = 0; i < points.length; i++)
    for (let j = i + 1; j < points.length; j++) {
      const d = Math.hypot(points[i][0] - points[j][0], points[i][1] - points[j][1]);
      if (d < 58) out.push([i, j]);
    }
  return out;
})();
