
export interface PricingItem {
  name: string;
  quantity: string | number;
  price: number;
}

export interface PricingOption {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  items: PricingItem[];
  warning?: string;
  recommended?: boolean;
}

export interface PowerAnalysisRow {
  device: string;
  avgConsumption: string;
  peakCurrent: string;
  response3040: string;
  response60: string;
  status3040: 'stable' | 'limit' | 'fail';
  status60: 'safe' | 'comfortable';
}
