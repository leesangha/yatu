import styles from "@/styles/components/ProductViewer.module.css";
import Image from "next/image";

interface Props {
  className?: string;
}

export function ProductViewer({ className }: Props) {
  return (
    <div className={`${className} ${styles.Wrapper}`}>
      <Image src={""} alt="" width={600} height={600} />
      {}
    </div>
  );
}
