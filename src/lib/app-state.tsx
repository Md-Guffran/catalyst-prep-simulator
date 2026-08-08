import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type OnboardingData = {
  goal: string;
  subjects: string[];
  target: string;
  completed: boolean;
};

type AppState = {
  enrolled: string[];
  bookmarks: { id: string; source: "bank" | "pyq" }[];
  readNotifications: string[];
  reminders: string[];
  lectureProgress: Record<string, number>;
  onboarding: OnboardingData | null;
  profile: { name: string; target: string; targetYear: string; city: string };
};

const STORAGE_KEY = "jee-catalyst-state-v1";

const initialState: AppState = {
  enrolled: ["complete-physics"],
  bookmarks: [
    { id: "q4", source: "bank" },
    { id: "pyq-2", source: "pyq" },
  ],
  readNotifications: [],
  reminders: [],
  lectureProgress: {},
  onboarding: null,
  profile: {
    name: "Guffran",
    target: "JEE Main + Advanced",
    targetYear: "2027",
    city: "Lucknow",
  },
};

type Ctx = {
  state: AppState;
  hydrated: boolean;
  enroll: (courseId: string) => void;
  isEnrolled: (courseId: string) => boolean;
  toggleBookmark: (id: string, source: "bank" | "pyq") => boolean;
  isBookmarked: (id: string) => boolean;
  removeBookmark: (id: string) => void;
  markRead: (id: string) => void;
  markAllRead: (ids: string[]) => void;
  isRead: (id: string) => boolean;
  toggleReminder: (id: string) => boolean;
  hasReminder: (id: string) => boolean;
  setLectureProgress: (id: string, value: number) => void;
  getLectureProgress: (id: string, fallback: number) => number;
  saveOnboarding: (data: OnboardingData) => void;
  updateProfile: (data: Partial<AppState["profile"]>) => void;
};

const AppStateContext = createContext<Ctx | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...initialState, ...(JSON.parse(raw) as AppState) });
    } catch {
      /* demo-only persistence */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore quota errors in demo */
    }
  }, [state, hydrated]);

  const enroll = useCallback((courseId: string) => {
    setState((s) =>
      s.enrolled.includes(courseId) ? s : { ...s, enrolled: [...s.enrolled, courseId] },
    );
  }, []);

  const toggleBookmark = useCallback((id: string, source: "bank" | "pyq") => {
    let added = false;
    setState((s) => {
      const exists = s.bookmarks.some((b) => b.id === id);
      added = !exists;
      return {
        ...s,
        bookmarks: exists ? s.bookmarks.filter((b) => b.id !== id) : [...s.bookmarks, { id, source }],
      };
    });
    return added;
  }, []);

  const toggleReminder = useCallback((id: string) => {
    let added = false;
    setState((s) => {
      const exists = s.reminders.includes(id);
      added = !exists;
      return { ...s, reminders: exists ? s.reminders.filter((r) => r !== id) : [...s.reminders, id] };
    });
    return added;
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      state,
      hydrated,
      enroll,
      isEnrolled: (id) => state.enrolled.includes(id),
      toggleBookmark,
      isBookmarked: (id) => state.bookmarks.some((b) => b.id === id),
      removeBookmark: (id) =>
        setState((s) => ({ ...s, bookmarks: s.bookmarks.filter((b) => b.id !== id) })),
      markRead: (id) =>
        setState((s) =>
          s.readNotifications.includes(id)
            ? s
            : { ...s, readNotifications: [...s.readNotifications, id] },
        ),
      markAllRead: (ids) => setState((s) => ({ ...s, readNotifications: [...new Set([...s.readNotifications, ...ids])] })),
      isRead: (id) => state.readNotifications.includes(id),
      toggleReminder,
      hasReminder: (id) => state.reminders.includes(id),
      setLectureProgress: (id, v) =>
        setState((s) => ({ ...s, lectureProgress: { ...s.lectureProgress, [id]: v } })),
      getLectureProgress: (id, fallback) => state.lectureProgress[id] ?? fallback,
      saveOnboarding: (data) => setState((s) => ({ ...s, onboarding: data })),
      updateProfile: (data) => setState((s) => ({ ...s, profile: { ...s.profile, ...data } })),
    }),
    [state, hydrated, enroll, toggleBookmark, toggleReminder],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider");
  return ctx;
}
