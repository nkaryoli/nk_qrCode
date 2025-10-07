import { Button } from "@/components/ui/button";
import { logos } from "@/constants";

interface SelectOptionBtnsProps {
    onChange: (value: string) => void;
}

const SelectOptionBtns: React.FC<SelectOptionBtnsProps> = ({ onChange }) => {
    
    return (
        <>
            {logos.map((logo) => (
                <Button
                    variant={"neon"}
                    className="w-16 h-16 p-3 bg-white/5 border-input"
                    key={logo.id}
                    onClick={() => onChange && onChange(logo.image)}
                >
                    <img src={logo.image} alt={logo.label}  />
                </Button>
            ))}
        </>
    )
};

export default SelectOptionBtns;