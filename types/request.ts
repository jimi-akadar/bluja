export type Request = {
  id: number;
  status: string;
  statusColor: string;
  statusBg: string;
  service: string;
  provider: string;
  rating: number;
  time: string;
  image: string;
  hasRibbon: boolean;
  ribbonText?: string;
};
