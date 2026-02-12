'use client';

import { useState } from 'react';
import BillHeader from '@/components/BillHeader';
import BillItems from '@/components/BillItems';
import BottomNav from '@/components/BottomNav';
import PaymentModal from '@/components/PaymentModal';
import SplitModal from '@/components/SplitModal';
import PayItemsModal from '@/components/PayItemsModal';
import DivideEquallyModal from '@/components/DivideEquallyModal';
import TipModal from '@/components/TipModal';
import SuccessScreen from '@/components/SuccessScreen';
import { restaurant, billItems } from '@/data/mockBill';
import styles from './page.module.css';

// modal states
const MODAL = {
  NONE: null,
  PAYMENT: 'payment',
  SPLIT: 'split',
  PAY_ITEMS: 'payItems',
  DIVIDE_EQUAL: 'divideEqual',
  TIP: 'tip',
  SUCCESS: 'success',
};

export default function BillPage() {
  const [modal, setModal] = useState(MODAL.NONE);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [numPeople, setNumPeople] = useState(2);
  const [paidAmount, setPaidAmount] = useState(null);

  const totalAmount = billItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const selectedTotal = billItems
    .filter(item => selectedItems.has(item.id))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const perPersonAmount = totalAmount / numPeople;

  const handlePayFull = () => {
    setPaidAmount(totalAmount);
    setModal(MODAL.TIP);
  };

  const handleConfirmItems = () => {
    setPaidAmount(selectedTotal);
    setModal(MODAL.TIP);
  };

  const handleConfirmDivide = () => {
    setPaidAmount(perPersonAmount);
    setModal(MODAL.TIP);
  };

  const handleConfirmTip = (tipPercent) => {
    setPaidAmount(prev => prev * (1 + tipPercent));
    setModal(MODAL.SUCCESS);
  };

  const handleDone = () => {
    setModal(MODAL.NONE);
    setSelectedItems(new Set());
    setNumPeople(2);
    setPaidAmount(null);
  };

  return (
    <div className={styles.page}>
      <div className={styles.scrollArea}>
        <BillHeader restaurant={restaurant} />

        <main className={styles.main}>
          <div className={styles.tableInfo}>
            <span className={styles.tableLabel}>Table {restaurant.tableNumber}</span>
          </div>

          <div className={styles.billSummary}>
            <span className={styles.leftToPayLabel}>Left to pay</span>
            <span className={styles.totalAmount}>${totalAmount.toFixed(2)}</span>
          </div>

          <BillItems items={billItems} />

          <div className={styles.payButtonWrapper}>
            <button
              className={styles.payBtn}
              onClick={() => setModal(MODAL.PAYMENT)}
            >
              Pay or split bill
            </button>
          </div>
        </main>
      </div>

      <BottomNav activePage="pay" />

      {/* Modals */}
      {modal === MODAL.PAYMENT && (
        <PaymentModal
          onClose={() => setModal(MODAL.NONE)}
          onSplit={() => setModal(MODAL.SPLIT)}
          onPayFull={handlePayFull}
        />
      )}

      {modal === MODAL.SPLIT && (
        <SplitModal
          onClose={() => setModal(MODAL.NONE)}
          onBack={() => setModal(MODAL.PAYMENT)}
          onPayItems={() => setModal(MODAL.PAY_ITEMS)}
          onDivideEqually={() => setModal(MODAL.DIVIDE_EQUAL)}
        />
      )}

      {modal === MODAL.PAY_ITEMS && (
        <PayItemsModal
          items={billItems}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          selectedTotal={selectedTotal}
          onClose={() => setModal(MODAL.NONE)}
          onBack={() => setModal(MODAL.SPLIT)}
          onConfirm={handleConfirmItems}
        />
      )}

      {modal === MODAL.DIVIDE_EQUAL && (
        <DivideEquallyModal
          totalAmount={totalAmount}
          numPeople={numPeople}
          setNumPeople={setNumPeople}
          onClose={() => setModal(MODAL.NONE)}
          onBack={() => setModal(MODAL.SPLIT)}
          onConfirm={handleConfirmDivide}
        />
      )}

      {modal === MODAL.TIP && (
        <TipModal
          amount={paidAmount}
          onConfirm={handleConfirmTip}
          onClose={() => setModal(MODAL.NONE)}
        />
      )}

      {modal === MODAL.SUCCESS && (
        <SuccessScreen
          amount={paidAmount}
          onClose={handleDone}
        />
      )}
    </div>
  );
}
