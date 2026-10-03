import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CreditCard, Lock, Cpu } from 'lucide-react';
import styles from './CreditCards.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CreditCards() {
  const chartData = {
    labels: ['DBL Bank', 'BRC Bank', 'ABM Bank', 'MCP Bank'],
    datasets: [{
      data: [30, 25, 20, 25],
      backgroundColor: ['#4c49ed', '#fe5c73', '#16dbcc', '#ffbb38'],
      borderWidth: 0,
    }]
  };

  return (
    <div className={styles.container}>
      {/* My Cards */}
      <section className={styles.section}>
        <h3 className={styles.title}>My Cards</h3>
        <div className={styles.cardsGrid}>
          <div className={`${styles.card} ${styles.blueCard}`}>
            <div className={styles.cardHeader}>
              <div><span className={styles.cardLabel}>Balance</span><h2>$5,756</h2></div>
              <Cpu className={styles.chip} />
            </div>
            <div className={styles.cardDetails}>
              <div><span className={styles.cardLabel}>CARD HOLDER</span><p>Eddy Cusuma</p></div>
              <div><span className={styles.cardLabel}>VALID THRU</span><p>12/22</p></div>
            </div>
            <div className={styles.cardFooter}>
              <span>3778 **** **** 1234</span>
              <div className={styles.mastercard}></div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.darkCard}`}>
            <div className={styles.cardHeader}>
              <div><span className={styles.cardLabel}>Balance</span><h2>$5,756</h2></div>
              <Cpu className={styles.chip} />
            </div>
            <div className={styles.cardDetails}>
              <div><span className={styles.cardLabel}>CARD HOLDER</span><p>Eddy Cusuma</p></div>
              <div><span className={styles.cardLabel}>VALID THRU</span><p>12/22</p></div>
            </div>
            <div className={styles.cardFooter}>
              <span>3778 **** **** 1234</span>
              <div className={styles.mastercard}></div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.whiteCard}`}>
            <div className={styles.cardHeader}>
              <div><span className={styles.cardLabel}>Balance</span><h2>$5,756</h2></div>
              <Cpu className={`${styles.chip} ${styles.grayChip}`} />
            </div>
            <div className={styles.cardDetails}>
              <div><span className={styles.cardLabel}>CARD HOLDER</span><p>Eddy Cusuma</p></div>
              <div><span className={styles.cardLabel}>VALID THRU</span><p>12/22</p></div>
            </div>
            <div className={styles.cardFooter}>
              <span>3778 **** **** 1234</span>
              <div className={`${styles.mastercard} ${styles.grayMastercard}`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Grid */}
      <div className={styles.gridTwo}>
        <div className={styles.cardBox}>
          <h3 className={styles.title}>Card Expense Statistics</h3>
          <div className={styles.chartWrapper}>
            <Doughnut data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className={styles.cardBox}>
          <h3 className={styles.title}>Card List</h3>
          <div className={styles.list}>
            {[
              { type: 'Secondary', bank: 'DBL Bank', number: '**** **** 5600', name: 'William', color: '#e7edff', iconColor: '#2d60ff' },
              { type: 'Secondary', bank: 'BRC Bank', number: '**** **** 4300', name: 'Michel', color: '#ffe0eb', iconColor: '#fe5c73' },
              { type: 'Secondary', bank: 'ABM Bank', number: '**** **** 7560', name: 'Edward', color: '#fff5d9', iconColor: '#ffbb38' }
            ].map((item, idx) => (
              <div key={idx} className={styles.listItem}>
                <div className={styles.iconWrapper} style={{ backgroundColor: item.color, color: item.iconColor }}>
                  <CreditCard size={20} />
                </div>
                <div><span>Card Type</span><p>{item.type}</p></div>
                <div><span>Bank</span><p>{item.bank}</p></div>
                <div><span>Card Number</span><p>{item.number}</p></div>
                <div><span>Namain Card</span><p>{item.name}</p></div>
                <button className={styles.linkBtn}>View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className={styles.gridForm}>
        <div className={styles.cardBox}>
          <h3 className={styles.title}>Add New Card</h3>
          <p className={styles.desc}>Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder...</p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label>Card Type</label>
              <input type="text" defaultValue="Classic" />
            </div>
            <div className={styles.inputGroup}>
              <label>Name On Card</label>
              <input type="text" defaultValue="My Cards" />
            </div>
            <div className={styles.inputGroup}>
              <label>Card Number</label>
              <input type="text" defaultValue="**** **** **** ****" />
            </div>
            <div className={styles.inputGroup}>
              <label>Expiration Date</label>
              <select defaultValue="25 January 2025">
                <option>25 January 2025</option>
              </select>
            </div>
            <button className={styles.submitBtn}>Add Card</button>
          </form>
        </div>

        <div className={styles.cardBox}>
          <h3 className={styles.title}>Card Setting</h3>
          <div className={styles.settingsList}>
            <div className={styles.settingItem}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#fff5d9', color: '#ffbb38' }}><CreditCard size={20} /></div>
              <div><h4>Block Card</h4><p>Instantly block your card</p></div>
            </div>
            <div className={styles.settingItem}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#e7edff', color: '#2d60ff' }}><Lock size={20} /></div>
              <div><h4>Change Pin Code</h4><p>Choose another pin code</p></div>
            </div>
            <div className={styles.settingItem}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#ffe0eb', color: '#fe5c73' }}><CreditCard size={20} /></div>
              <div><h4>Add to Google Pay</h4><p>Withdraw without any card</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}