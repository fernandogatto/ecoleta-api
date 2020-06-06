export default interface ICreatePointsDTO {
  name: string;
  email: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;
  items_id: Array<string>;
}
