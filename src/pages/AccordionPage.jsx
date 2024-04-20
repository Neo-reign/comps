import Accordion from "../components/Accordion";

export const AccordionPage = () => {
  const items = [
    {
      id:"ufyd",
      label: "Can I use react on my projects",
      content: "You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want."
    },
    
    {
      id:"ud3x",
      label: "Can I use Javascript on my projects",
      content: "You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want."
    },
    
    {
      id:"onoe",
      label: "Can I use Rust on my projects",
      content: "You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want."
    }
  ]
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}