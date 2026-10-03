import { User, Briefcase, PieChart, Wrench } from 'lucide-react';
import styles from './Loans.module.css';

export default function Loans() {
  const loansData = [
    { id: '01.', money: '$100,000', left: '$40,500', duration: '8 Months', rate: '12%', installment: '$2,000 / month' },
    { id: '02.', money: '$500,000', left: '$250,000', duration: '36 Months', rate: '10%', installment: '$8,000 / month' },
    { id: '03.', money: '$900,000', left: '$40,500', duration: '12 Months', rate: '12%', installment: '$5,000 / month' },
    { id: '04.', money: '$50,000', left: '$40,500', duration: '25 Months', rate: '5%', installment: '$2,000 / month' },
    { id: '05.', money: '$50,000', left: '$40,500', duration: '5 Months', rate: '16%', installment: '$10,000 / month' },
    { id: '06.', money: '$80,000', left: '$25,500', duration: '14 Months', rate: '8%', installment: '$2,000 / month' },
    { id: '07.', money: '$12,000', left: '$5,500', duration: '9 Months', rate: '13%', installment: '$500 / month' },
    { id: '08.', money: '$160,000', left: '$100,800', duration: '3 Months', rate: '12%', installment: '$900 / month' },
  ];

  return (
    <div className={styles.container}>
      {/* Cards Overview */}
      <div className={styles.overviewGrid}>
        <div className={styles.overviewCard}>
          <div className={styles.iconCircle} style={{ background: '#e7edff', color: '#2d60ff' }}><User size={22} /></div>
          <div><span>Personal Loans</span><h2>$50,000</h2></div>
        </div>
        <div className={styles.overviewCard}>
          <div className={styles.iconCircle} style={{ background: '#fff5d9', color: '#ffbb38' }}><Briefcase size={22} /></div>
          <div><span>Corporate Loans</span><h2>$100,000</h2></div>
        </div>
        <div className={styles.overviewCard}>
          <div className={styles.iconCircle} style={{ background: '#ffe0eb', color: '#fe5c73' }}><PieChart size={22} /></div>
          <div><span>Business Loans</span><h2>$500,000</h2></div>
        </div>
        <div className={styles.overviewCard}>
          <div className={styles.iconCircle} style={{ background: '#dcfaf8', color: '#16dbcc' }}><Wrench size={22} /></div>
          <div><span>Custom Loans</span><h2>Choose Money</h2></div>
        </div>
      </div>

      {/* Loans Table */}
      <div className={styles.tableCard}>
        <h3 className={styles.title}>Active Loans Overview</h3>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>SL No</th>
                <th>Loan Money</th>
                <th>Left to repay</th>
                <th>Duration</th>
                <th>Interest rate</th>
                <th>Installment</th>
                <th>Repay</th>
              </tr>
            </thead>
            <tbody>
              {loansData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.money}</td>
                  <td>{row.left}</td>
                  <td>{row.duration}</td>
                  <td>{row.rate}</td>
                  <td>{row.installment}</td>
                  <td><button className={styles.repayBtn}>Repay</button></td>
                </tr>
              ))}
              <tr className={styles.totalRow}>
                <td className={styles.red}>Total</td>
                <td className={styles.red}>$1,250,000</td>
                <td className={styles.red}>$750,000</td>
                <td></td>
                <td></td>
                <td className={styles.red}>$50,000 / month</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}