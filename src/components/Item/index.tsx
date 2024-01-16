import Image from "next/image";

interface ItemProps {
  name: string;
  image: string;
}

const Item = ({ name, image }: ItemProps) => {
  return (
    <div className="inline-flex shrink-0 border rounded-full px-2 py-1">
      {image && <Image src={image} width={14} height={14} alt="image" />}
      <span className="text-xs ml-1 cursor-default">{name}</span>
    </div>
  );
};

export default Item;
