// Small line icons, drawn as vectors so they stay crisp and take the page colour.
const P = {
  id: <><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="2.2" /><path d="M5.5 16c.6-1.8 2-2.6 3.5-2.6s2.9.8 3.5 2.6M14.5 10h4M14.5 13h3" /></>,
  plane: <path d="M2 14l8-2-4-8 2-1 7 7 6-2c1.5-.4 2.5 1 1 2l-5 3 1 7-2 1-3-6-6 2-1-2z" />,
  coins: <><ellipse cx="9" cy="7" rx="6" ry="3" /><path d="M3 7v5c0 1.7 2.7 3 6 3M3 12v5c0 1.7 2.7 3 6 3" /><ellipse cx="16" cy="14" rx="5" ry="2.5" /><path d="M11 14v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 19c.5-3 3-5 6-5s5.5 2 6 5" /><circle cx="17" cy="9" r="2.3" /><path d="M16 14.2c2.6-.3 4.6 1.3 5 4.3" /></>,
  card: <><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18M7 15h4" /></>,
  badge: <><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  door: <><path d="M5 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17M3 21h18" /><circle cx="12.5" cy="12" r=".8" /></>,
  bank: <><path d="M3 9l9-5 9 5M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 21h18" /></>,
  phone: <><rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M11 18.5h2" /></>,
  flag: <><path d="M5 21V4M5 4h11l-2 4 2 4H5" /></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5L21 21" /></>,
  ticket: <><path d="M3 8a2 2 0 0 0 0 8v2h18v-2a2 2 0 0 1 0-8V6H3z" /><path d="M14 6v12" strokeDasharray="2 2" /></>,
};

export default function Icon({ name, size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {P[name]}
    </svg>
  );
}
