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
    <div className="pt-32 pb-24 bg-[#F8FAFC] min-h-screen relative overflow-hidden">
      {/* Background aesthetic blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Lead Management</h1>
            <p className="text-gray-500 mt-2 font-medium">View and manage your incoming solar inquiries.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-white text-sm font-bold text-gray-700">
              Total Leads: <span className="text-blue-600">{leads.length}</span>
            </div>
            <form action={logout}>
              <button type="submit" className="flex items-center gap-2 bg-white/80 backdrop-blur-md text-red-600 px-5 py-2.5 rounded-full shadow-sm border border-white text-sm font-bold hover:bg-red-50 hover:border-red-100 hover:shadow-md transition-all">
                <FiLogOut /> Logout
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white text-xs uppercase tracking-widest">
                  <th className="p-5 font-bold">Date</th>
                  <th className="p-5 font-bold">Customer info</th>
                  <th className="p-5 font-bold">Location</th>
                  <th className="p-5 font-bold">Requirement</th>
                  <th className="p-5 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-gray-500 font-medium">
                      No leads found. When customers submit forms, they will appear here.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead: any) => (
                    <tr key={lead._id.toString()} className="hover:bg-blue-50/50 transition-colors group">
                      <td className="p-5 text-gray-500 whitespace-nowrap font-medium">
                        {new Date(lead.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                      </td>
                      <td className="p-5">
                        <div className="font-extrabold text-gray-900 text-base">{lead.name}</div>
                        <div className="flex items-center text-gray-500 mt-1.5 gap-2 font-medium">
                          <FiPhone className="text-blue-500" /> {lead.phone}
                        </div>
                        <div className="flex items-center text-gray-500 mt-1 gap-2 font-medium">
                          <FiMail className="text-blue-500" /> {lead.email}
                        </div>
                      </td>
                      <td className="p-5">
                        <div className="flex items-center text-gray-900 font-bold gap-2">
                          <FiMapPin className="text-gray-400" /> {lead.city}
                        </div>
                        <div className="text-gray-500 mt-1.5 font-medium ml-6">Pin: {lead.pincode}</div>
                      </td>
                      <td className="p-5">
                        <span className="inline-block px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-bold text-gray-700 mb-2">
                          {lead.installationType}
                        </span>
                        <div className="text-gray-600 font-medium">Bill: <span className="font-bold text-gray-900">{lead.monthlyBill}</span></div>
                        {lead.roofSize && <div className="text-gray-500 mt-1 font-medium">Roof: {lead.roofSize} sq ft</div>}
                      </td>
                      <td className="p-5">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wide uppercase shadow-sm ${
                          lead.status === "New" ? "bg-blue-100 text-blue-700 border border-blue-200" :
                          lead.status === "Contacted" ? "bg-yellow-100 text-yellow-700 border border-yellow-200" :
                          lead.status === "Qualified" ? "bg-green-100 text-green-700 border border-green-200" :
                          "bg-red-100 text-red-700 border border-red-200"
                        }`}>
                          {lead.status || "NEW"}
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
