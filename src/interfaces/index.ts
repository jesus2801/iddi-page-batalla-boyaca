export interface BasicCoords {
  x: number;
  y: number;
}

export interface PolygonCoords {
  topLeft: BasicCoords;
  topRight: BasicCoords;
  bottomRight: BasicCoords;
  bottomLeft: BasicCoords;
}
