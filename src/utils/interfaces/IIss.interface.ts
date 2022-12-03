import ICoordsObj from "./ICoords.interface";

export default interface IIss {
  coords: ICoordsObj;
  isLoading: boolean;
  error: string;
}
