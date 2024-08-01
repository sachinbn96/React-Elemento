import AccordionElement from "./AccordionElement";
import MainNavigation from "./MainNavigation";

export default function Accordion() {
  return (
    <>
      <MainNavigation />
      <div className="p-4 bg-gray-200 rounded-lg">
        <AccordionElement
          title="Do you prefer Android or iOS"
          answer="I like to use iOS products"
        />
        <AccordionElement
          title="Do you prefer writing CSS or Tailwind?"
          answer="I like to use Tailwind"
        />
        <AccordionElement
          title="Firebase or Supabase?"
          answer="I am using Supabase!"
        />
      </div>
    </>
  );
}
