import styles from "@/styles/components/ProductInfo.module.css";

interface Props {
  className?: string;
}

export function ProductInfo({ className }: Props) {
  return (
    <div className={`${className} ${styles.Wrapper}`}>
      <h1 className={styles.H1}>Carapace Blazer</h1>
      <p>HLT0081-002</p>
      <hr className={styles.Hr} />
      <form className={styles.Form}>
        <div className={styles.FormContent}>
          <label className={styles.Label}>Color</label>
          <div style={{ width: 30, height: 30, background: "navy" }}>{}</div>
          {}
        </div>
        <div className={styles.FormContent}>
          <label className={styles.Label}>Quantity</label>
          <div>2</div>
          {}
        </div>
        <div>
          <div className={styles.BtnCart}>장바구니 담기</div>
        </div>
        <div>
          <div className={styles.BtnPayment}>결제하기</div>
        </div>
      </form>
    </div>
  );
}
