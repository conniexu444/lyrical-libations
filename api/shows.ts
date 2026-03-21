import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const supabase = createClient(
    process.env.VITE_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data, error } = await supabase
    .from("shows")
    .select("*")
    .eq("is_archived", false)
    .order("date_iso", { ascending: true });

  if (error) {
    return res.status(500).json({ error: "Failed to load shows" });
  }

  // Map snake_case DB columns to camelCase for the frontend
  const shows = (data ?? []).map((row) => ({
    id: row.id,
    title: row.title,
    date: row.date,
    dateIso: row.date_iso,
    venue: row.venue,
    address: row.address,
    doorsOpen: row.doors_open,
    showStarts: row.show_starts,
    musicians: row.musicians,
    ticketing: row.ticketing,
    ticketingComingSoon: row.ticketing_coming_soon,
    details: row.details,
    payLink: row.pay_link,
  }));

  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  return res.status(200).json(shows);
}
