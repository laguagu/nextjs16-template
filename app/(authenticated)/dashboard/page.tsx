import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  description: string;
  value: string | number;
}

function MetricCard({ title, description, value }: MetricCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}

function DashboardHeader() {
  return <h1 className="text-3xl font-bold mb-8">Dashboard</h1>;
}

function MetricsGrid() {
  const metrics: MetricCardProps[] = [
    { title: "Total Users", description: "Active users", value: "0" },
    { title: "This Month", description: "New signups", value: "0" },
    { title: "Activity", description: "Last 24 hours", value: "0" },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />
      <MetricsGrid />
    </>
  );
}
