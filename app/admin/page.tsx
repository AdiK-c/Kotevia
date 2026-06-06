import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { FiMail, FiPhone, FiMapPin, FiLogOut } from "react-icons/fi";
import { cookies } from "next/headers";
import AdminLogin from "@/components/admin/AdminLogin";
import { logout } from "@/app/admin/actions";

// Ensure this page is dynamically rendered
export const dynamic = "force-dynamic";

async function getLeads() {
  try {
    await dbConnect();
    // Fetch leads sorted by newest first
    const leads = await Lead.find({}).sort({ createdAt: -1 }).lean();
    return leads;
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return [];
  }
}

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("admin_auth")?.value;

  if (!process.env.ADMIN_PASSWORD || auth !== process.env.ADMIN_PASSWORD) {
    return <AdminLogin />;
  }

  const leads = await getLeads();

  return (
    <div className="pt-32 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Lead Management</h1>
          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded shadow-sm border border-gray-100 text-sm font-medium">
              Total Leads: {leads.length}
            </div>
            <form action={logout}>
              <button type="submit" className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded shadow-sm border border-red-100 text-sm font-medium hover:bg-red-100 transition-colors">
                <FiLogOut /> Logout
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-white text-sm uppercase tracking-wider">
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold">Customer info</th>
                  <th className="p-4 font-semibold">Location</th>
                  <th className="p-4 font-semibold">Requirement</th>
                  <th className="p-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">
                      No leads found.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead: any) => (
                    <tr key={lead._id.toString()} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-500 whitespace-nowrap">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-black">{lead.name}</div>
                        <div className="flex items-center text-gray-500 mt-1 gap-1">
                          <FiPhone className="text-xs" /> {lead.phone}
                        </div>
                        <div className="flex items-center text-gray-500 mt-1 gap-1">
                          <FiMail className="text-xs" /> {lead.email}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center text-black font-medium gap-1">
                          <FiMapPin className="text-gray-400" /> {lead.city}
                        </div>
                        <div className="text-gray-500 mt-1">Pin: {lead.pincode}</div>
                      </td>
                      <td className="p-4">
                        <span className="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-bold text-black mb-1">
                          {lead.installationType}
                        </span>
                        <div className="text-gray-600 mt-1">Bill: {lead.monthlyBill}</div>
                        {lead.roofSize && <div className="text-gray-500 mt-1">Roof: {lead.roofSize}</div>}
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          lead.status === "New" ? "bg-blue-100 text-blue-800" :
                          lead.status === "Contacted" ? "bg-yellow-100 text-yellow-800" :
                          lead.status === "Qualified" ? "bg-green-100 text-green-800" :
                          "bg-red-100 text-red-800"
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
