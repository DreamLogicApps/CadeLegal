import { ServiceTemplate } from "@/components/immigration/service-template";
import { immigrationContent } from "@/content/immigration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employment Immigration",
  description: immigrationContent.employmentBased.description,
};

export default function EmploymentImmigrationPage() {
  return <ServiceTemplate content={immigrationContent.employmentBased} />;
}
