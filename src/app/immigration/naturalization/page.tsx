import { ServiceTemplate } from "@/components/immigration/service-template";
import { immigrationContent } from "@/content/immigration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naturalization & Citizenship",
  description: immigrationContent.naturalization.description,
};

export default function NaturalizationPage() {
  return <ServiceTemplate content={immigrationContent.naturalization} />;
}
