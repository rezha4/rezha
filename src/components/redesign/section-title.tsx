import OrangeBox from "./orange-box";

export default function SectionTitle({ title }: { title: string; }) {
  return (
    <div className="flex items-center gap-1">
      <OrangeBox />
      <p>{title}</p>
    </div>
  );
}
