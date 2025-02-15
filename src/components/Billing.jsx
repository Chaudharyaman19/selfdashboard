import "./billing.css";
function Billing() {
  return (
    <>
      {" "}
      <div className="billing-container">
        <h1>Billing & Invoices</h1>

        <div className="billing-summary">
          <div className="summary-card">
            <h3>Total Balance</h3>
            <p>$2,500.00</p>
          </div>
          <div className="summary-card">
            <h3>Due Date</h3>
            <p>March 15, 2025</p>
          </div>
          <div className="summary-card">
            <h3>Last Payment</h3>
            <p>$500.00 (Feb 10, 2025)</p>
          </div>
        </div>

        <div className="invoice-section">
          <h2>Recent Invoices</h2>
          <table>
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>INV-001</td>
                <td>Feb 1, 2025</td>
                <td>$500.00</td>
                <td className="status-paid">Paid</td>
              </tr>
              <tr>
                <td>INV-002</td>
                <td>Jan 15, 2025</td>
                <td>$1,000.00</td>
                <td className="status-pending">Pending</td>
              </tr>
              <tr>
                <td>INV-003</td>
                <td>Dec 20, 2024</td>
                <td>$1,000.00</td>
                <td className="status-paid">Paid</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="payment-methods">
          <h2>Payment Methods</h2>
          <div className="methods-list">
            <div className="method-card">
              <h3>Credit Card</h3>
              <p>**** **** **** 1234</p>
            </div>
            <div className="method-card">
              <h3>PayPal</h3>
              <p>user@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Billing;
