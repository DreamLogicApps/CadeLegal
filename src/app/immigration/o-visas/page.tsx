import { ServiceTemplate } from "@/components/immigration/service-template";
import { immigrationContent } from "@/content/immigration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Visas",
  description: immigrationContent.oVisas.description,
};

export default function OVisasPage() {
  return <ServiceTemplate content={immigrationContent.oVisas} />;
}
