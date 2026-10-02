import { Send, ChevronRight, Cpu, Wallet } from "lucide-react";
import "./dashboard.css";


const RECENT = [
  { title: "Deposit from my Card", date: "28 January 2021", amount: "-$850", color: "#ffe0eb", icon: Wallet },
  { title: "Deposit Paypal", date: "25 January 2021", amount: "+$2,500", color: "#e7edff", icon: Wallet },
  { title: "Jemi Wilson", date: "21 January 2021", amount: "+$5,400", color: "#dcfaf8", icon: Wallet },
];

const WEEK = [
  { day: "Sat", deposit: 240, withdraw: 480 },
  { day: "Sun", deposit: 130, withdraw: 350 },
  { day: "Mon", deposit: 260, withdraw: 320 },
  { day: "Tue", deposit: 370, withdraw: 480 },
  { day: "Wed", deposit: 240, withdraw: 150 },
  { day: "Thu", deposit: 240, withdraw: 390 },
  { day: "Fri", deposit: 330, withdraw: 390 },
];

const EXPENSES = [
  { label: "Entertainment", value: 30, color: "#343c6a" },
  { label: "Bill Expense", value: 15, color: "#ff8a00" },
  { label: "Others", value: 35, color: "#1814f3" },
  { label: "Investment", value: 20, color: "#fc00ff" },
];

const PEOPLE = [
  { name: "Livia Bator", role: "CEO", color: "#f4b183" },
  { name: "Randy Press", role: "Director", color: "#8d6e63" },
  { name: "Workman", role: "Designer", color: "#607d8b" },
];

const BALANCE = [130, 330, 250, 170, 480, 780, 330, 200, 620, 340, 300, 660, 600];
const MONTHS = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];



function PieChart() {
  const cx = 110, cy = 110, r = 88;
  let angle = -100;
  return (
    <svg viewBox="0 0 220 220" className="dash-pie">
      {EXPENSES.map((s) => {
        const sweep = (s.value / 100) * 360;
        const start = angle, end = angle + sweep, mid = angle + sweep / 2;
        angle = end;
        const [x1, y1] = polar(cx, cy, r, start);
        const [x2, y2] = polar(cx, cy, r, end);
        const [ox, oy] = polar(0, 0, 8, mid); // "exploded" offset
        const [tx, ty] = polar(cx, cy, r * 0.62, mid);
        return (
          <g key={s.label} transform={`translate(${ox} ${oy})`}>
            <path
              d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${sweep > 180 ? 1 : 0} 1 ${x2},${y2} Z`}
              fill={s.color}
              stroke="#fff"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <text x={tx} y={ty - 2} textAnchor="middle" className="dash-pie-pct">{s.value}%</text>
            <text x={tx} y={ty + 11} textAnchor="middle" className="dash-pie-label">{s.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function BalanceChart() {
  const W = 600, H = 200, max = 800;
  const pts = BALANCE.map((v, i) => [(i / (BALANCE.length - 1)) * W, H - (v / max) * H]);
  const line = pts.reduce((d, p, i, a) => {
    if (i === 0) return `M${p[0]},${p[1]}`;
    const cx = (a[i - 1][0] + p[0]) / 2;
    return `${d} C${cx},${a[i - 1][1]} ${cx},${p[1]} ${p[0]},${p[1]}`;
  }, "");
  return (
    <div className="dash-line">
      <div className="dash-line-y">
        {[800, 600, 400, 200, 0].map((n) => <span key={n}>{n}</span>)}
      </div>
      <div className="dash-line-plot">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="dashFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2d60ff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#2d60ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1="0" x2={W} y1={(i * H) / 4} y2={(i * H) / 4} className="dash-grid" />
          ))}
          <path d={`${line} L${W},${H} L0,${H} Z`} fill="url(#dashFill)" />
          <path d={line} fill="none" stroke="#1814f3" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="dash-line-x">{MONTHS.map((m) => <span key={m}>{m}</span>)}</div>
      </div>
    </div>
  );
}

function BankCard({ variant }) {
  return (
    <div className={`dash-card dash-card--${variant}`}>
      <div className="dash-card-top">
        <div>
          <small>Balance</small>
          <strong>$5,756</strong>
        </div>
        <Cpu size={28} strokeWidth={1.5} />
      </div>
      <div className="dash-card-meta">
        <div><small>CARD HOLDER</small><b>Eddy Cusuma</b></div>
        <div><small>VALID THRU</small><b>12/22</b></div>
      </div>
      <div className="dash-card-bottom">
        <span>3778 **** **** 1234</span>
        <i className="dash-card-circles" />
      </div>
    </div>
  );
}

/* ---------- page ---------- */
export default function Dashboard() {
  return (
    <div className="dash">
      <main className="dash-main">
        <section className="dash-grid-top">
          <div>
            <div className="dash-title-row"><h2>My Cards</h2><a href="#all">See All</a></div>
            <div className="dash-cards">
              <BankCard variant="blue" />
              <BankCard variant="white" />
            </div>
          </div>

          <div>
            <h2>Recent Transaction</h2>
            <ul className="dash-panel dash-recent">
              {RECENT.map(({ title, date, amount, color, icon: Icon }) => (
                <li key={title}>
                  <span className="dash-recent-icon" style={{ background: color }}><Icon size={20} /></span>
                  <div><b>{title}</b><small>{date}</small></div>
                  <em className={amount.startsWith("-") ? "neg" : "pos"}>{amount}</em>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="dash-grid-mid">
          <div>
            <h2>Weekly Activity</h2>
            <div className="dash-panel dash-weekly">
              <div className="dash-legend">
                <span><i style={{ background: "#16dbcc" }} /> Diposit</span>
                <span><i style={{ background: "#1814f3" }} /> Withdraw</span>
              </div>
              <div className="dash-weekly-body">
                <div className="dash-weekly-y">
                  {[500, 400, 300, 200, 100, 0].map((n) => <span key={n}>{n}</span>)}
                </div>
                <div className="dash-weekly-bars">
                  {WEEK.map((d) => (
                    <div className="dash-weekly-day" key={d.day}>
                      <div className="dash-weekly-pair">
                        <span className="bar bar--withdraw" style={{ height: `${(d.withdraw / 500) * 100}%` }} />
                        <span className="bar bar--deposit" style={{ height: `${(d.deposit / 500) * 100}%` }} />
                      </div>
                      <small>{d.day}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2>Expense Statistics</h2>
            <div className="dash-panel dash-pie-panel"><PieChart /></div>
          </div>
        </section>

        <section className="dash-grid-bottom">
          <div>
            <h2>Quick Transfer</h2>
            <div className="dash-panel dash-transfer">
              <div className="dash-people">
                {PEOPLE.map((p) => (
                  <div key={p.name} className="dash-person">
                    <span className="dash-avatar dash-avatar--lg" style={{ background: p.color }} />
                    <b>{p.name}</b>
                    <small>{p.role}</small>
                  </div>
                ))}
                <button className="dash-next" aria-label="Next"><ChevronRight size={18} /></button>
              </div>
              <div className="dash-send-row">
                <span>Write Amount</span>
                <div className="dash-send">
                  <input defaultValue="525.50" />
                  <button>Send <Send size={16} /></button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2>Balance History</h2>
            <div className="dash-panel"><BalanceChart /></div>
          </div>
        </section>
      </main>
    </div>
  );
}
