import Header from "../components/common/Header";

import OverviewCards from "../components/analytics/OverviewCards";
import RevenueChart from "../components/analytics/RevenueChart";
import ChannelPerformance from "../components/analytics/ChannelPerformance";
import ProductPerformance from "../components/analytics/ProductPerformance";
import UserRetention from "../components/analytics/UserRetention";
import CustomerSegmentation from "../components/analytics/CustomerSegmentation";
import AIPoweredInsights from "../components/analytics/AIPoweredInsights";
import CoffeePriceScatterChart from "../components/overview/CoffeePriceScatterChart";
import NDVIScatterChart from "../components/overview/NDVIScatterChart";
import MapaPereira from "../components/analytics/MapaPereira";

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Analytics Dashboard"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/*<OverviewCards />*/}

        <div className="mt-8">
          <CoffeePriceScatterChart />
        </div>
        <div className="mt-8">
          <NDVIScatterChart />
        </div>

        {/*<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        <AIPoweredInsights />
        </div>*/}

        {/* Renderiza MapaPereira al final */}
        {/*
          <div className="mt-8">
            <MapaPereira />
          </div>
        */}
      </main>
    </div>
  );
};

export default AnalyticsPage;
