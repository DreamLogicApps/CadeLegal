import { ServiceTemplate } from "@/components/immigration/service-template";
import { immigrationContent } from "@/content/immigration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Immigration",
  description: immigrationContent.familyBased.description,
};

export default function FamilyImmigrationPage() {
  return <ServiceTemplate content={immigrationContent.familyBased} />;
}
