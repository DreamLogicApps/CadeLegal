import { ServiceTemplate } from "@/components/immigration/service-template";
import { immigrationContent } from "@/content/immigration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E Visas",
  description: immigrationContent.eVisas.description,
};

export default function EVisasPage() {
  return <ServiceTemplate content={immigrationContent.eVisas} />;
}
