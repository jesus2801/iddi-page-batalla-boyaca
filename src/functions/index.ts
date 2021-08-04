import { BasicCoords, PolygonCoords } from '@interfaces/index';

interface AreCoordsInsideI {
  polygonCoords: { coords: PolygonCoords; name: string; desc: string }[];
  coords: BasicCoords;
}

export const areCoordsInside = ({
  coords,
  polygonCoords,
}: AreCoordsInsideI): {
  valid: boolean;
  info: { name: string; desc: string } | null;
} => {
  const image = polygonCoords.find(
    e =>
      e.coords.topLeft.x <= coords.x &&
      e.coords.topLeft.y <= coords.y &&
      e.coords.topRight.x >= coords.x &&
      e.coords.topRight.y <= coords.y &&
      e.coords.bottomRight.x >= coords.x &&
      e.coords.bottomRight.y >= coords.y &&
      e.coords.bottomLeft.x <= coords.x &&
      e.coords.bottomLeft.y >= coords.y
  );

  if (image) {
    return {
      valid: true,
      info: {
        desc: image.desc,
        name: image.name,
      },
    };
  }

  return {
    valid: false,
    info: null,
  };
};
