import { brand } from "@/lib/brand";

const orders = [
  {
    id: "#10234",
    user: "Sarah Chen",
    project: "Retail POS",
    status: "Completed",
    statusColor: "text-emerald-400",
  },
  {
    id: "#10233",
    user: "James Wilson",
    project: "Inventory Sync",
    status: "Pending",
    statusColor: "text-amber-400",
  },
  {
    id: "#10232",
    user: "Maria Lopez",
    project: "Payroll Run",
    status: "In Progress",
    statusColor: "text-sky-400",
  },
];

const notifications = [
  "New invoice #8821 paid",
  "Stock alert: Warehouse B",
  "Report exported successfully",
];

export function HeroDashboardPreview() {
  return (
    <div className="hero-dashboard-shell relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-t-2xl sm:mt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

      <div className="grid min-h-[280px] grid-cols-1 lg:grid-cols-[200px_1fr_220px]">
        <aside className="hidden border-r border-white/5 p-4 lg:block">
          <p className="text-xs font-bold tracking-wide text-white">{brand.name}</p>
          <nav className="mt-6 space-y-3 text-xs text-slate-400">
            <p className="font-semibold text-slate-300">Favorites</p>
            <p>Overview</p>
            <p>Projects</p>
            <p className="font-semibold text-sky-400">Dashboards</p>
            <p>Reports</p>
          </nav>
        </aside>

        <div className="border-r border-white/5 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Order List</h3>
            <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-slate-400">
              3 new
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-[11px]">
              <thead>
                <tr className="border-b border-white/5 text-slate-500">
                  <th className="pb-2 pr-3 font-medium">Order ID</th>
                  <th className="pb-2 pr-3 font-medium">User</th>
                  <th className="pb-2 pr-3 font-medium">Project</th>
                  <th className="pb-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-white/5 text-slate-300">
                    <td className="py-3 pr-3">{order.id}</td>
                    <td className="py-3 pr-3">{order.user}</td>
                    <td className="py-3 pr-3">{order.project}</td>
                    <td className={`py-3 font-medium ${order.statusColor}`}>
                      {order.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="hidden p-4 lg:block">
          <h3 className="text-sm font-semibold text-white">Notifications</h3>
          <ul className="mt-4 space-y-3">
            {notifications.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-[11px] text-slate-400"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
