import React from "react";
import styles from "./OrderDetails.module.css";

export default function OrderDetails() {
  return (
    <div className={styles.bg}>
      <div className={styles.headerRow}>
        <h2 className={styles.title}>Order List</h2>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search anything here..."
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>
      </div>
      <div className={styles.stepsRow}>
        <span className={styles.stepActive}>1 <b>Order received</b></span>
        <span className={styles.step}>2 <b>Order generate</b></span>
        <span className={styles.step}>3 <b>Order transmited</b></span>
        <span className={styles.step}>4 <b>Order delivered</b></span>
      </div>
      <div className={styles.detailsCard}>
        <div className={styles.detailsHeader}>
          <div>
            <b>Order details</b>
            <div className={styles.detailsTable}>
              <div>
                <div>Order no:</div>
                <div>From:</div>
                <div>Code:</div>
              </div>
              <div>
                <div>EL-5414587</div>
                <div>25 Dec, 2022</div>
                <div>EL005</div>
              </div>
            </div>
          </div>
          <button className={styles.invoiceBtn}>Invoice</button>
        </div>
        <div className={styles.detailGrid}>
          <div className={styles.detailBox}>
            <b>Product detail</b>
            <div className={styles.productMiniCard}>
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=100"
                alt="Camera"
                className={styles.productImg}
              />
              <div>
                <div>Camera</div>
                <div>$200</div>
                <div className={styles.productNote}>
                  Order was delivered 2 days ago<br />
                  <span style={{ color: "#23c16b" }}>Delivered</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.detailBox}>
            <b>Billing Information</b>
            <div>
              <div>Company Name : Viking Burrito</div>
              <div>Email Address : Oliver.viking@burrito.com</div>
              <div>VAT number : FRB1235476</div>
            </div>
          </div>
          <div className={styles.detailBox}>
            <b>Payment detail</b>
            <div>
              <div>Master 1234 **** 58745</div>
              <div>Expire 12/23</div>
              <div>Aiden Max</div>
              <div className={styles.paymentIcons}>
                <span className={styles.mastercard}></span>
                <span className={styles.mastercardOrange}></span>
              </div>
            </div>
          </div>
          <div className={styles.detailBox}>
            <b>Order Summary</b>
            <div>
              <div>Product Price : $200</div>
              <div>Delivery : $10</div>
              <div>Taxes : $20</div>
              <div>Total : $230</div>
              <div>
                <span>Do you like the product? leave us a review here</span>
                <div className={styles.stars}>
                  ★★★★☆
                  <button className={styles.submitBtn}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}