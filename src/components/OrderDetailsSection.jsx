import React from "react";
import styles from "./OrderDetailsSection.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";

export default function OrderDetailsSection() {
  return (
    <div className={styles.container}>
      {/* Header: Order details (left) + Invoice button (right) */}
      <div className={styles.headerRow}>
        <div>
          <div className={styles.orderDetailsTitle}>Order details</div>
          <div className={styles.orderMeta}>
            <span>Order no:</span> <span className={styles.metaValue}>EL-5414587</span><br/>
            <span>From:</span> <span className={styles.metaValue}>25 Dec, 2022</span><br/>
            <span>Code:</span> <span className={styles.metaValue}>EL005</span>
          </div>
        </div>
        <button className={styles.invoiceBtn}>Invoice</button>
      </div>
      <div className={styles.grid}>
        {/* Product detail */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>Product detail</div>
          <div className={styles.productRow}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920024.png"
              alt="Camera"
              className={styles.productImg}
            />
            <div>
              <div className={styles.productName}>Camera</div>
              <div className={styles.productPrice}>$200</div>
              <div className={styles.productNote}>Order was delivered 2 days ago</div>
              <div className={styles.productStatus}>Delivered</div>
            </div>
            <FiHelpCircle className={styles.helpIcon} />
          </div>
        </div>
        {/* Billing Information */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>Billing Information</div>
          <div className={styles.billingRow}>
            <div>
              <div className={styles.billingName}>Oliver Liam</div>
              <div className={styles.billingLine}><span>Company Name :</span> Viking Burrito</div>
              <div className={styles.billingLine}><span>Email Address :</span> Oliver.viking@burrito.com</div>
              <div className={styles.billingLine}><span>VAT number :</span> FRB1235476</div>
            </div>
            <FiHelpCircle className={styles.helpIcon} />
          </div>
        </div>
        {/* Payment Detail */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>Payment detail</div>
          <div className={styles.paymentBox}>
            <div className={styles.cardTypeRow}>
              <span className={styles.paymentCardType}>Master Card</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/196/196561.png"
                alt="MasterCard"
                className={styles.paymentCardIcon}
              />
            </div>
            <div className={styles.paymentRow}>Master 1234 **** 58745</div>
            <div className={styles.paymentRow}>Expire 12/23</div>
            <div className={styles.paymentCardHolder}>Aiden Max</div>
          </div>
        </div>
        {/* Order Summary */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>Order Summary</div>
          <div className={styles.summaryLine}><span>Product Price :</span> <span>$200</span></div>
          <div className={styles.summaryLine}><span>Delivery :</span> <span>$10</span></div>
          <div className={styles.summaryLine}><span>Taxes :</span> <span>$20</span></div>
          <div className={styles.summaryLine}><span className={styles.summaryTotal}>Total :</span> <span className={styles.summaryTotal}>$230</span></div>
          <div className={styles.reviewBlock}>
            <div className={styles.reviewText}>Do you like the product?<br/>leave us a review here</div>
            <div className={styles.stars}>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
            </div>
            <button className={styles.submitBtn}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}