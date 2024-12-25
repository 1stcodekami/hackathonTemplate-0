import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface ShopFilterSectionProps {
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
}

function ShopFilterSection({ itemCount, setItemCount }: ShopFilterSectionProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(4, parseInt(e.target.value || "4", 10)); // Minimum value of 4
    setItemCount(Math.min(32, Math.max(4, value))); // Clamp value between 4 and 20
  };
  return (
    <section className="bg-[#FAF4F4] px-4 py-[31px] flex flex-col md:flex-row gap-8 justify-around items-center">
      {/* LHS */}
      <div className="flex gap-8 items-center">
        <div className="flex gap-2 items-center hover:cursor-pointer">
          <img
            src="/images/filter_icon.png"
            alt="filter icon"
            className="block"
          />
          <p>Filter</p>
        </div>

        <div className="hover:cursor-pointer">
          <img src="/images/grid_icon.png" alt="grid icon" className="block" />
        </div>
        <div className="hover:cursor-pointer">
          <img src="/images/list_icon.png" alt="list icon" className="block" />
        </div>
        <div className="hidden md:block">
          <Separator
            orientation="vertical"
            className="h-[37px] border border-[#9F9F9F]"
          />
        </div>
        <p className="text-normal">Showing 1 - 16 of 32 results</p>
      </div>
      {/* RHS */}
      <div className="flex gap-8">
        <div className="flex gap-[17px] items-center">
          <p className="text-[20px]">Show</p>
          {/* <Input type="number" className="bg-white w-[65px] h-[55px]" /> */}
          <div>
      <input
        type="number"
        value={itemCount}
        onChange={handleInputChange}
        min={4} // Ensure minimum value
        className="bg-white w-[65px] h-[55px]"
      />
    </div>
        </div>
        <div className="flex gap-[17px] items-center">
          <p className="text-[20px]">Sort by</p>
          <Select>
            <SelectTrigger className="w-[180px] h-[55px]">
              <SelectValue placeholder="Select a filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filter</SelectLabel>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="type">Type</SelectItem>
                <SelectItem value="price">Price</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      
    </section>
  );
}

export default ShopFilterSection;
