import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AnalyticsHeader from "../../components/analytics/AnalyticsHeader";
import AnalyticsCard from "../../components/analytics/AnalyticsCard";
import AnalyticsSkeleton from "../../components/analytics/AnalyticsSkeleton";
import ComingSoonCard from "../../components/analytics/ComingSoonCard";

import { getAnalytics } from "../../services/analyticsService";

export default function Analytics() {
  const { shortCode } = useParams();

  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  async function fetchAnalytics() {
    try {
      setLoading(true);

      const response = await getAnalytics(shortCode);

      setAnalytics(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <AnalyticsSkeleton />;
  }

  const firstClick = analytics.firstClick
    ? new Date(analytics.firstClick).toLocaleString()
    : "No Clicks";

  const lastClick = analytics.lastClick
    ? new Date(analytics.lastClick).toLocaleString()
    : "No Clicks";

  return (
    <div className="max-w-7xl mx-auto">
      <AnalyticsHeader shortCode={shortCode} />

      <div className="grid gap-5 md:grid-cols-3">
        <AnalyticsCard title="Total Clicks" value={analytics.totalClicks} />

        <AnalyticsCard title="First Click" value={firstClick} />

        <AnalyticsCard title="Last Click" value={lastClick} />
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-bold text-white">Activity Timeline</h2>

        <div className="mt-8 flex items-center justify-between">
          <div className="text-center">
            <div className="h-4 w-4 rounded-full bg-blue-500 mx-auto" />
            <p className="mt-3 text-sm text-slate-400">Created</p>
            <p className="text-white font-semibold">{firstClick}</p>
          </div>

          <div className="mx-6 h-1 flex-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

          <div className="text-center">
            <div className="h-4 w-4 rounded-full bg-cyan-400 mx-auto" />
            <p className="mt-3 text-sm text-slate-400">Latest Click</p>
            <p className="text-white font-semibold">{lastClick}</p>
          </div>
        </div>
      </div>

      <ComingSoonCard />
    </div>
  );
}
