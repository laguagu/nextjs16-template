// Example layout for unauthenticated users

export default function UnauthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
