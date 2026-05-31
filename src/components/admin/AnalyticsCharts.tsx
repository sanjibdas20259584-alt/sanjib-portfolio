import React from "react";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";

const COLORS = ["#7B39FC", "#C77DFF", "#E0AAFF", "#8B4FFF", "#6B21A8"];
const CHART_PURPLE = "#7B39FC";
const CHART_LIGHT = "#C77DFF";
const CHART_TEXT = "rgba(200,195,220,0.7)";
const CHART_GRID = "rgba(164,132,215,0.1)";

interface AnalyticsChartsProps {
  pageViewsOverTime: { date: string; views: number }[];
  topPages: { page: string; views: number }[];
  topCTAs: { name: string; clicks: number }[];
  deviceBreakdown: { device: string; count: number }[];
  pricingInterest: { category: string; clicks: number }[];
  topPackages: { name: string; clicks: number }[];
  submissionsOverTime: { date: string; count: number }[];
  worksEngagement: { title: string; interactions: number }[];
}

const ChartCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="glass-card rounded-xl p-5">
    <h3 className="text-sm font-cabin uppercase tracking-wider text-muted font-bold mb-4">{title}</h3>
    <div className="h-[250px]">{children}</div>
  </div>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#100820] border border-[rgba(164,132,215,0.3)] rounded-lg px-3 py-2 text-xs">
      <p className="text-muted mb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} className="text-foreground font-medium">{p.name}: {p.value}</p>
      ))}
    </div>
  );
};

export const AnalyticsCharts: React.FC<AnalyticsChartsProps> = ({
  pageViewsOverTime,
  topPages,
  topCTAs,
  deviceBreakdown,
  pricingInterest,
  topPackages,
  submissionsOverTime,
  worksEngagement,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* 1. Page Views Over Time */}
      <ChartCard title="Page Views Over Time">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={pageViewsOverTime}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_GRID} />
            <XAxis dataKey="date" tick={{ fill: CHART_TEXT, fontSize: 11 }} />
            <YAxis tick={{ fill: CHART_TEXT, fontSize: 11 }} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="views" stroke={CHART_PURPLE} strokeWidth={2} dot={{ fill: CHART_PURPLE, r: 3 }} name="Views" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* 2. Top Pages */}
      <ChartCard title="Top Pages">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topPages} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_GRID} />
            <XAxis type="number" tick={{ fill: CHART_TEXT, fontSize: 11 }} />
            <YAxis type="category" dataKey="page" tick={{ fill: CHART_TEXT, fontSize: 11 }} width={80} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="views" fill={CHART_PURPLE} radius={[0, 4, 4, 0]} name="Views" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* 3. Most Clicked CTAs */}
      <ChartCard title="Most Clicked CTAs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topCTAs}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_GRID} />
            <XAxis dataKey="name" tick={{ fill: CHART_TEXT, fontSize: 10 }} angle={-20} textAnchor="end" height={50} />
            <YAxis tick={{ fill: CHART_TEXT, fontSize: 11 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="clicks" fill={CHART_LIGHT} radius={[4, 4, 0, 0]} name="Clicks" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* 4. Traffic by Device */}
      <ChartCard title="Traffic by Device">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={deviceBreakdown} dataKey="count" nameKey="device" cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={4} label={({ device, percent }) => `${device} ${(percent * 100).toFixed(0)}%`}>
              {deviceBreakdown.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* 5. Pricing Interest by Category */}
      <ChartCard title="Pricing Interest by Category">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={pricingInterest}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_GRID} />
            <XAxis dataKey="category" tick={{ fill: CHART_TEXT, fontSize: 10 }} angle={-20} textAnchor="end" height={50} />
            <YAxis tick={{ fill: CHART_TEXT, fontSize: 11 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="clicks" fill={CHART_PURPLE} radius={[4, 4, 0, 0]} name="Clicks" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* 6. Most Interested Packages */}
      <ChartCard title="Most Interested Packages">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topPackages} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_GRID} />
            <XAxis type="number" tick={{ fill: CHART_TEXT, fontSize: 11 }} />
            <YAxis type="category" dataKey="name" tick={{ fill: CHART_TEXT, fontSize: 10 }} width={120} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="clicks" fill={CHART_LIGHT} radius={[0, 4, 4, 0]} name="Clicks" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* 7. Contact Submissions Over Time */}
      <ChartCard title="Submissions Over Time">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={submissionsOverTime}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_GRID} />
            <XAxis dataKey="date" tick={{ fill: CHART_TEXT, fontSize: 11 }} />
            <YAxis tick={{ fill: CHART_TEXT, fontSize: 11 }} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="count" stroke={CHART_LIGHT} strokeWidth={2} dot={{ fill: CHART_LIGHT, r: 3 }} name="Submissions" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* 8. Works Engagement */}
      <ChartCard title="Works Engagement">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={worksEngagement} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_GRID} />
            <XAxis type="number" tick={{ fill: CHART_TEXT, fontSize: 11 }} />
            <YAxis type="category" dataKey="title" tick={{ fill: CHART_TEXT, fontSize: 10 }} width={120} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="interactions" fill={CHART_PURPLE} radius={[0, 4, 4, 0]} name="Interactions" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
};
