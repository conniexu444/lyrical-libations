import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import type { Session } from "@supabase/supabase-js";

const FONT = { fontFamily: "RM Typerighter, monospace" };

interface ShowRow {
  id: string;
  title: string;
  date: string;
  date_iso: string;
  venue: string;
  address: string;
  doors_open: string;
  show_starts: string;
  musicians: string[];
  ticketing: { price: string; description: string }[];
  ticketing_coming_soon: boolean;
  details: string;
  pay_link: string;
  is_archived: boolean;
  archived_edition_id: string;
}

const EMPTY_FORM: Omit<ShowRow, "id" | "is_archived" | "archived_edition_id"> = {
  title: "",
  date: "",
  date_iso: "",
  venue: "",
  address: "",
  doors_open: "",
  show_starts: "",
  musicians: [],
  ticketing: [],
  ticketing_coming_soon: false,
  details: "",
  pay_link: "",
};

// ── Login ────────────────────────────────────────────────────────────────────

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      onLogin();
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
      <div className="w-full max-w-sm p-8 border border-[var(--color-text)] border-opacity-20 rounded-lg" style={FONT}>
        <h1 className="text-2xl font-[var(--font-heading)] mb-6 text-center text-[var(--color-text)]">
          Lyrical Libations Admin
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm opacity-70 mb-1 text-[var(--color-text)]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-transparent border border-[var(--color-text)] border-opacity-30 rounded text-[var(--color-text)] focus:outline-none focus:border-opacity-100"
            />
          </div>
          <div>
            <label className="block text-sm opacity-70 mb-1 text-[var(--color-text)]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 bg-transparent border border-[var(--color-text)] border-opacity-30 rounded text-[var(--color-text)] focus:outline-none focus:border-opacity-100"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 border border-[var(--color-text)] rounded text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Show Form ────────────────────────────────────────────────────────────────

function ShowForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: Omit<ShowRow, "id" | "is_archived" | "archived_edition_id"> & { id?: string };
  onSave: (data: typeof EMPTY_FORM & { id?: string }) => Promise<void>;
  onCancel: () => void;
}) {
  const [form, setForm] = useState(initial);
  const [musiciansText, setMusiciansText] = useState(
    (initial.musicians ?? []).join("\n")
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set(field: string, value: unknown) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function addTicket() {
    setForm((prev) => ({
      ...prev,
      ticketing: [...(prev.ticketing ?? []), { price: "", description: "" }],
    }));
  }

  function updateTicket(i: number, field: "price" | "description", value: string) {
    setForm((prev) => {
      const updated = [...(prev.ticketing ?? [])];
      updated[i] = { ...updated[i], [field]: value };
      return { ...prev, ticketing: updated };
    });
  }

  function removeTicket(i: number) {
    setForm((prev) => ({
      ...prev,
      ticketing: (prev.ticketing ?? []).filter((_, idx) => idx !== i),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);
    const musicians = musiciansText
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    try {
      if (form.pay_link && !form.pay_link.startsWith("https://")) {
        throw new Error("Pay link must start with https://");
      }
      await onSave({ ...form, musicians });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
    setSaving(false);
  }

  const inputClass =
    "w-full px-3 py-2 bg-transparent border border-[var(--color-text)] border-opacity-30 rounded text-[var(--color-text)] focus:outline-none focus:border-opacity-100";
  const labelClass = "block text-sm opacity-70 mb-1 text-[var(--color-text)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" style={FONT}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className={labelClass}>Title *</label>
          <input className={inputClass} value={form.title} onChange={(e) => set("title", e.target.value)} required />
        </div>
        <div>
          <label className={labelClass}>Display Date * (e.g. SUN Apr 26, 2026)</label>
          <input className={inputClass} value={form.date} onChange={(e) => set("date", e.target.value)} required />
        </div>
        <div>
          <label className={labelClass}>Date (for sorting) *</label>
          <input type="date" className={inputClass} value={form.date_iso} onChange={(e) => set("date_iso", e.target.value)} required />
        </div>
        <div>
          <label className={labelClass}>Venue</label>
          <input className={inputClass} value={form.venue} onChange={(e) => set("venue", e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Address</label>
          <input className={inputClass} value={form.address} onChange={(e) => set("address", e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Doors Open (e.g. 5:30 PM)</label>
          <input className={inputClass} value={form.doors_open} onChange={(e) => set("doors_open", e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Show Starts (e.g. 6 PM)</label>
          <input className={inputClass} value={form.show_starts} onChange={(e) => set("show_starts", e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label className={labelClass}>Musicians (one per line)</label>
          <textarea
            className={`${inputClass} h-28 resize-none`}
            value={musiciansText}
            onChange={(e) => setMusiciansText(e.target.value)}
            placeholder={"Poiesis Quartet\nSarah Ying Ma, violin"}
          />
        </div>
        <div className="md:col-span-2">
          <label className={labelClass}>Details</label>
          <textarea
            className={`${inputClass} h-24 resize-none`}
            value={form.details}
            onChange={(e) => set("details", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Pay Link (PayPal URL)</label>
          <input className={inputClass} value={form.pay_link} onChange={(e) => set("pay_link", e.target.value)} />
        </div>
        <div className="flex items-center gap-2 self-end pb-2">
          <input
            type="checkbox"
            id="tcs"
            checked={form.ticketing_coming_soon}
            onChange={(e) => set("ticketing_coming_soon", e.target.checked)}
            className="cursor-pointer"
          />
          <label htmlFor="tcs" className="text-sm text-[var(--color-text)] cursor-pointer">Ticketing Coming Soon</label>
        </div>
      </div>

      {/* Ticketing tiers */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className={labelClass}>Ticketing Tiers</label>
          <button type="button" onClick={addTicket} className="text-sm opacity-70 hover:opacity-100 cursor-pointer text-[var(--color-text)]">
            + Add tier
          </button>
        </div>
        {(form.ticketing ?? []).map((ticket, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              className={`${inputClass} w-32`}
              placeholder="Price"
              value={ticket.price}
              onChange={(e) => updateTicket(i, "price", e.target.value)}
            />
            <input
              className={inputClass}
              placeholder="Description"
              value={ticket.description}
              onChange={(e) => updateTicket(i, "description", e.target.value)}
            />
            <button
              type="button"
              onClick={() => removeTicket(i)}
              className="opacity-50 hover:opacity-100 cursor-pointer text-[var(--color-text)] px-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="px-6 py-2 border border-[var(--color-text)] rounded text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all disabled:opacity-50 cursor-pointer"
        >
          {saving ? "Saving..." : "Save Show"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 opacity-60 hover:opacity-100 cursor-pointer text-[var(--color-text)]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

// ── Archive Modal ─────────────────────────────────────────────────────────────

function ArchiveModal({
  show,
  onConfirm,
  onCancel,
}: {
  show: ShowRow;
  onConfirm: (editionId: string) => Promise<void>;
  onCancel: () => void;
}) {
  const [editionId, setEditionId] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleConfirm() {
    setSaving(true);
    await onConfirm(editionId.trim());
    setSaving(false);
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div
        className="w-full max-w-md p-6 bg-[var(--color-bg)] border border-[var(--color-text)] border-opacity-30 rounded-lg"
        style={FONT}
      >
        <h3 className="text-xl font-[var(--font-heading)] mb-2 text-[var(--color-text)]">Archive Show</h3>
        <p className="opacity-70 mb-4 text-[var(--color-text)]">
          Archiving <strong>{show.title}</strong>. Enter the edition ID so it links to the correct archive (e.g. <em>Edition-7</em>).
        </p>
        <input
          className="w-full px-3 py-2 bg-transparent border border-[var(--color-text)] border-opacity-30 rounded text-[var(--color-text)] focus:outline-none focus:border-opacity-100 mb-4"
          placeholder="Edition-7"
          value={editionId}
          onChange={(e) => setEditionId(e.target.value)}
        />
        <div className="flex gap-3">
          <button
            onClick={handleConfirm}
            disabled={saving || !editionId.trim()}
            className="px-5 py-2 border border-[var(--color-text)] rounded text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all disabled:opacity-40 cursor-pointer"
          >
            {saving ? "Archiving..." : "Archive"}
          </button>
          <button
            onClick={onCancel}
            className="px-5 py-2 opacity-60 hover:opacity-100 cursor-pointer text-[var(--color-text)]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

function Dashboard({ onSignOut }: { onSignOut: () => void }) {
  const [shows, setShows] = useState<ShowRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [showArchived, setShowArchived] = useState(false);
  const [editing, setEditing] = useState<ShowRow | null>(null);
  const [adding, setAdding] = useState(false);
  const [archiving, setArchiving] = useState<ShowRow | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  async function loadShows() {
    const { data } = await supabase
      .from("shows")
      .select("*")
      .order("date_iso", { ascending: true });
    setShows(data ?? []);
    setLoading(false);
  }

  async function revalidateCache() {
    try {
      await fetch("/api/shows", { headers: { "Cache-Control": "no-cache" } });
    } catch {
      // non-critical, ignore
    }
  }

  useEffect(() => {
    loadShows();
  }, []);

  async function handleAdd(form: typeof EMPTY_FORM) {
    const { error } = await supabase.from("shows").insert([
      {
        title: form.title,
        date: form.date,
        date_iso: form.date_iso,
        venue: form.venue,
        address: form.address,
        doors_open: form.doors_open || null,
        show_starts: form.show_starts || null,
        musicians: (form.musicians ?? []).length ? form.musicians : null,
        ticketing: (form.ticketing ?? []).length ? form.ticketing : null,
        ticketing_coming_soon: form.ticketing_coming_soon,
        details: form.details || null,
        pay_link: form.pay_link || null,
      },
    ]);
    if (error) throw new Error(error.message);
    setAdding(false);
    loadShows();
    revalidateCache();
  }

  async function handleEdit(form: typeof EMPTY_FORM & { id?: string }) {
    const { error } = await supabase
      .from("shows")
      .update({
        title: form.title,
        date: form.date,
        date_iso: form.date_iso,
        venue: form.venue,
        address: form.address,
        doors_open: form.doors_open || null,
        show_starts: form.show_starts || null,
        musicians: (form.musicians ?? []).length ? form.musicians : null,
        ticketing: (form.ticketing ?? []).length ? form.ticketing : null,
        ticketing_coming_soon: form.ticketing_coming_soon,
        details: form.details || null,
        pay_link: form.pay_link || null,
      })
      .eq("id", form.id!);
    if (error) throw new Error(error.message);
    setEditing(null);
    loadShows();
    revalidateCache();
  }

  async function handleDelete(id: string) {
    await supabase.from("shows").delete().eq("id", id);
    setDeleteConfirm(null);
    loadShows();
    revalidateCache();
  }

  async function handleArchive(show: ShowRow, editionId: string) {
    await supabase
      .from("shows")
      .update({ is_archived: true, archived_edition_id: editionId })
      .eq("id", show.id);
    setArchiving(null);
    loadShows();
    revalidateCache();
  }

  const visible = shows.filter((s) => showArchived || !s.is_archived);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]" style={FONT}>
      {/* Header */}
      <div className="w-full px-6 md:px-12 py-5 flex justify-between items-center border-b border-[var(--color-text)] border-opacity-20">
        <h1 className="text-xl font-[var(--font-heading)]">Lyrical Libations Admin</h1>
        <button onClick={onSignOut} className="text-sm opacity-60 hover:opacity-100 cursor-pointer">
          Sign out
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Toolbar */}
        {!adding && !editing && (
          <div className="flex flex-wrap gap-3 items-center justify-between mb-8">
            <button
              onClick={() => setAdding(true)}
              className="px-5 py-2 border border-[var(--color-text)] rounded hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all cursor-pointer"
            >
              + Add Show
            </button>
            <label className="flex items-center gap-2 text-sm opacity-70 cursor-pointer">
              <input
                type="checkbox"
                checked={showArchived}
                onChange={(e) => setShowArchived(e.target.checked)}
                className="cursor-pointer"
              />
              Show archived
            </label>
          </div>
        )}

        {/* Add Form */}
        {adding && (
          <div className="mb-10 p-6 border border-[var(--color-text)] border-opacity-20 rounded-lg">
            <h2 className="text-xl font-[var(--font-heading)] mb-4">New Show</h2>
            <ShowForm
              initial={{ ...EMPTY_FORM }}
              onSave={handleAdd}
              onCancel={() => setAdding(false)}
            />
          </div>
        )}

        {/* Edit Form */}
        {editing && (
          <div className="mb-10 p-6 border border-[var(--color-text)] border-opacity-20 rounded-lg">
            <h2 className="text-xl font-[var(--font-heading)] mb-4">Edit Show</h2>
            <ShowForm
              initial={editing}
              onSave={handleEdit}
              onCancel={() => setEditing(null)}
            />
          </div>
        )}

        {/* Shows List */}
        {loading ? (
          <p className="opacity-60">Loading shows...</p>
        ) : visible.length === 0 ? (
          <p className="opacity-60">No shows yet. Add one above.</p>
        ) : (
          <div className="space-y-4">
            {visible.map((show) => (
              <div
                key={show.id}
                className={`p-5 border rounded-lg ${
                  show.is_archived
                    ? "border-[var(--color-text)] border-opacity-10 opacity-50"
                    : "border-[var(--color-text)] border-opacity-20"
                }`}
              >
                <div className="flex flex-wrap gap-2 items-start justify-between">
                  <div>
                    <p className="font-[var(--font-heading)] text-lg">{show.title}</p>
                    <p className="text-sm opacity-70">{show.date} · {show.venue}</p>
                    {show.is_archived && (
                      <p className="text-xs opacity-50 mt-1">Archived → {show.archived_edition_id}</p>
                    )}
                  </div>
                  {!show.is_archived && (
                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() => setEditing(show)}
                        className="text-sm px-3 py-1 border border-[var(--color-text)] border-opacity-40 rounded hover:border-opacity-100 cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setArchiving(show)}
                        className="text-sm px-3 py-1 border border-[var(--color-text)] border-opacity-40 rounded hover:border-opacity-100 cursor-pointer"
                      >
                        Archive
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(show.id)}
                        className="text-sm px-3 py-1 border border-red-400 border-opacity-40 text-red-400 rounded hover:border-opacity-100 cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>

                {/* Inline delete confirmation */}
                {deleteConfirm === show.id && (
                  <div className="mt-3 flex items-center gap-3 text-sm">
                    <span className="opacity-70">Delete this show permanently?</span>
                    <button
                      onClick={() => handleDelete(show.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
                    >
                      Yes, delete
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(null)}
                      className="opacity-60 hover:opacity-100 cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Archive Modal */}
      {archiving && (
        <ArchiveModal
          show={archiving}
          onConfirm={(editionId) => handleArchive(archiving, editionId)}
          onCancel={() => setArchiving(null)}
        />
      )}
    </div>
  );
}

// ── Root ─────────────────────────────────────────────────────────────────────

export default function Admin() {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecking(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
        <p className="text-[var(--color-text)] opacity-60" style={FONT}>Loading...</p>
      </div>
    );
  }

  if (!session) {
    return <LoginForm onLogin={() => {}} />;
  }

  return <Dashboard onSignOut={() => supabase.auth.signOut()} />;
}
