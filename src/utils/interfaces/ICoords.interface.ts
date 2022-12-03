export default interface ICoordsObj {
  message: string;
  timestamp: number;
  iss_position: {
    latitude: string;
    longitude: string;
  };
}