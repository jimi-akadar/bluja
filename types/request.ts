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
  description?: string;
  location?: string;
  budget?: string;
  urgency?: string;
  providerImage?: string;
};
