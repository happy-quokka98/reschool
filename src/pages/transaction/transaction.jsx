// npm i lucide-react
import { useState } from "react";
import { Cpu, ArrowUp, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import "./Transactions.css";

/* ---------- static data ---------- */
const EXPENSE_BARS = [
  { month: "Aug", value: 55 },
  { month: "Sep", value: 100 },
  { month: "Oct", value: 70 },
  { month: "Nov", value: 38 },
  { month: "Dec", value: 85, active: true, label: "$12,500" },
  { month: "Jan", value: 62 },
];

const ROWS = [
  { name: "Spotify Subscription", id: "#12548796", type: "Shopping", date: "28 Jan, 12.30 AM", amount: -2500 },
  { name: "Freepik Sales", id: "#12548796", type: "Transfer", date: "25 Jan, 10.40 PM", amount: 750 },
  { name: "Mobile Service", id: "#12548796", type: "Service", date: "20 Jan, 10.40 PM", amount: -150 },
  { name: "Wilson", id: "#12548796", type: "Transfer", date: "15 Jan, 03.29 PM", amount: -1050 },
  { name: "Emilly", id: "#12548796", type: "Transfer", date: "14 Jan, 10.40 PM", amount: 840 },
];

const TABS = ["All Transactions", "Income", "Expense"];

const money = (n) => `${n < 0 ? "-" : "+"}$${Math.abs(n).toLocaleString()}`;

function BankCard({ variant }) {
  return (
    <div className={`tx-card tx-card--${variant}`}>
      <div className="tx-card-top">
        <div><small>Balance</small><strong>$5,756</strong></div>
        <Cpu size={28} strokeWidth={1.5} />
      </div>
      <div className="tx-card-meta">
        <div><small>CARD HOLDER</small><b>Eddy Cusuma</b></div>
        <div><small>VALID THRU</small><b>12/22</b></div>
      </div>
      <div className="tx-card-bottom">
        <span>3778 **** **** 1234</span>
        <i className="tx-card-circles" />
      </div>
    </div>
  );
}

/* ---------- page ---------- */
export default function Transactions() {
  const [tab, setTab] = useState("All Transactions");
  const [page, setPage] = useState(1);
  const totalPages = 4;

  const rows = ROWS.filter((r) =>
    tab === "Income" ? r.amount > 0 : tab === "Expense" ? r.amount < 0 : true
  );

  return (
    <div className="tx">
      <main className="tx-main">
        <section className="tx-top">
          <div className="tx-top-cards">
            <div className="tx-title-row"><h2>My Cards</h2><button className="tx-link">+ Add Card</button></div>
            <div className="tx-cards">
              <BankCard variant="blue" />
              <BankCard variant="white" />
            </div>
          </div>

          <div>
            <h2>My Expense</h2>
            <div className="tx-panel tx-expense">
              {EXPENSE_BARS.map((b) => (
                <div key={b.month} className="tx-expense-col">
                  <div className="tx-expense-track">
                    {b.active && <span className="tx-tooltip">{b.label}</span>}
                    <span
                      className={`tx-expense-bar ${b.active ? "is-active" : ""}`}
                      style={{ height: `${b.value}%` }}
                    />
                  </div>
                  <small>{b.month}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tx-recent">
          <h2>Recent Transactions</h2>
          <div className="tx-tabs" role="tablist">
            {TABS.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                className={`tx-tab ${tab === t ? "is-active" : ""}`}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="tx-panel tx-table-wrap">
            <table className="tx-table">
              <thead>
                <tr>
                  <th>Description</th><th>Transaction ID</th><th>Type</th>
                  <th>Card</th><th>Date</th><th>Amount</th><th>Receipt</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i}>
                    <td>
                      <span className="tx-desc">
                        <span className="tx-arrow">{r.amount < 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}</span>
                        {r.name}
                      </span>
                    </td>
                    <td>{r.id}</td>
                    <td>{r.type}</td>
                    <td>1234 ****</td>
                    <td>{r.date}</td>
                    <td className={r.amount < 0 ? "neg" : "pos"}>{money(r.amount)}</td>
                    <td><button className="tx-download">Download</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <nav className="tx-pager" aria-label="Pagination">
            <button disabled={page === 1} onClick={() => setPage(page - 1)}><ChevronLeft size={16} /> Previous</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button key={n} className={n === page ? "is-active" : ""} onClick={() => setPage(n)}>{n}</button>
            ))}
            <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next <ChevronRight size={16} /></button>
          </nav>
        </section>
      </main>
    </div>
  );
}
