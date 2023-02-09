import styles from "@/styles/components/ProductViewer.module.css";
import { ImageField, RichTextField } from "@prismicio/types";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

interface Props {
  className?: string;
  mainSrc: ImageField;
}

export function ProductViewer({ className, mainSrc }: Props) {
  return (
    <div className={`${className} ${styles.Wrapper}`}>
      <Image
        src={String(mainSrc.url)}
        alt={String(mainSrc.alt)}
        width={600}
        height={600}
      />
      {}
    </div>
  );
}
