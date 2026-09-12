import { ServiceTemplate } from "@/components/immigration/service-template";
import { immigrationContent } from "@/content/immigration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Immigration (EB-5)",
  description: immigrationContent.eb5.description,
};

export default function EB5Page() {
  return <ServiceTemplate content={immigrationContent.eb5} />;
}
